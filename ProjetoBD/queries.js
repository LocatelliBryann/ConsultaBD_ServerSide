const conexao= require("./db")
conexao.conecta.query('SELECT * FROM unidade_medida', function(err, result, fields) {
if(err) throw err
console.log(result)
console.log(fields) // metadado do banco de dados em relação a tabela
});