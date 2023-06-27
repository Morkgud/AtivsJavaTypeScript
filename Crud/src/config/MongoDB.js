const mongoose = require("mongoose");

// mudar o ip do mongodb compass
const MongoDB = "mongodb://0.0.0.0:27017/Atividade";
const conexao = mongoose.connect(MongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

module.exports = conexao;