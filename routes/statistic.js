var express = require('express');
var router = express.Router();

const BookCotroller = require('../controllers/book.controller');
const BillController = require('../controllers/bill.controller');
const { authLogin } = require('../middlewares/auth.mdw');

router.get("/top-10",authLogin, BookCotroller.getTop10Book);

router.get('/revenue', authLogin, BillController.getRevenue);

module.exports = router;
