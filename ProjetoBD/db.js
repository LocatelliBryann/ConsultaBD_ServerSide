const mysql= require('mysql2');
const conecta = mysql.createConnection({
host: 'localhost', // endereço banco
user: 'root', // usuário padrão
database: 'produto', // nome do banco alvo
port: 3307, //Porta forçada pra 3307 pq sim
});
module.exports= {conecta}