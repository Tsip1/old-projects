let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let debug = require('debug')('project:app'); // add using the debugger tool
let mongoose = require('mongoose');       // add mongoose for MongoDB access
mongoose.connect('mongodb://localhost/myProjectDB', { useNewUrlParser: true });
let connectMongo = require('connect-mongo'); // add session store implementation for MongoDB
let session = require('express-session'); // add session management module


let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

(async () => {
//setting mongoDB
  let MongoStore = connectMongo(session);
  let sessConnStr = "mongodb://127.0.0.1/finalProject-sessions";
  let sessionConnect = mongoose.createConnection();
  try {
    await sessionConnect.openUri(sessConnStr);
  } catch (err) {
    debug(`Error connecting to session backend DB: ${err}`);
    process.exit(0);
  }
  process.on('SIGINT', async () => {
    await sessionConnect.close();
    process.exit(0);
  });

// view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', indexRouter);
  app.use('/users', usersRouter);

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
})();

module.exports = app;
