const mongoose = require('mongoose');

let hkkvSchema = new mongoose.Schema({
    date : String,
    day : String,
    bttery : String,
    pred_ft : Number,
    sailingTime : String,
  
});

module.exports = mongoose.model('Hkkv', hkkvSchema);