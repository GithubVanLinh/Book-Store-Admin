var express = require("express");
var router = express.Router();


const adminController = require('../controllers/admin.controller');

const passport = require("passport");
const auth = require("../config/passport");
const { authLogin } = require("../middlewares/auth.mdw");

/* GET users listing. */
router.get("/login", function (req, res, next) {
  res.render("login", {});
});
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/admin/login",
    successRedirect: "/",
  })
);

router.get("/profile",authLogin, adminController.getPersonalProfile);

router.post("/profile", authLogin, adminController.updatePersonalProfile)

module.exports = router;
