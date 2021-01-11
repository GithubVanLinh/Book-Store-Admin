const Category = require("../services/category.service");

module.exports = {
  addNewCategory: async (req, res, next) => {
    const category = req.body;
    console.log("category", category);
    const categoryRes = await Category.addNewCategory(category);
    res.redirect("/category");
  },
  getAddCategoryForm: async (req, res, next) => {
    res.render("./category/addCategory");
  },
  updateCategoryById: async (req, res, next) => {
    console.log("update");
    const categoryUpdate = req.body;

    console.log(categoryUpdate);

    const id = categoryUpdate.id;
    delete categoryUpdate.id;
    await Category.updateCategoryById(id, categoryUpdate);

    res.json({updated: true});
  },
  getAllCategory: async (req, res, next) => {
      const page = req.query.page || 1;

    const categoryList = await Category.getCategoriesPaginate(page);
    categoryList.categoryList = categoryList.docs;
    delete categoryList.docs;
    console.log(categoryList);
    res.render("./category/categorylist", categoryList );
    // res.send(categoryList);
  },
  getCategoryJSON: async (req, res, next)=>{
      const id = req.params.id;
      const categories =await Category.getCategoryByIdJSON(id);
      res.json(categories);
  }
};
