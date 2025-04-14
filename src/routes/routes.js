const express = require('express'); 
const router = express.Router(); 

const AutoresController = require('../controllers/livrosAutores');
const GenerosController = require('../controllers/livrosGeneros');  

router.get('/livrosAutores', AutoresController.listarLivroAutores); 
router.post('/livrosAutores', AutoresController.cadastrarLivroAutores); 
router.patch('/livrosAutores', AutoresController.editarLivroAutores); 
router.delete('/livrosAutores', AutoresController.apagarLivroAutores); 

router.get('/livrosGeneros', GenerosController.listarLivroGeneros); 
router.post('/livrosGeneros', GenerosController.cadastrarLivroGeneros); 
router.patch('/livrosGeneros', GenerosController.editarLivroGeneros); 
router.delete('/livrosGeneros', GenerosController.apagarLivroGeneros); 


module.exports = router;