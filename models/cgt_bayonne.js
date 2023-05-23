const mongoose = require('mongoose');

let cgt_bayonneSchema = new mongoose.Schema({
    date : String,
    day : String,
    battery : String,
    pred_ft : Number,
    st_win_op : String,
    st_win_cl : String,
    sail_w_op : String,
    sail_w_cl : String
    
  
});

module.exports = mongoose.model('Cgt_bayonne', cgt_bayonneSchema);