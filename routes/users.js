var express = require('express');
var router = express.Router();

const { authLogin } = require('../middlewares/auth.mdw');
const UserController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/',authLogin, UserController.showAllUser);

module.exports = router;
