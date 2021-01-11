const AdminController = require("../services/admin.service");

module.exports = {
  login: (req, res, next) => {},
  getPersonalProfile: (req, res, next) => {
    res.render("profile");
  },
  updatePersonalProfile: async (req, res, next) => {
    console.log("update");
    const profile = req.body;
    const user = await req.user;
    console.log(user);
    console.log(profile);

    await AdminController.updatePersonalProfile(user.email, profile);

    res.redirect("/admin/profile");
  },
  getLoginPage: async (req, res, next) => {
    var message = req.flash("error");
    console.log(req.flash());
    console.log(message);
    if (message.length == 0) message = undefined;
    res.render("login", { message });
  },
  logout: async (req, res, next)=>{
    await req.logout();
    res.redirect('/users/login');
  }
};
