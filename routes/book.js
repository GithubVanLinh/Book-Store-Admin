var express = require('express');
var router = express.Router();

const BookController = require('../controllers/book.controller');

/* GET home page. */
router.get('/', BookController.getAllBook);
router.post('/add',BookController.createANewBook);
router.get('/add', BookController.getCreateBookForm);
router.get('/update', BookController.getUpdateForm);
router.post('/update', BookController.updateANewBook);
router.post('/delete', BookController.deleteABook);

module.exports = router;
