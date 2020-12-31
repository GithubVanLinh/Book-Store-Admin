const UserModel = require('../models/user.model');

module.exports = {
  showAllUser: async (req, res, next)=>{

    const filter = {};
    filter.search = req.query.search;
    filter.page = +req.query.page || 1;
    console.log("filter", filter);

    console.log("get data...");
    const users = await UserModel.getAllUser(filter);
    console.log("get success, Data is: ", users.docs);

    console.log("users", users.docs);
    res.render('user_list', {users: users});
  },
  getPersonalProfile: (req, res, next) =>{
    res.render('profile');
  },
  getUserByIdAPI:async (req, res, next) =>{
    const id = req.body.id || req.query.id || req.params.id;
    const user =await UserModel.getUserById(id);
    console.log("user", user);
    res.json(user);
  },
  updateUserById: async (req, res, next) =>{
    const body = req.body;
    const email = body.email;
    delete body.email;
    console.log("body", body);
    const user = await UserModel.updateUserById(email, body);
    res.send('update success');
  }
};
