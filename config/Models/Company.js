var Joi    = require('joi');
var Schema = {
	create:Joi.object().keys({
		name         : Joi.string().required()
		,categoryId  : Joi.number().required()
		,isConcierge : Joi.boolean().required()
		,ruc         : Joi.string().min(8).max(11).required()
		,ownerName   : Joi.string().min(3).required()
		,ownerEmail  : Joi.string().email().required()
	}).unknown(true)
}

module.exports  =  function(payload){
	return {
		create:function (cb) {
			Joi.validate(payload, Schema.create,cb);
		}
	}
}