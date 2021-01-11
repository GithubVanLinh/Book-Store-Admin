const Category = require("../services/category.service");
const UserService = require("../services/user.service");

module.exports = {
  getHomePage: async (req, res, next) => {
    const countUser = await UserService.getNumberOfUser();
    res.render("index", { title: "Express" , countUser});
  },
};
