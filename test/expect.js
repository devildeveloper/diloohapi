var apiInfo= require('../config/routes/info.json');
var Validator = require('node-validator');
module.exports={
	api:{
		statusCode:200
		,version:apiInfo.version
		,description:apiInfo.description
	}
	,plans:Validator
			.isAnyObject()
				.withRequired('result'
								,Validator.isAnyObject()
											.withRequired('response'
															,Validator.isArray(Validator.isAnyObject()
																						.withRequired('id',Validator.isNumber())
																						.withRequired('name',Validator.isString() ) )))
	,categories:Validator
					.isAnyObject()
					.withRequired('result'
									,Validator.isAnyObject()
												.withRequired('response'
																,Validator.isArray(Validator.isAnyObject()
																							.withRequired('id',Validator.isNumber())
																							.withRequired('name',Validator.isString() ) )))					
}