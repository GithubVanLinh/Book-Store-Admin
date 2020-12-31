var express = require("express");
var router = express.Router();


const adminController = require('../controllers/admin.controller');
const UserController = require('../controllers/user.controller');

const passport = require("passport");
const auth = require("../config/passport");
const { authLogin } = require("../middlewares/auth.mdw");

router.get("/users/:id", authLogin, UserController.getUserByIdAPI);

module.exports = router;
