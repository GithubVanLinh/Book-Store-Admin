const https = require("http");
const formidable = require("formidable");
const fs = require("fs");
const request = require("request");

const BookModel = require("../services/book.service");
const AuthorModel = require("../services/author.service");
const CategoryModel = require("../services/category.service");

function verifyBook(bookData) {
  if (bookData.quantity < 0) {
    return -1;
  }
  if (bookData.price < 0) {
    return -2;
  }
  return 1;
}

module.exports = {
  createANewBook: async (req, res, next) => {
    const aNewBookInfo = req.body;

    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      //req start
      const bodyData = fields;
      const isVerify = verifyBook(bodyData);
      if (isVerify == 1) {
        const formData = {};
        formData.key = process.env.KEY;
        formData.image = fs.createReadStream(files.image.path);
        console.log(process.env.ImageServerURL);
        request.post(
          { url: process.env.ImageServerURL, formData: formData },
          async function optionalCallback(err, httpResponse, body) {
            if (err) {
              return console.error("upload failed:", err);
            }
            resp = JSON.parse(body);
            console.log("Upload successful!  Server responded with:", resp);

            const urlImage = resp.data.url;
            console.log(urlImage);
            bodyData.image = urlImage;

            console.log(bodyData);

            const datares = await BookModel.createANewBook(bodyData);

            if (datares.err) {
              res.json(datares.err);
            }
            res.redirect('/books');
          }
        );
      } else {
        req.flash(err, "value < 0");
        res.redirect("/books/add");
      }

      //end req
    });
  },

  getAllBook: async (req, res, next) => {
    const filter = {};
    console.log(req.query.page);
    filter.page = +req.query.page || 1;
    filter.category = req.query.category;
    console.log("filter", filter);

    console.log("get data...");
    const bookData = await BookModel.getAllBook(filter);
    console.log("get success, Data is: ", bookData.docs);

    bookData.bookList = bookData.docs;
    bookData.category = filter.category;

    bookData.categories = await CategoryModel.getCategoryList();
    // res.send(bookData);
    res.render("./book/bookList", bookData);
  },

  getCreateBookForm: async (req, res, next) => {
    const authors = await AuthorModel.getAllAuthor();
    const categories = await CategoryModel.getCategoryList();
    res.render("book/createBook", { authors, categories });
  },

  updateANewBook: async (req, res, next) => {
    const aNewBookInfo = req.body;
    console.log("a New Book Info: ", aNewBookInfo);
    const newBookRes = await BookModel.updateABook(aNewBookInfo);
    console.log("a Book Res: ", newBookRes);
    if (newBookRes == -1) {
      res.send("update Failed");
    }
    res.redirect("/books");
    // res.send(req.body);
  },

  getUpdateForm: async (req, res, next) => {
    const bookId = req.query.id;
    const book = await BookModel.getBookById(bookId);
    const authors = await AuthorModel.getAllAuthor();
    const categories = await CategoryModel.getCategoryList();
    // res.send(book);

    res.render("./book/update-book", { book, authors, categories });
    // res.send(authors)
  },

  deleteABook: async (req, res, next) => {
    const _id = req.params.id;

    //id mean real id (_id)
    const status = await BookModel.deleteABook(_id);
    res.redirect("/books");
  },
  statisticsByDay: async (req, res, next) => {
    const query = req.query;
    console.log(query);

    if (query.Data) {
      const books = await BookModel.statisticsByDay(query.Date);
    }
  },
  getTop10Book: async (req, res, next)=>{
    const top10Book = await BookModel.getTop10Book();
    const books = JSON.stringify(top10Book);
    res.render('statistic_top10', {booksChartData:books, bookList: top10Book});
  }
};
