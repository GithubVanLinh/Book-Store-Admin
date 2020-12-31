const AdminController = require('../models/admin.model');

module.exports = {
  login: (req, res, next)=>{
    
  },
  getPersonalProfile: (req, res, next) =>{
    res.render('profile');
  },
  updatePersonalProfile: async (req, res, next) =>{
    console.log("update");
    const profile = req.body;
    const user = await req.user;
    console.log(user);
    console.log(profile);

    await AdminController.updatePersonalProfile(user.email, profile);

    res.redirect('/admin/profile');
  }
};
