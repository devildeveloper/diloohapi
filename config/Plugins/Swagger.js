var  Pack  = require('../../package.json');
module.exports= {
		register : require('hapi-swagger'),
		options:{
			apiVersion: Pack.version
		}
        
    };