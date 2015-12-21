/*VARS*/
var base      = 'http://localhost:1337/api/v1';
var headers   = {
					"Content-Type" : "application/json"
					,"Accept"      : "application/jsonp; charset=utf-8"
				}
/*Custom packages*/
var Expect = require('./expect');
/*NPM modules*/
var Assert    = require('assert');
var Request   = require('request');
var Validator = require('node-validator');

describe('Diloo url testing',function(){
	describe('obteniendo version de la api',function(){
		it('get',function(done){
			Request({
				url: base
				,method:'GET'
				,headers :headers 				
			},function(err,incoming,body){
				if(err){
					done(err);
				}else{
					var actual   = JSON.parse(body).statusCode;
					var expected = Expect.api.statusCode;
					Assert.equal(actual,expected,'status code validation');
					done();
				}
				
			})
		})
	});
	describe('Creando una empresa',function(){
		it('POST',function(done){
			Request({
				url: base + '/company/create'
				,method:'POST'
				,headers :headers
				,qs : {
					authToken:'123456abcdef'
				}
				,body:JSON.stringify({
					name:'dilooEmpresa'
					,categoryId:1
					,isConcierge:false
					,ruc:'1047368088'
					,ownerName:'miguel aliaga'
					,ownerEmail:'maliaga.pantoja@gmail.com'
					,other:'josejose'
				})
			},function(err,incoming,body){
				if(err){
					done(err);
				}else{
					var actual   = JSON.parse(body);
					var expected = Expect.api.statusCode;
					Assert.equal(actual.statusCode,expected,'status code validation');
					done();
				}
				
			})
		})
	});	
	/*describe('obteniendo planes',function(){
		it('get',function(done){
			Request({
				url: base+'/plans'
				,method:'GET'
				,headers :headers 				
			},function(err,incoming,body){
				if(err){
					done(err);
				}else{
					var actual   = JSON.parse(body);
					Validator.run(Expect.plans,actual,function(errorCount,errors){
						Assert.equal(errorCount,0,'error count, must be 0');
						done()
					});
				}
				
			})
		})
	});
	describe('obteniendo categorias',function(){
		it('get',function(done){
			Request({
				url: base+'/categories'
				,method:'GET'
				,headers :headers 				
			},function(err,incoming,body){
				if(err){
					done(err);
				}else{
					var actual   = JSON.parse(body);
					Validator.run(Expect.categories,actual,function(errorCount,errors){
						Assert.equal(errorCount,0,'error count, must be 0');
						done()
					});
				}
				
			})
		})
	})	*/
})