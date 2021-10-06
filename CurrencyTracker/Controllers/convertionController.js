var express = require('express');
var url = require('url');
var HomeModel = require('../Models/HomeModel');
var convertionModel = require('../Models/convertionModel');

exports.ShowAllCurrencies = function (req, res) {
    convertionModel.ReadAllCurrencies(req, res, function (data) {

        var arr = [], arr2 = [];
        var i = 0;
        for (var item in data) {
            arr[i] = data[item];
            arr2[i] = item.toString();
            i++
            
        }
       
       
        

 var data = {
            quetes: arr,
            real: arr2, // the fake names
        };
        res.render('pages/transform', data);

    });
}