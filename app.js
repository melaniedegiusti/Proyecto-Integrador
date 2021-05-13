var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//requeris al archivo
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let autosRouter = require('./routes/autos');
let productRouter = require('./routes/product');
let registerRouter = require('./routes/register');
let loginRouter = require('./routes/login');
let homeLogueadoRouter = require('./routes/homeLogueado');
let productAddRouter = require('./routes/productAdd');
let profileRouter = require('./routes/profile');
let profileEditRouter = require('./routes/profileEdit');
let searchResultsRouter = require('./routes/searchResults');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//habilitando la ruta
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/autos', autosRouter);
app.use('/product', productRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/homeLogueado', homeLogueadoRouter);
app.use('/productAdd', productAddRouter);
app.use('/profile', profileRouter);
app.use('/profileEdit', profileEditRouter);
app.use('/searchResults', searchResultsRouter) 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
