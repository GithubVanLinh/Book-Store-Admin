var express = require('express');
var router = express.Router();

const bookController = require('../controllers/book.controller');
const { authLogin } = require('../middlewares/auth.mdw');
const bookModel = require('../models/book.model');

/* GET home page. */
router.get('/',authLogin, function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login',authLogin, bookController.getAllBook);

router.get('/',authLogin, function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
