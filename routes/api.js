var express = require("express");
var router = express.Router();


const adminController = require('../controllers/admin.controller');
const UserController = require('../controllers/user.controller');
const CategoryController = require('../controllers/category.controller');
const BillCotroller = require('../controllers/bill.controller');

const { authLogin } = require("../middlewares/auth.mdw");

router.get("/users/:id", authLogin, UserController.getUserByIdAPI);
router.get("/categories/:id", authLogin, CategoryController.getCategoryJSON);
router.put("/categories", authLogin, CategoryController.updateCategoryById);
router.get("/bills/:id", authLogin, BillCotroller.getBillByIdJSON);
router.put("/bills", authLogin, BillCotroller.updateBillStatusById);


module.exports = router;
