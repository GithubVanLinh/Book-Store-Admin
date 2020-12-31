var express = require('express');
var router = express.Router();

const AuthorController = require('../controllers/author.controller');
const { authLogin } = require('../middlewares/auth.mdw');

router.get("/",authLogin, AuthorController.getAllAuthor);
router.get("/add",authLogin, AuthorController.renderCreateAuthorForm)
router.post("/add",authLogin, AuthorController.postNewAuthor)

module.exports = router;
