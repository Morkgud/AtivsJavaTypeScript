const express = require("express");
const router = express.Router();
const vendaController = require("./controllers/VendaController");
const clienteController = require("./controllers/ClienteController");

router.get("/Venda", vendaController.read);
router.post("/Venda", vendaController.create);
router.delete("/Venda/:id", vendaController.delete);
router.post("/Venda/:id", vendaController.update);

router.get("/Cliente", clienteController.read);
router.post("/Cliente", clienteController.create);
router.delete("/Cliente/:id", clienteController.delete);
router.post("/Cliente/:id", clienteController.update);

module.exports = router;
