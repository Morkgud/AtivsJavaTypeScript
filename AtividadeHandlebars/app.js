//carregando módulos
const express = require('express');
const bodyParcer = require('body-parser');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const app =  express();
//rotas de cliente e vendas
const routerCliente = require("./routes/routesCliente");
const routerVendas = require("./routes/routesVendas");
const path = require('path');
//Configurações 

//body parcer
    app.use(express.urlencoded({ extended: true}))
    app.use(express.json())

//handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

//Moogose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://0.0.0.0:27017/topicoshand").then(()=>{
    console.log("Conectado ao mongoDB")
    }).catch((err)=>{
    console.log("Erro ao se conectar:"+err)
    })
//Public
app.use(express.static(path.join(__dirname,"public" )))

//Rotas
app.use('/cliente', routerCliente)
app.use('/venda', routerVendas)

//Outros
const PORT = 8082
app.listen(PORT,()=>{
    console.log("Servidor rodando !")
})
