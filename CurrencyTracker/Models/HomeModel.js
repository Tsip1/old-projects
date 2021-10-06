var Client = require('node-rest-client').Client;
var express = require('express');

var client = new Client();


exports.ReadAllCurrencies = function (req,res,next)
{
    client.get("http://apilayer.net/api/live?access_key=3ee8adf6d63441153065a643391f0881&currencies=BTC,CAD,CHF,CNY,EUR,HKD,ILS,JPY,RUB,USD  ", function (data, response) {
        //to put the names in abc order!!!
        // parsed response body as js object
        //&currencies=AUD,CAD,MXN,PLN,USD
        client.get("http://apilayer.net/api/list?access_key=3ee8adf6d63441153065a643391f0881&prettyprint=1&format=1", function (names, response)
        {
           
            next(data.quotes, names.currencies);
            
            
        });
    }

    );
    /*
        client.get("http://apilayer.net/api/list?access_key=3ee8adf6d63441153065a643391f0881&prettyprint=1&format=1", function (data, response) {
            last(data.currencies);
        }
    );
    */
 
}
/*
exports.ReadAllNames = function (req, res, next) {
    client.get("http://apilayer.net/api/list?access_key=3ee8adf6d63441153065a643391f0881&prettyprint=1&format=1", function (data, response) {
        next(data.currencies);
    });
*/
