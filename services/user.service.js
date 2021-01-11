const User = require("../models/user");
const LIMIT = 5;
//function
checkEmailExists = async function (email) {
  console.log(email);
  const isExists = await User.exists({ email: email });
  console.log(isExists);
  return isExists;
};

//return 1 if vaild
checkPassword=  (email, password) => {
  for (account of accounts) {
    if (account.email === email && account.password === password) {
      return 1;
    }
  }
  return 0;
};

module.exports = {
  getAllUser: async (filter) => {
    let query = {};
    query.show= true;
    const options = {
      page: filter.page,
      limit: LIMIT,
    };
    console.log("pre", options);
    let users;
    await User.paginate(query, options).then(function (result) {
      console.log("result", result);
      users = result;
    });
    return users;
  },
  getUserById: async (id) =>{
    const user = await User.findOne({_id:id, show: true});
    return user;
  },
  updateUserByEmail: async (email, profile)=>{
    const resdata = await User.updateOne({email: email}, profile);
    return resdata;
  },
  updateUserById: async (id, profile)=>{
    const resdata = await User.updateOne({_id: id}, profile);
    return resdata;
  },
  getNumberOfUser: async () =>{
    const count = await User.find({show: true}).count();
    return count;
  }
};
