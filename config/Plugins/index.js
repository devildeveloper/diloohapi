module.exports={
	swagger     : require('./Swagger.js')
	,postgresql : require('./Postgresql.js')
	,session    : require('./MongoSession.js')
	,redisAuth  : require('hapi-redis-authToken')
	,good       : require('./Good')
}