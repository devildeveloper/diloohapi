/*NPM modules*/
var Client = require('pg-native');
var status = require('hapi-status');
/*instances*/
var client = new Client();
module.exports={
	all:function (req,reply){
		//console.log(req.pg.client)
		req.pg.client.query('select * from get_categories',function (pgERR,pgRows) {
			//console.log(pgRows.rows)
			if(pgERR){
				return  status.internalServerError(reply,'data base error2');
			}else if(pgRows.rows.length > 0){
				return status.ok(reply,{response:pgRows.rows});
			}else{
				return status.noContent(reply,' not results found');
			}
			client.end();
		} );
	}
}