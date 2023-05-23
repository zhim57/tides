const mongoose = require('mongoose');

let sulcvSchema = new mongoose.Schema({
    date : String,
    day : String,
    battery : String,
    pred_ft : String,
    sh_st_o : String,
    sh_st_c : String,
    b_st_o : String,
    b_st_c : String
     
  });

module.exports = mongoose.model('Sulcv', sulcvSchema);