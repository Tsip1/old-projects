let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Apartment = repuire('./Apartment');

let AgentSchema = new Schema({
    details: {type: Schema.Types.ObjectId, ref:'Person'},
    apartmentList: [Apartment],
    population: Number,
    recommendation: [String],
    speciality: String
});

let Agent = mongoose.model('Agent', agentScheme);

module.exports = Agent;
