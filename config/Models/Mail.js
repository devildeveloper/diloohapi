var Joi    = require('joi')
var Schema = Joi.object().keys({
	to       : Joi.string().email().required()
	,code    : Joi.string().required()
}).unknown(true) ;

module.exports = function (payload){
	return{
		validate : function (cb){
			Joi.validate(payload,Schema,cb);
		}
	}
}