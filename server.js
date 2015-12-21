/*NPM packages*/
var Hapi         = require('hapi');
/*custom packages*/
var Plugins      = require('./config/Plugins');
var routes       = {
	v1:require('./config/routes/v1')
}
/*vars*/
var HapiSwagger  = Plugins.swagger;
var HapiPostgres = Plugins.postgresql;
var MongoSession = Plugins.session;
var RedisAuth    = Plugins.redisAuth;
var Good         = Plugins.good;
var port         = process.env.PORT || 1337;
//CORS config
var server       = new Hapi.Server({
	connections:{
		routes:{
			cors:false
		}
	}
});

server.connection({
    labels:['api'],
    address:'0.0.0.0',
    port:port    
});

server.select('api').route(routes.v1);
server.select('api').register([
        require('inert'),//for hapiSwagger
        require('vision'), //for hapiSwagger
        HapiSwagger ,
        // HapiPostgres   
        RedisAuth,
        Good
    ], function (err) {
        if(err){
            console.log(err)
        }else{
            //MongoSession.next(server.select('api'));
            server.select('api').start(function(){
                // Add any server.route() config here
                console.log('Diloo is running at:', server.info.uri);
            });            
        }
    });

