var nodemailer = require('nodemailer');
var Joi        = require('joi');
var Mail       = {
	credentials : require('../../credentials').Mail,
	schema      : require('../Models').Mail
}
var Mail
module.exports = function(destiny,cb){
	Mail.schema(destiny).validate(function(joiErr, joiValue){
		if(!joiErr){
			var transporter = nodemailer.createTransport({
				service:  Mail.credentials.service,
				auth: {
					user: Mail.credentials.user,
					pass: Mail.credentials.pass
				}
			});   
			var mailOptions = {
				from: 'diloo ✔ <hola@diloo.pe>', 
				to: destiny.to, 
				subject: 'Bienvenido a diloo ✔',
				html:"<p> Este es tu código de activación: </p><b>"+ destiny.code+"</b>"
			};	
			transporter.sendMail(mailOptions, function(mailError, mailInfo){
				cb(mailError,mailInfo)
			});					         
		}else{
			cb(joiErr,joiValue);
		}
	})
}
