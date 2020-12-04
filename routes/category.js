var express = require('express');
var router = express.Router();

const CategoryController = require('../controllers/category.controller');

router.get("/", CategoryController.getAllCategory);

router.get("/add", CategoryController.getAddCategoryForm);
router.post("/add", CategoryController.addNewCategory);

module.exports = router;
