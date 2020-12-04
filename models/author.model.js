const Author = require('../databases/author');

module.exports = {
    addNewAuthor: async (authorData) => {
        if (await Author.exists(
            {
                name: authorData.name,
                description: authorData.description
            }) === false) {
            const authorRes = await Author.create(authorData);
            return authorRes;
        }
    },
    getAllAuthor: async () => {
        const authors = await Author.find({ show: true }).exec();
        console.log("author list: ", authors);
        return authors;
    }
}