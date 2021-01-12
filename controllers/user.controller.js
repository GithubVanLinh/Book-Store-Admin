const UserModel = require('../services/user.service');

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
    //password Wabc12345
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
  },
  blockUser: async (req, res, next)=>{
    const id = req.body.id;
    console.log(id);
    const user = await UserModel.getUserById(id);
    let newStatus;
    if(user.status == "Active"){
      newStatus = "Blocked";
    } else if (user.status == "Blocked"){
      newStatus = "Active";
    } else {
      return res.json({error: true});
    }
    const usr = await UserModel.updateUserById({_id: id}, {status: newStatus});
    res.json(usr);
  }
};
