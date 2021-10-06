var Client = require('node-rest-client').Client;
var express = require('express');

var client = new Client();

exports.getCurrency = function (req, res, next) {
    /*
     Creating the parameters 'from' and 'to' to request the currency value 
    from currency layer.
    Only 3 first letters are required as the name of the currency.
     */
    var from = req.query.fromCoinsList.substring(0, 3);
    var to = req.query.toCoinsList.substring(0, 3);


    client.get("http://apilayer.net/api/live?access_key=3ee8adf6d63441153065a643391f0881&currencies=" + from, function (data, response) {

        client.get("http://apilayer.net/api/live?access_key=3ee8adf6d63441153065a643391f0881&currencies=" + to, function (data1, response) {
            next(data.quotes, data1.quotes);
        });
    });

}