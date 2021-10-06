// https://scotch.io/tutorials/use-ejs-to-template-your-node-application

var express = require('express');
var HomeController = require('./Controllers/HomeController');
var app = express();
var ExamineController = require('./Controllers/ExamineController');
var TransformController = require('./Controllers/TransformController');
var convertionController = require('./Controllers/convertionController');
// view engine setup

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));
/*
app.use('/transform', function (req, res) {
    res.render('pages/transform');
});
app.use('/transform1', TransformController.convertCurrency);

*/
app.use('/transform', convertionController.ShowAllCurrencies);
app.use('/examine', function (req, res) {
    res.render('pages/examine');
});
/*
app.use('/newCurrency', function (req, res) {
    res.render('pages/stam', { query: req.query });
});
*/
/*
app.use('/newCurrency', function (req, res, next) {
    console.log("begginning");
    next();
});
*/
app.use('/newCurrency', ExamineController.showHistory); //maybe you dont havr to write kindOfBatata, it's part of the req
app.use('/', HomeController.ShowAllCurrencies);
/*
app.use('/', function (req, res) {
    res.render('pages/home1');
});
*/

//app.use('/transform', function (req, res) {
//    res.render('pages/transform');
//});


//app.use('/', function (req, res) {
//    HomeController.ShowAllCurrencies(req, res);
//   // res.render('pages/home');
//});    

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

/*
 <form class="form-inline" action="http://localhost:3000/newCurrency" method="get"> fron examine.ejs
*/
