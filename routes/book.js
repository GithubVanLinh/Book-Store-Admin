var express = require('express');
var router = express.Router();

const BookController = require('../controllers/book.controller');

/* GET home page. */
router.get('/', BookController.getAllBook);
router.post('/',BookController.createANewBook);

module.exports = router;
