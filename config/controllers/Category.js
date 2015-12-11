/*NPM modules*/
var Client = require('pg-native');
var status = require('hapi-status');
/*instances*/
var client = new Client();
module.exports={
	all:function (req,reply){
		client.connect('postgresql://postgres:1234@localhost:5432/diloopg',function (err){
			if(err){
				var v ='data base error' ;
				return status.internalServerError(reply,v)
			}else{
				client.query('select * from get_categories',function (pgERR,pgRows) {
					if(pgERR){
						return  status.internalServerError(reply,'data base error2');
					}else if(pgRows.length > 0){
						return status.ok(reply,{response:pgRows});
					}else{
						return status.noContent(reply,' not results found');
					}
					client.end();
				})
			}
			
		} )
	}
}