const mongoose = require('mongoose');

let hhkvSchema = new mongoose.Schema({
    date : String,
    day : String,
    battery : String,
    pred_ft : Number,
    sailingTime : String,
  
});

module.exports = mongoose.model('Hhkv', hhkvSchema);