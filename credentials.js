var db,host,port,user,passwd ;

if(process.env.ENV === 'production'){
	db     = 'diloopg';
	host   = '54.68.9.171';
	user   = 'postgres';
	passwd = '';
	port   =  5432;
}else{
	db     = 'diloopg';
	host   =  'localhost';
	user   =  'postgres';
	passwd =  '1234';
	port   =  5432;
}
module.exports={
	"postgres":"postgres://"+user+":"+passwd+"@"+host+"/"+db
}