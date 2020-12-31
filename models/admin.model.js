const Admin = require("../databases/admin");
const passport = require("passport");
const crypto = require("crypto");

//function
async function checkEmailExists(email) {
  console.log("checkEmailExists.", "email: ", email);
  const isExists = await Admin.exists({ email: email, show: true });
  console.log("checkEmailExists.", "isExists: ", isExists);
  return isExists;
}

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

var hashPwd = function hashPwd(salt, pwd) {
  var hmac = crypto.createHmac("sha256", salt);
  return hmac.update(pwd).digest("hex");
};

module.exports = {
  getUserInfo: async (email) => {
    const usrData = await Admin.findOne({ email: email, show: true });
    return usrData;
  },
  getAllUser: async () => {
    const allUser = await Admin.find({ show: true }).exec();
    console.log(allUser);
    return allUser;
  },
  register: async (user)=>{
    console.log(user);
    const res = await Admin.create(user);
    return res;
  }
  ,
  login: async (usr, pwd) => {
    const isEmailExists = await checkEmailExists(usr);
    if (isEmailExists) {
      const usrData = await Admin.findOne({ email: usr, show: true });
      console.log("Login", "userData", usrData);
      console.log("login", "salt", usrData.salt);
      console.log("login", "pwd", pwd);
      const pass = hashPwd(usrData.salt, pwd);
      console.log("login", "pass", pass);
      if (usrData.password === pass) {
        return 1;
      } else {
        return 0;
      }
    }
    return -1;
  },
  updatePersonalProfile: async (email, profile)=>{

    const resdata = await Admin.updateOne({email: email}, profile);
    return resdata;
  }
};
