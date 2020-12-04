const Author = require('../models/author.model');

module.exports = {
    addNewAuthor: async (req, res, next) => {
        const author = req.body;
        console.log("author", author);
        const authorRes = await Author.addNewAuthor(author);
        res.redirect("/author");
    },
    getAllAuthor: async (req, res, next) => {
        const authorList = await Author.getAllAuthor();
        res.render("./author/author-list", { authorList });
    },
    renderCreateAuthorForm: async (req, res, next) => {
        res.render('./author/create-author');
    },
    postNewAuthor: async (req, res, next) => {
        const newAuthor = req.body;
        // res.send(newAuthor);
        await Author.addNewAuthor(newAuthor);
        res.redirect("/author");
    }
}