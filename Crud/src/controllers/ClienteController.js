const Cliente = require('../models/Cliente');

module.exports = {
  async create(req, res) {
    const { nome, email, telefone } = req.body;

    if (!nome || !email || !telefone) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios." });
    }

    const novoCliente = await Cliente.create({
      nome,
      email,
      telefone,
    });
    return res.json(novoCliente);
  },

  async read(req, res) {
    const listaClientes = await Cliente.find();
    return res.json(listaClientes);
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;

    const clienteAtualizado = await Cliente.findByIdAndUpdate(
      { _id: id },
      { nome, email, telefone: parseInt(telefone) }, // Converte a string do telefone para um número
      { new: true }
    );

    return res.json(clienteAtualizado);
  },

  async delete(req, res) {
    const { id } = req.params;
    const clienteDeletado = await Cliente.findOneAndDelete({ _id: id });
    if (clienteDeletado) {
      return res.json(clienteDeletado);
    }
  }
};
