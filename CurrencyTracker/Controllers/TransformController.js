var express = require('express');
var url = require('url');
var TransformModel = require('../Models/TransformModel');

exports.convertCurrency = function (req, res)
{
   
 //   res.render('pages/transform');

    TransformModel.getCurrency(req, res, function (data, values) {
        
        var item1, item2;
        for (var key in data)
            item1 = data[key];
        for (var key in values)
            item2 = values[key];

        // * req.query.amount   
        var num = (item1 / item2);
        console.log(num);
      
        var data = {
            num: num,

        };
        
       
       
        res.render('pages/result', data);
    });
}