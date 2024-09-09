const TextService = require('../services/textServices');

const createPost = (req, res) => {
  const { title, content, status, author } = req.body
  const newText = TextService.createText({ title, content, status, author})
  res.status(201).json({ message: `Texto ${newText.title} criado com sucesso` })
}

const listPosts = (req, res) => {
  const texts = TextService.getAllTexts()
  res.json(texts)
}

const listPost = (req, res) => {
  const { id } = req.query

  const text = TextService.getTextById(id)

  if (!text) {
    res.status(404).json({ message: `Text com ID ${id} não encontrado`})
  }

  res.json(text)
}

const editPost = (req, res) => {
  const { id } = req.params;
  const { title, content, status, author } = req.body;

  const updatedText = TextService.updateText(id, { title, content, status, author });

  if (!updatedText) {
    return res.status(404).json({ message: `Texto com ID ${id} não encontrado` });
  }

  res.json({ message: `Texto com ID ${id} atualizado com sucesso`, updatedText });
};

const deletePost = (req, res) => {
  const {id} = req.params;

  const deleted = TextService.deleteText(id);

  if (!deleted) {
    return res.status(404).json({ message: `Texto com ID ${id} não encontrado` });
  }

  res.json({ message: `Texto com ID ${id} excluído com sucesso` });
};

module.exports = {
  createPost,
  listPosts,
  listPost,
  editPost,
  deletePost,
}
