var Client = require('node-rest-client').Client;
var express = require('express');

var client = new Client();

var dateFunc = function (year, month, counter) {
    var date;
    if (month < 10)
        month1 = "0" + month;
    else
        month1 = month;
    if (counter1 != 0) {

        date = year + "-" + month1 + "-01" ;
        month++;
    }
    else {
        year++;
        month = 1;

        date = year + "-" + month1 + "-01" ;
    }
    counter1--; 

       
    return date;
}
exports.ReadHistory1 = function (req, res,counter1, month, year,counter,arr ,next) {
    var name = req.query.kindOfBatata;
    var date, month1;
    if (month < 10)
    month1 = "0" + month;
    else
    month1 = month;
    if (counter1 != 0) {

        date = year + "-" + month1 + "-01";
        month++;
    }
    else {
        year++;
        month = 1;
        month1 = "0" + month;
        date = year + "-" + month1 + "-01";
    }
    counter1--; 
    client.get("http://apilayer.net/api/historical?access_key=3ee8adf6d63441153065a643391f0881&%20date=" + date + "&currencies=" + name, function (data, response) {
      
        arr[counter] = data.quotes;
        counter++;
        
        if (counter < 12)
        {
            
            exports.ReadHistory1(req, res,counter1, month, year,counter, arr, next);
           
            
        }
        else
        
            next(arr);

    });
}


/*
exports.ReadHistroy = function (req, res,date, next) {
    console.log(req.query.kindOfBatata);
    var name = req.query.kindOfBatata;
    var counter = 3000;
    client.get("http://apilayer.net/api/historical?access_key=3ee8adf6d63441153065a643391f0881&%20date=" + date + "&currencies=" + name, function (data, response) {

        console.log(date);
        console.log(counter);
        
          next(data.quotes);

    });
*/
  

    


//}


/*
exports.ReadHistroy = function (req, res, date, next) {
    var name = req.query.kindOfBatata;
    client.get("http://apilayer.net/api/historical?access_key=3ee8adf6d63441153065a643391f0881&%20date=" + date + "&currencies=" + name, function (data, response) {
        //  console.log(data.quotes);


        next(data.quotes);

    });
}
*/
//*/