const { mountpath } = require('../app');
const Category = require('../databases/category');

// const 

module.exports = {
    getCategoryList: () => {
        try {
            const categoryList = Category.find({ show: true }).exec();
            return categoryList;
        } catch (error) {
            console.log(error);
            return -1;
        }
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
    }
}