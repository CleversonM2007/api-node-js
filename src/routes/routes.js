const express = require('express'); 
const router = express.Router(); 

const UsuariosController = require('../controllers/livros_autores');
const UsuariosController = require('../controllers/livros_generos');  

router.get('/livros_autores', UsuariosController.listarLivroAutores); 
router.post('/livros_autores', UsuariosController.cadastrarLivroAutores); 
router.patch('/livros_autores', UsuariosController.editarLivroAutores); 
router.delete('/livros_autores', UsuariosController.apagarLivroAutores); 

router.get('/livros_generos', UsuariosController.listarLivroGeneros); 
router.post('/livros_generos', UsuariosController.cadastrarLivroGeneros); 
router.patch('/livros_generos', UsuariosController.editarLivroGeneros); 
router.delete('/livros_generos', UsuariosController.apagarLivroGeneros); 


module.exports = router;