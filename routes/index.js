var express = require('express');
var router = express.Router();

const bookController = require('../controllers/book.controller');
const { authLogin } = require('../middlewares/auth.mdw');
const indexController = require('../controllers/index.controller');

/* GET home page. */
router.get('/',authLogin, indexController.getHomePage);
module.exports = router;
