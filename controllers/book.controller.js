const Book = require('../models/book.model');

module.exports = {
    createANewBook:async (req, res, next)=>{
        const aNewBookInfo = req.body;
        console.log("a New Book Info: ", aNewBookInfo);
        const newBookRes = await Book.createANewBook(aNewBookInfo);
        console.log("a Book Res: ", newBookRes);
        if(newBookRes == -1){
            res.send("Create Failed");
        }
        res.send(newBookRes); 
    },
    getAllBook: async (req, res, next)=>{
        const bookList = await Book.getAllBook();
        res.send(bookList);
    },
    getCreateBookForm: async(req, res, next)=>{
        res.render("book/createBook");
    },
    updateANewBook:async (req, res, next)=>{
        const aNewBookInfo = req.body;
        console.log("a New Book Info: ", aNewBookInfo);
        const newBookRes =await Book.updateABook(aNewBookInfo);
        console.log("a Book Res: ", newBookRes);
        if(newBookRes == -1){
            res.send("update Failed");
        }
        res.send(newBookRes); 
    },
    getUpdateForm: async(req, res, next)=>{
        res.send("not now");
    },
    deleteABook: async (req, res, next)=>{
        const _id = req.body._id;

        //id mean real id (_id)
        const status = await Book.deleteABook(_id);
        res.send("OK");
    }
}