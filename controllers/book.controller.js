const Book = require('../models/book.model');

module.exports = {
    createANewBook:async (req, res, next)=>{
        const aNewBookInfo = req.body;
        console.log("a New Book Info: ", aNewBookInfo);
        const newBookRes =await Book.createANewBook(aNewBookInfo);
        console.log("a Book Res: ", newBookRes);
        if(newBookRes == -1){
            res.send("Create Failed");
        }
        res.send(newBookRes); 
    },
    getAllBook: async (req, res, next)=>{
        const bookList = await Book.getAllBook();
        res.send(bookList);
    }
}