let app= require("./db")
let consulta = require("./queries")

app.conecta.connect(function(err) {
if(err) throw err;
console.log("Banco do Guri Conectado!");
});

consulta.conexao