/*NPM modules*/
//var Client = require('pg-native');
var status = require('hapi-status');
var Models = require('../Models');
var Services = require('../Services');
/*instances*/
//var client = new Client();
module.exports={
	all:function(req,reply){
		req.pg.client('select * from get_companies_sorted_by_category_name',function (pgERR,pgRows) {
	all:function(req,reply){
		req.pg.client.query('select * from get_companies_sorted_by_category_name',function (pgERR,pgRows) {
			if(pgERR){
				console.log('e1')
				return  status.internalServerError(reply,'data base error2');
			}else if(pgRows.rows.length > 0){
				function dynamicSort(property) {
				    var sortOrder = 1;
				    if(property[0] === "-") {
				        sortOrder = -1;
				        property = property.substr(1);
				    }
				    return function (a,b) {
				        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
				        return result * sortOrder;
				    }
				}
				var name = pgRows.rows;
				var category =pgRows.rows.sort(dynamicSort("categoryName"));					
				return status.ok(reply,{name:name,category:category});
			}else{
				return status.noContent(reply,' not results found');
			}
			client.end();
		} )		
	},
	create: function (req,reply){
		var Company = Models.Company; 
		Company(req.payload).create(function (err,value){
			if(err === null ){
				req.isAdmin(function (mongoErr,mongoReply){
					if(mongoErr){
						status.internalServerError(reply,mongoErr)
					}else if(mongoReply !== 0){
						var params = {
							to    :  value.ownerEmail,
							code  :  Services.GenCode()
						}
						Services.Mailing(params,function(servErr,servInfo){
							if( !servErr){
								status.ok(reply)
							}else{
								status.internalServerError(reply,servErr)
							}
						});
						
					}else{
						status.forbidden(reply);
					}
				})
			}else{
				//console.log(err)
				return status.notAcceptable(reply,err);

			}
		})
	}
}