/*NPM modules*/
var Client = require('pg-native');
var status = require('hapi-status');
/*instances*/
var client = new Client();
module.exports={
	all:function(req,reply){
		req.pg.client('select * from get_companies_sorted_by_category_name',function (pgERR,pgRows) {
			if(pgERR){
				console.log('e1')
				return  status.internalServerError(reply,'data base error2');
			}else if(pgRows.length > 0){
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
				var name = pgRows;
				var category =pgRows.sort(dynamicSort("categoryName"));					
				return status.ok(reply,{name:name,category:category});
			}else{
				return status.noContent(reply,' not results found');
			}
			client.end();
		} )		
	}
}