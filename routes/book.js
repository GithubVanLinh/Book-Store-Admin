var express = require('express');
const bookController = require('../controllers/book.controller');
var router = express.Router();

const BookController = require('../controllers/book.controller');
const { authLogin } = require('../middlewares/auth.mdw');

/* GET home page. */
router.get('/',authLogin, BookController.getAllBook);
// router.get('/', (req, res, next) => {
//     res.render('./book/bookList')
// });

router.post('/add',authLogin, BookController.createANewBook);
router.get('/add',authLogin, BookController.getCreateBookForm);
router.get('/update',authLogin, BookController.getUpdateForm);
router.post('/update',authLogin, BookController.updateANewBook);
router.post('/delete',authLogin, BookController.deleteABook);

module.exports = router;
