const express = require('express');
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Vendas")
const Venda = mongoose.model("vendas")

router.get('/cadastro',(req,res) =>{
    res.render ("viewsVendas/vendasIndex")
})

router.get ('/postsvendas',(req, res)=> {
    res.send ("Rota de posts de vendas") 
})

router.post('/cadastrarvendas',(req,res)=>{
    const novaVenda = {
        nome: req.body.nome,
        produto: req.body.produto,
        valor: req.body.valor
    }
    new Venda(novaVenda).save().then(()=> {
        console.log("CLiente salvo com sucesso ! ")
    }).catch((err)=>{
        console.log("Erro ao salvar categoria")
    })
})

module.exports = router

