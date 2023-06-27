const express = require('express');
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Cliente")
const Cliente = mongoose.model("cliente")

router.get('/cadastro',(req,res) =>{
    res.render ("viewsCliente/clienteIndex")
})

router.get ('/posts',(req, res)=> {
    res.send ("Rota de posts de clientes") 
})

router.post('/cadastrocliente',(req,res)=>{
    const novoCliente = {
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email
    }
    new Cliente(novoCliente).save().then(()=> {
        console.log("CLiente salvo com sucesso ! ")
    }).catch((err)=>{
        console.log("Erro ao salvar categoria")
    })
})

module.exports = router