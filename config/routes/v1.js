/*NPM modules*/
var status = require('hapi-status');
/*Custom packages*/
var info = require('./info.json');
var Models = require('../Models');
var Controllers = require('../Controllers');
/*VARS */
var api = function(path){
	return '/api/v1'+ path;
}
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

	}
	//Auth
	/*,{
		method  : 'POST'
		,path   : api('/auth/employee')
		,config : {
			tags: ['api','company','create']
			,description : 'Creating company'
			,notes       : 'return confirmation of company created or error list'
			,handler     : Controllers.Auth.employee
		}
	}
	,{
		method  : 'POST'
		,path   : api('/auth/user')
		,config : {
			tags: ['api','company','create']
			,description : 'Creating company'
			,notes       : 'return confirmation of company created or error list'
			,handler     : Controllers.Auth.mobile
		}
	}	*/
	//Company
	,{
		method  : 'POST'
		,path   : api('/company/create')
		,config : {
			tags: ['api','company','create']
			,description : 'Creating company'
			,notes       : 'return confirmation of company created or error list'
			,handler     : Controllers.Company.create
		}
	}
	/*,{
		method:'GET'
		,path:'/api/v1/company/category'
		,config:{
			tags:['api','company','sorted','category']
			,description:"Getting company sorted"
			,notes:"return all compnies sorted by name and category"
			,handler:Controllers.company.all
		}
	}	
	,{
		method:'GET'
		,path:'/api/v1/categories'
		,config:{
			tags:['api','categories']
			,description : "Getting company categories"
			,notes : "return all categories(id and name)"
			,handler:Controllers.category.all
		}
	}
	,{
		method:'GET'
		,path:'/api/v1/plans'
		,config:{
			tags:['api','plans']
			,description:"Getting company plans"
			,notes:"return all plans"
			,handler:Controllers.plan.all
		}
	}	*/	
]
