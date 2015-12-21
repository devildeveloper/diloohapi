var Joi    = require('joi');
var Schema = Joi.object().keys({
	email   :   Joi.string().email().required()
	,paswd  :   Joi.string().required()
}).unknown(true)

module.exports  = function (payload) {
	return {
		validate:function(cb){
			Joi.validate( payload,Schema,cb );
		}
	}
}