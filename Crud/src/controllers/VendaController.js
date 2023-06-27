const Venda = require("../models/Venda");
const Cliente = require("../models/Cliente");

module.exports = {
  async create(req, res) {
    const { cliente, produto, quantidade } = req.body;

    if (!cliente || !produto || !quantidade) {
      return res.status(400).json({ error: "Por favor, preencha todos os campos." });
    }

    try {
      const clienteEncontrado = await Cliente.findById(cliente);

      if (!clienteEncontrado) {
        return res.status(404).json({ error: "Cliente não encontrado." });
      }

      const novaVenda = await Venda.create({ cliente, produto, quantidade });

      return res.status(201).json(novaVenda);
    } catch (err) {
      return res.status(500).json({ error: "Ocorreu um erro ao criar a venda." });
    }
  },

  async read(req, res) {
    try {
      const vendas = await Venda.find().populate("cliente");
        NomeCliente: clienteenontrado.id
      return res.status(200).json(vendas);
    } catch (err) {
      return res.status(500).json({ error: "Ocorreu um erro ao buscar as vendas." });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { cliente, produto, quantidade } = req.body;

    if (!cliente || !produto || !quantidade) {
      return res.status(400).json({ error: "Por favor, preencha todos os campos." });
    }

    try {
      const clienteEncontrado = await Cliente.findById(cliente);

      if (!clienteEncontrado) {
        return res.status(404).json({ error: "Cliente não encontrado." });
      }

      const vendaAtualizada = await Venda.findByIdAndUpdate(
        id,
        { cliente, produto, quantidade },
        { new: true }
      );

      return res.status(200).json(vendaAtualizada);
    } catch (err) {
      return res.status(500).json({ error: "Ocorreu um erro ao atualizar a venda." });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const venda = await Venda.findById(id);

      if (!venda) {
        return res.status(404).json({ error: "Venda não encontrada." });
      }

      await Venda.findByIdAndDelete(id);

      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ error: "Ocorreu um erro ao deletar a venda." });
    }
  }
};
