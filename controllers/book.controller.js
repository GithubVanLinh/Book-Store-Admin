const Book = require("../models/book.model");
const Author = require("../models/author.model");
const Category = require("../models/category.model");

module.exports = {
  createANewBook: async (req, res, next) => {
    const aNewBookInfo = req.body;
    console.log("a New Book Info: ", aNewBookInfo);
    const newBookRes = await Book.createANewBook(aNewBookInfo);
    console.log("a Book Res: ", newBookRes);
    if (newBookRes == -1) {
      res.send("Create Failed");
    }
    res.send(newBookRes);
  },

  getAllBook: async (req, res, next) => {
    const filter = {};
    console.log(req.query.page);
    filter.page = +req.query.page || 1;
    console.log("filter", filter);
    const bookData = await Book.getAllBook(filter);
    bookData.bookList = bookData.docs;
    res.render("./book/bookList", bookData);
  },

  getCreateBookForm: async (req, res, next) => {
    const authors = await Author.getAllAuthor();
    const categories = await Category.getCategoryList();
    res.render("book/createBook", { authors, categories });
  },

  updateANewBook: async (req, res, next) => {
    const aNewBookInfo = req.body;
    console.log("a New Book Info: ", aNewBookInfo);
    const newBookRes = await Book.updateABook(aNewBookInfo);
    console.log("a Book Res: ", newBookRes);
    if (newBookRes == -1) {
      res.send("update Failed");
    }
    res.send(newBookRes);
    // res.send(req.body);
  },

  getUpdateForm: async (req, res, next) => {
    const bookId = req.query.id;
    const book = await Book.getBookById(bookId);
    const authors = await Author.getAllAuthor();
    const categories = await Category.getCategoryList();
    // res.send(book.toString());

    res.render("./book/update-book", { book, authors, categories });
    // res.send(authors)
  },

  deleteABook: async (req, res, next) => {
    const _id = req.body._id;

    //id mean real id (_id)
    const status = await Book.deleteABook(_id);
    res.send("OK");
  },
};
