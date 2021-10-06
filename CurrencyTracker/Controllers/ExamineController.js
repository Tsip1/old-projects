var express = require('express');
var url = require('url');
var ExamineModel = require('../Models/ExamineModel');
//var Date = require('date'); //to check

exports.showHistory = function (req, res) {
    var day = "01";
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear() - 1;
    var counter = 12 - month;
    var counter2 = counter;
    var date;
    var month1 = new Date().getMonth();
    var year1 = year;
    var arr = [];
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var arr2 = [];
    for (var i = 0; i < 12; i++) {
        if (counter2 == -1) {
            year1++;
            month1 = 0;
        }
            
        arr2[i] = monthNames[month1] + " " + year1;
        counter2--;
        month1++;
    }
    ExamineModel.ReadHistory1(req, res,counter, month, year, 0, arr, function (quotes) {
        if (quotes) //if not undefiened
        {
      
            var data = {
                quotes: quotes,
                months: arr2,
                name: req.query.coin,
            };
            res.render('pages/historyGraph', data);
        }
    });
 
    

}


exports.showHistory1 = function (req, res) {
    var year1 = req.query.year1;
    var year2 = req.query.year2;
    var month1 = req.query.month1;
    var month2 = req.query.month2;
    var numMonths;
    var numYears = 0;
    var numDays = 30;
    var tmp = 1;
    var arr = [], arr1 = [];
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    if (year2 == year1) {
        if (month2 > month1)
            numMonths = month2 - month1 + 1;


    }

    else {

        numYears = year2 - year1 - 1;
        console.log(numYears + " " + month1 + " " + month2);
        var tmp1 = numYears * 12;
        console.log(tmp1);
        var tmp2 = tmp1 + (month2 - month1);
        numMonths = 12 + 1 + tmp2;


    }
    if (numMonths >= 12) {

        tmp = Math.ceil(numMonths / 12); // the math function rounds up
    }


    ExamineModel.ReadHistory2(req, res, month1, year1, tmp, numMonths, 0, arr, arr1, function (quotes, quotes2) {

        var data = {
            quotes: quotes,
            months: quotes2,
            name: req.query.coin,

        };
        res.render('pages/historyGraph', data);
    });

}

   
