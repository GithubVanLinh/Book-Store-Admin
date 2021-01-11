var express = require('express');
var router = express.Router();

const CategoryController = require('../controllers/category.controller');
const { authLogin } = require('../middlewares/auth.mdw');

router.get("/",authLogin, CategoryController.getAllCategory);

router.get("/add",authLogin, CategoryController.getAddCategoryForm);
router.post("/add",authLogin, CategoryController.addNewCategory);


module.exports = router;
