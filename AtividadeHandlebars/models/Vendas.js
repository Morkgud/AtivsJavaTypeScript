const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Vendas = new Schema({
    nome: {
        type: String,
        required: true
    },
    produto: {
        type: String,
        required: true
    },
    valor: {
        type: String,
        required: true
    }

})

mongoose.model("vendas", Vendas)