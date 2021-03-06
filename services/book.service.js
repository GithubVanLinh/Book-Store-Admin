const Book = require("../models/book");
const Author = require("../models/author");
const Category = require("../models/category");
const mongoose = require("mongoose");

const LIMIT = 10;

//True if exists
async function CheckBookExists(bookId) {
  console.log("book Id: ", bookId);
  const isBookExists = await Book.exists({ id: bookId, show: true });
  return isBookExists;
}

async function find_idByid(bookId) {
  console.log("book Id: ", bookId);
  const book = await Book.find({ id: id, show: true });
  return book._id;
}

//return id if exists
async function validateAuthor(authorId) {
  const id = mongoose.Types.ObjectId(authorId);
  const isExists = await Author.exists({ _id: id, show: true });
  if (isExists) {
    console.log("author is valided");
    return id;
  } else {
    return -1;
  }
}

async function validateCategory(categoryId) {
  const id = mongoose.Types.ObjectId(categoryId);
  const isExists = await Category.exists({ _id: id, show: true });
  if (isExists) {
    return id;
  } else {
    return -1;
  }
}

async function validateBookInfo(bookInfo) {
  console.log("validate BookInfo ", bookInfo);
  const newBook = bookInfo;

  //start add author id to newBook
  //check author exists
  //return author id if valid
  console.log("validate author");
  const authorId = await validateAuthor(bookInfo.author);
  if (authorId === -1) {
    return -1;
  }
  newBook.author = authorId;
  //end author

  //begin add category to newBook
  //check category exists
  //return categoryId if valid

  const category = [];
  if (typeof (bookInfo.category) === typeof ([])) {
    const categoryArray = bookInfo.category;

    for (i of categoryArray) {
      const categoryId = await validateCategory(i);
      if (categoryId === -1) {
        return -1;
      }
      category.push(categoryId);
    }
  } else {
    const categoryId = await validateCategory(bookInfo.category);
    category.push(categoryId);
  }
  newBook.category = category;
  //end category

  console.log("new Book: ", newBook);

  return newBook;
}

module.exports = {
  getBookById: async (id) => {
    const _id = mongoose.Types.ObjectId(id);
    const book = await Book.findOne({ _id: _id, show: true })
      .populate('author')
      .populate('category')
      .exec();
    return book;
  },

  getAllBook: async (filter) => {
    let query;
    if (filter.category && filter.category !== "all") {
      query = { show: true, category: filter.category };
    } else {
      query = { show: true };
    }
    const options = {
      populate: [{
        path :"author",
        match: {show: true}
      }, {
        path :"category",
        match: {show: true}
      }],
      sort: {date: -1},
      page: filter.page,
      limit: LIMIT,
    };
    console.log("pre", options);
    let books;
    await Book.paginate(query, options).then(function (result) {
      console.log("result", result);
      books = result;
    });
    return books;
  },

  // return -1 if ID has been existed
  createANewBook: async (aNewBookInfo) => {
    console.log("Book info", aNewBookInfo);

    //check book exists
    //const isBookExists = await CheckBookExists(aNewBookInfo.id);
    // if (isBookExists) {
    //   return -1;
    // }

    const aBook = await validateBookInfo(aNewBookInfo);
    if (aBook === -1) {
      return { err: "Validate Failed" };
    }
    console.log("book is valid");

    console.log("book is creating");
    const bookDataRes = await Book.create(aBook);
    console.log("book is created");
    console.log(bookDataRes);
    return bookDataRes;
  },

  updateABook: async (bookInfo) => {
    try {
      //check book exists
      // const isBookExists = await CheckBookExists(bookInfo.id);
      // if (!isBookExists) {
      //   return -1;
      // }
      const aBook = await validateBookInfo(bookInfo);
      if (aBook === -1) {
        return -1;
      }
      console.log("book is valid");

      console.log("book is updating");
      if (!aBook._id) {
        console.log("_id is required");
      }
      const bookDataRes = await Book.findByIdAndUpdate(aBook._id, aBook);
      console.log("book is updated");
      console.log(bookDataRes);
      return bookDataRes;
    } catch (error) {
      console.log("something went wrong!");
      console.log(error);
      return -1;
    }
  },

  deleteABook: async (id) => {
    try {
      const res = await Book.findByIdAndUpdate(id, { show: false });
      return res;
    } catch (error) {
      console.log("wrong");
      return -1;
    }
  },
  statisticsByDay: async (date) =>{
    const dateR = new Date(date);
    console.log(dateR);

    
  },
  getTop10Book: async () =>{
    const top10Book = Book.find({show: true}).populate('author').populate('category').sort({quantity_sold: -1}).limit(10);
    return top10Book;
  }

};
