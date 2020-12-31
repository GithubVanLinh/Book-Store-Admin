require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongo = require("./databases/db")();
const hbs = require("hbs");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const bodyParser = require('body-parser');

const indexRoute = require('./routes/index');
const authorRoute = require('./routes/author');
const bookRoute = require('./routes/book');
const categoryRoute = require('./routes/category');
const userRoute = require('./routes/users');
const adminRoute = require('./routes/admin');
const apiRoute = require('./routes/api');

var app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require("./config/hbshelper")(hbs);
require("./config/passport")();
//route

app.use("/", indexRoute);
app.use("/users", userRoute);
app.use("/categories", categoryRoute);
app.use("/books", bookRoute);
app.use("/authors", authorRoute);
app.use("/admin", adminRoute);
app.use("/api", apiRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
