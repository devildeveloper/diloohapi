var Models = require('../Models');
var Status = require('hapi-status');
module.exports={
	Login:{
		employee:function(req,reply){
			var Auth = Models.Auth;
			Auth(req.payload).validate(function (err,value){
				if(err){
					Status.internalServerError(reply);
				}else{
					req.pg.client('select id from employee where');
				}
			})
		},
		mobile:function(req,reply){
			var Auth = Models.Auth;
			Auth(req.payload).validate(function (err,value){
				if(err){
					Status.internalServerError(reply);
				}else{
					Status.noContent(reply);
				}
			})
		}		
	}
}