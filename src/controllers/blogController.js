const TextService = require('../services/textServices');

/*----------> CRIAR UM TEXTO <----------*/
const createPost = (req, res) => {
    const { title, content, status, author } = req.body;
  const newText = TextService.createText({ title, content, status, author });
  res.status(201).json({ message: `Texto ${newText.title} criado com sucesso` });
};


/*----------> BUSCAR LISTA DE TEXTO COMPLETA <----------*/
const listPosts = (req, res) => {
  const texts = TextService.getAllTexts()
  res.json(texts)
}

/*----------> BUSCAR TEXTO EXPECÍFICO PELO ID <----------*/
const listPost = (req, res) => {
  const { id } = req.params

  const text = TextService.getTextById(id)

  if (!text) {
    res.status(404).json({ message: `Text com ID ${id} não encontrado`})
  }

  res.json(text)
}

/*----------> EDITAR PELO ID <----------*/
const updatePost = (req, res) => {
  const {id} = req.params
  const updatedText = TextService.updateText(id, req.body)

  if (!updatedText) {
    return res.status(404).json({ message: `Texto com ${id} não encontrado`})
  }

  res.json({ message: `Texto com ${id} editado com sucesso`})
}

/*----------> APAGAR PELO ID <----------*/
const deletePost = (req, res) => {
  const { id } = req.params
  const filteredList = TextService.deleteTextById(id)

  res.json({ message: `Texto com ${id} excluído com sucesso`, filteredList })

}

module.exports = {
  createPost,
  listPosts,
  listPost,
  updatePost,
  deletePost
}
