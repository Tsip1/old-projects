const debug = require("debug")("mongo:model-person");
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Administrator = require('./Administrator');
let Agent = require('./Agent');
let Apartment = require('./Apartment');

let PersonSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: Strine,
    phoneNumber1: String,
    phoneNumber2: String,
    userName: String,
    password: String,
    permission: String
});

PersonScheme.pre('save', (async function(next){
    switch (this.permission) {
        case 'administrator':
            break;
        case 'agent':
            break;
        case 'customer':
            break;
        default:
            break;
    }
    next();
}));

debug('Person model was created succesfully');

let Person = mongoose.model('Person', PersonSchema);
module.exports = Person;