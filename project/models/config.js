const debug = require("debug")('project:model-config');
const mongo = require("mongoose");
const crypto = require('crypto');
let pswSecret = undefined;
let Config = undefined;

module.exports = db => {
    // create a config schema
    let schema = new mongo.Schema({
        pswSecret: String
    });

    schema.statics.GET = async function () {
        if (pswSecret === undefined)
            debug("pswSecret is not set");
        return pswSecret;
    };
    debug("Config model created");

    Config = db.model('Config', schema, 'Config'); // if model name === collection name
    (async () => {
        let configs = await Config.find({}).exec();
        if (configs.length === 0) {
            crypto.randomBytes(20, async function (err, buf) {
                pswSecret = buf.toString('hex');
                let config = new Config({pswSecret : pswSecret});
                await config.save();
            });
        } else {
            pswSecret = configs[0].pswSecret;
        }
    })();
}