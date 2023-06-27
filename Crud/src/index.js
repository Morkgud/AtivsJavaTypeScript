const express = require("express");
const app = express();
const rota = require("./rota")
require("./config/MongoDB");
app.use(express.json());
app.use(rota);

app.listen(8081)