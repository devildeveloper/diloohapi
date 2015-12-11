/*NPM modules*/
var status = require('hapi-status');
/*Custom packages*/
var info = require('./info.json');
var Controllers = require('../Controllers');
module.exports= 
 [
	{
		method:'GET'
		,path:'/api/v1'
		,config:{
			tags: ['api','version']
			,description: 'Getting api info'
			,notes: 'return api version'
			,handler:function(req,reply){
				return status.ok(reply,info);
			}		
		}

	},
	{
		method:'GET'
		,path:'/api/v1/categories'
		,config:{
			tags:['api','categories']
			,description : "Getting company categories"
			,notes : "return all categories(id and name)"
			,handler:Controllers.category.all
		}
	},
	{
		method:'GET'
		,path:'/api/v1/plans'
		,config:{
			tags:['api','plans']
			,description:"Getting company plans"
			,notes:"return all plans"
			,handler:Controllers.plan.all
		}
	},
	{
		method:'GET'
		,path:'/api/v1/company/category'
		,config:{
			tags:['api','company','sorted','category']
			,description:"Getting company sorted"
			,notes:"return all compnies sorted by name and category"
			,handler:Controllers.company.all
		}
	},
	{
		method:'POST'
		,path:'/api/v1/company/category'
		,config:{
			tags:['api','company','sorted','category']
			,description:"Getting company sorted"
			,notes:"return all compnies sorted by name and category"
			,handler:function(req,reply){
				reply(req.payload)
			}
		}
	}			
]
