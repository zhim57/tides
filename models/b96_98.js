const mongoose = require('mongoose');

let b96_98Schema = new mongoose.Schema({
    date : String,
    day : String,
    battery : String,
    pred_ft : Number,
    start_SH_o : String,
    start_SH_cl : String,
    start_b_o : String,
    start_b_c : String
    
  
});

module.exports = mongoose.model('B96_98', b96_98Schema);