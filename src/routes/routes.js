const express = require('express'); 
const router = express.Router(); 

const AutoresController = require('../controllers/livrosAutores');
const GenerosController = require('../controllers/livrosGeneros');  

router.get('/livrosAutores', AutoresController.listarLivroAutores); 
router.post('/livrosAutores', AutoresController.cadastrarLivroAutores); 
<<<<<<< HEAD
router.patch('/livrosAutores/:aut_id', AutoresController.editarLivroAutores); //params
router.delete('/LivrosAutores/:aut_id', AutoresController.apagarusuario); //params

router.get('/livrosGeneros', GenerosController.listarLivroGeneros); 
router.post('/livrosGeneros', GenerosController.cadastrarLivroGeneros); 
router.patch('/livrosGeneros/:gen_id', GenerosController.editarLivroGeneros); //params
router.delete('/LivrosGeneros/:gen_id', GenerosController.apagarusuario); //params
=======
router.patch('/livrosAutores/:id', AutoresController.editarLivroAutores); 
router.delete('/livrosAutores', AutoresController.apagarLivroAutores); 

router.get('/livrosGeneros', GenerosController.listarLivroGeneros); 
router.post('/livrosGeneros', GenerosController.cadastrarLivroGeneros); 
router.patch('/livrosGeneros/:id', GenerosController.editarLivroGeneros); 
router.delete('/livrosGeneros', GenerosController.apagarLivroGeneros); 
>>>>>>> parent of ecfdd97 (mudanças)

module.exports = router;