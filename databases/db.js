module.exports = function(){
    const mongoose = require("mongoose");
    mongoose.connect(
      process.env.DB_URL,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    
    //Ép Mongoose sử dụng thư viện promise toàn cục
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
      console.log("connecting to server success");
    });
}