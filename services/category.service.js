const { mountpath } = require('../app');
const Category = require('../models/category');

const LIMIT = 10;

// const 

module.exports = {
    getCategoryList:async () => {
        try {
            const categoryList =await Category.find({ show: true }).exec();
            return categoryList;
        } catch (error) {
            console.log(error);
            return -1;
        }
    },
    getCategoriesPaginate:async (page) =>{
        const options = {
            page: page,
            limit: LIMIT,
          };
          console.log("pre", options);
          let books;
          await Category.paginate({show: true}, options).then(function (result) {
            console.log("result", result);
            books = result;
          });
          return books;
    },
    addNewCategory: async (categoryData) => {
        try {
            if (await Category.exists({ name: categoryData.name, description: categoryData.description }) === false) {
                const categoryRes = Category.create(categoryData);
                return categoryRes;
            }
        } catch (error) {
            console.log(error);
            return -1;
        }
    },
    getCategoryByIdJSON: async (id) =>{
        const category = await Category.findOne({_id: id, show: true});
        return category;
    }
}