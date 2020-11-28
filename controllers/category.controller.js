const Category = require('../models/category.model');

module.exports = {
    addNewCategory:async (req, res, next)=>{
        const category = req.body;
        console.log("category", category);
        const categoryRes =await Category.addNewCategory(category);
        res.redirect("/category");
    },
    getAllCategory: async (req, res, next)=>{
        const categoryList =await Category.getCategoryList();
        res.send(categoryList);
    }
}