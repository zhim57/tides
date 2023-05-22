const mongoose = require('mongoose');

let anchSail40upSchema = new mongoose.Schema({
    date : String,
    day : String,
    tideTimeBattery : String,
    pred_ft : Number,
    h_l : String,
    windowOpen1 : String,
    windowOpen2 : String,
    windowClose1 : String,
    windowClose2 : String
});

module.exports = mongoose.model('AnchSail40up', anchSail40upSchema);