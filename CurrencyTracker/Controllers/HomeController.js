var express = require('express');
var url = require('url');
var HomeModel = require('../Models/HomeModel');


exports.ShowAllCurrencies = function (req,res)
{ /*  
    var data=HomeModel.ReadAllCurrencies(req, res, function (data) {
        var data = { quetes: data };
        return data;
    });
    console.log(data.quetes);
    var names = HomeModel.ReadAllNames(req, res, function (names) {
        var names = { real: names };
        return names;
    });
    */
    HomeModel.ReadAllCurrencies(req, res, function (data, names) {
     
        var arr = [], arr2 = [];
        var i = 0;
        for (var item in data) {
            arr[i] = data[item];
            i++;
        }
        i = 0;
        for (var item in names) {
            var tmp = "USD" + item;
            
            var b = false;
            for (var x in data) {
                if (x == tmp)
                    b = true;
                
                
            }
            if (b == true) {
                arr2[i] = names[item].toString();
                i++;
                
            }
            
        }

        var data = {
            quetes: arr,
            real: arr2,
        };
        
        /*
        var data = {
            quetes: data,
            real: names,
        }
        */
        
            
        
        if (req.url.includes('graph')) {
            res.render('pages/homeWithGraph', data);
        } else {
            res.render('pages/home1', data);
        }
    });

   // }, 

  //  );
    /*
    HomeModel.ReadAllNames(req, res, function (names) {
        var names = { real: names };

        //var p = url.parse(req.url, true);

        if (req.url.includes('graph')) {
            res.render('pages/homeWithGraph', names);
        } else {
            res.render('pages/home', names);
        }

    }

    );


    */
}