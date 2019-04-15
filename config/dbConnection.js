var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexao com banco de dados foi estabelecida')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });  
}

module.exports = function (){
    return connMySQL;
}
