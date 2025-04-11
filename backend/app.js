var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require('http');
const cors = require('cors');

require("dotenv").config();

const {connectToMongoDB} = require('./config/db');

var indexRouter = require('./routes/index');
var osRouter = require ('./routes/osRouter');
var produitRouter = require('./routes/produitRouter');
var userRouter = require ('./routes/userRouter');
var commandeRouter = require ('./routes/commandeRouter');
var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: 'http://localhost:5173', // Autorise uniquement ce domaine
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes autorisées
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use('/', indexRouter);
app.use('/os',osRouter);
app.use('/prod' , produitRouter);
app.use('/user',userRouter);
app.use('/cmd',commandeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
/*app.use(function(err, req, res, next) {
  //set locals, only providing error in development
  /res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

    //render the error page
  res.status(err.status || 500);
  res.render('error');
});*/



const server = http.createServer(app);
server.listen(process.env.PORT, ()=>{
  connectToMongoDB(),
  console.log("app is running on port")});
