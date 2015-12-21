var Credentials = require('../../credentials.js');
module.exports  ={
    register:require('hapi-node-postgres'),
    options:{
        connectionString:Credentials['postgres'],
        native:true
    }
}