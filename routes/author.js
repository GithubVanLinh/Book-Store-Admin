var express = require('express');
var router = express.Router();

const AuthorController = require('../controllers/author.controller');

router.get("/", AuthorController.getAllAuthor);

router.post("/", AuthorController.addNewAuthor);

module.exports = router;
