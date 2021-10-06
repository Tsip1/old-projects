let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Apartment = repuire('./Apartment');

let AdmSchema = new Schema({
    details: {type: Schema.Types.ObjectId, ref:'Person'},
    preferredApartments: [Apartment]
});

let Customer = mongoose.model('Customer', cstScheme);

module.exports = Customer;