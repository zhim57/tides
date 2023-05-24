const mongoose = require('mongoose');

let sw_sailingSchema = new mongoose.Schema({
    date : String,
    day : String,
    time : String,
    pred_ft : Number,
    b29_30_6_o : String,
    b29_30_6_c : String,
    b30_6_31_6_o : String,
    b30_6_31_6_c : String,
    b31_6_33_6_o : String,
    b31_6_33_6_c : String,
    c29_30_6_o : String,
    c29_30_6_c : String,
    c30_6_31_6_o : String,
    c30_6_31_6_c : String,
    c31_6_33_6_o : String,
    c31_6_33_6_c : String,
    m29_30_6_o : String,
    m29_30_6_c : String,
    m30_6_31_6_o : String,
    m30_6_31_6_c : String,
    m31_6_33_6_o : String,
    m31_6_33_6_c : String   
    
  
});

module.exports = mongoose.model('Sw_sailing', sw_sailingSchema);