var express = require('express');
var router = express.Router();

const AuthorController = require('../controllers/author.controller');

router.get("/", AuthorController.getAllAuthor);
router.get("/add", AuthorController.renderCreateAuthorForm)
router.post("/add", AuthorController.postNewAuthor)




module.exports = router;
