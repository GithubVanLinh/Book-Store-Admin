const Author = require('../models/author.model');

module.exports = {
    addNewAuthor:async (req, res, next)=>{
        const author = req.body;
        console.log("author", author);
        const authorRes =await Author.addNewAuthor(author);
        res.redirect("/author");
    },
    getAllAuthor:async (req, res, next)=>{
        const authorList =await Author.getAllAuthor();
        res.send(authorList);
    }
}