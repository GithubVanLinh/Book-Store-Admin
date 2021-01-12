var express = require('express');
var router = express.Router();

const { authLogin } = require('../middlewares/auth.mdw');
const BillController = require('../controllers/bill.controller');

router.get('/',authLogin,  BillController.getAllBill);

module.exports = router;
