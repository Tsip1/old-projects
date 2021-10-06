let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AdmSchema = new Schema({
    details: {type: Schema.Types.ObjectId, ref:'Person'}
});

let Administrator = mongoose.model('Administrator', AdmSchema);

module.exports = Administrator;