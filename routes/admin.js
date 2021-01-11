var express = require("express");
var router = express.Router();


const adminController = require('../controllers/admin.controller');

const passport = require("passport");
const auth = require("../config/passport");
const { authLogin, authNotLogin } = require("../middlewares/auth.mdw");

/* GET users listing. */
router.get("/login",authNotLogin, adminController.getLoginPage);
router.post(
  "/login",authNotLogin ,
  passport.authenticate("local", {
    failureRedirect: "/admin/login",
    successRedirect: "/",
    failureFlash: true
  })
);

router.get("/profile",authLogin, adminController.getPersonalProfile);

router.post("/profile", authLogin, adminController.updatePersonalProfile);

router.get("/logout", authLogin, adminController.logout);

module.exports = router;
