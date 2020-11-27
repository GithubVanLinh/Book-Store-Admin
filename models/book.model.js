const Book = require("../databases/book");
const Author = require("../databases/author");
const Comment = require("../databases/comment");
const Category = require("../databases/category");
const mongoose = require('mongoose');

//True if exists
CheckBookExists = async function (bookId) {
  console.log("book Id: ", bookId);
  const isBookExists = await Book.exists({ id: bookId });
  return isBookExists;
};

//return id if exists
validateAuthor = function(authorId){
  const id = mongoose.Types.ObjectId(authorId)
  const isExists = Author.exists({_id: id});
  if(isExists){
    return id;
  } else{
    return -1;
  }
}

validateCategory = function(categoryId){
  const id = mongoose.Types.ObjectId(categoryId);
  const isExists =  Author.exists({_id: id});
  if(isExists){
    return id;
  } else{
    return -1;
  }
}

validateBookInfo = function (bookInfo) {
  console.log("validate BookInfo ", bookInfo);

  const newBook = bookInfo;

  //start add author id to newBook
  //check author exists
  //return author id if valid
  const authorId = validateAuthor(bookInfo.author);
  if(authorId === -1){
    return -1;
  }
  newBook.author = authorId;
  //end author
  
  //begin add category to newBook
  //check category exists
  //return categoryId if valid
  const categoryArray = bookInfo.category;
  const category = [];

  for (i of categoryArray) {
    const categoryId = validateCategory(i);
    if(categoryId === -1){
      return -1;
    }
    category.push(categoryId);
  }
  newBook.category = category;
  //end category

  console.log("new Book: ", newBook);

  return newBook;
};

module.exports = {
  getAllBook: async () => {
    const books = await Book.find({}).populate('author').populate('category').exec();
    console.log(books);
    return books;
  },

  // return -1 if ID has been existed
  createANewBook: async (aNewBookInfo) => {
    console.log("Book info", aNewBookInfo);
    const isBookExists = await CheckBookExists(aNewBookInfo.id);
    if (isBookExists) {
      return -1;
    }

    const aBook = validateBookInfo(aNewBookInfo);
    if(aBook === -1){
      return -1;
    }

    const bookDataRes = await Book.create(aBook);
    console.log(bookDataRes);
    return bookDataRes;
  },
};
