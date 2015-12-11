/*NPM packages*/
var Hapi = require('hapi');
/*custom packages*/
var  Pack  = require('./package');
var routes = {
	v1:require('./config/routes/v1')
}
/*vars*/
var swaggerOptions = {
        apiVersion: Pack.version
    };
var port = process.env.PORT || 1337;

var server = new Hapi.Server({
	connections:{
		routes:{
			cors:false
		}
	}
});


server.connection({port:port,labels:'api'});

server.select('api').route(routes.v1);

server.select('api').register([
	  require('inert'),
	  require('vision'),
    {
        register: require('hapi-swagger'),
        options: swaggerOptions
    }], function (err) {
        server.select('api').start(function(){
            // Add any server.route() config here
            console.log('Diloo is running at:', server.info.uri);
        });
    });

