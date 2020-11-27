var express = require('express');
var router = express.Router();

const CategoryController = require('../controllers/category.controller');

router.get("/", CategoryController.getAllCategory);
router.post("/", CategoryController.addNewCategory);

module.exports = router;
