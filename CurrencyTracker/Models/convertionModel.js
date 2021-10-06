var Client = require('node-rest-client').Client;
var express = require('express');

var client = new Client();


exports.ReadAllCurrencies = function (req, res, next) {
    client.get("http://apilayer.net/api/live?access_key=3ee8adf6d63441153065a643391f0881&currencies=BTC,CAD,CHF,CNY,EUR,HKD,ILS,JPY,RUB,USD  ", function (data, response) {
        //to put the names in abc order!!!
        // parsed response body as js object
        //&currencies=AUD,CAD,MXN,PLN,USD
        

            next(data.quotes);
        
    }

    );
}