var express = require('express');
var router = express.Router();

const BookCotroller = require('../controllers/book.controller');
const { authLogin } = require('../middlewares/auth.mdw');

router.get("/top-10",authLogin, BookCotroller.getTop10Book);

module.exports = router;
