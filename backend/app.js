var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const http = require("http");
const cors = require("cors");

require("dotenv").config();

const { connectToMongoDB } = require("./config/db");
const authRouter = require('./routes/authRouter');

var indexRouter = require("./routes/index");
var osRouter = require("./routes/osRouter");
var produitRouter = require("./routes/produitRouter");
var userRouter = require("./routes/userRouter");
var commandeRouter = require("./routes/commandeRouter");
var cartRouter = require("./routes/cartRouter");
var newsletterRouter = require("./routes/newsletterRouter");
var reservationRouter = require("./routes/reservationRouter");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors()); // Allow all origins and methods by default

app.use("/", indexRouter);
app.use("/os", osRouter);
app.use("/prod", produitRouter);
app.use("/user", userRouter);
app.use("/cmd", commandeRouter);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use('/auth', authRouter);
app.use('/cart', cartRouter);
app.use('/newsLetter', newsletterRouter);
app.use('/reservation', reservationRouter);

const { authMiddleware } = require('./middlewares/authMiddleware');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});

const server = http.createServer(app);
server.listen(process.env.PORT , () => {
  connectToMongoDB();
  console.log(`Server is running on port`);
});
//console.log(`Server is running on port ${process.env.PORT }`);