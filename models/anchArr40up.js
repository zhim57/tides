const mongoose = require('mongoose');

let anchArr40upSchema = new mongoose.Schema({
    date : String,
    day : String,
    hwsh : String,
    pred_ft : Number,
    windowOpen : String,
    windowClose : String
});

module.exports = mongoose.model('AnchArr40up', anchArr40upSchema);