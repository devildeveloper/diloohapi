module.exports={
	register:require('hapi-session-mongo')
	,options:{
		db:'users'
		,ssl:false
		,name:undefined
		,pwd:undefined
	}
}
module.exports.next=function(server){
	    server.auth.strategy('session', 'mongo', {
        validateFunc: function(session, callback) {
            server.plugins['hapi-session-mongo'].user.get(session, function(err, valid) {
                return callback(err, valid);
            });
        }
    });
}