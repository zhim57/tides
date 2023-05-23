const mongoose = require('mongoose');

let shcstvSchema = new mongoose.Schema({
    date : String,
    day : String,
    hw_sh : String,
    pred_ft : Number,
    op_29_29_6 : String,
    cl_29_29_6 : String,
    op_29_6_30 : String,
    cl_29_6_30 : String,
    op_30_30_6 : String,
    cl_30_30_6 : String,
    op_30_6_31 : String,
    cl_30_6_31 : String,
    op_31_31_6 : String,
    cl_31_31_6 : String,
    op_31_6_32 : String,
    cl_31_6_32 : String,
    op_32_32_6 : String,
    cl_32_32_6 : String,
    op_32_6_33 : String,
    cl_32_6_33 : String,
    o_c_33_33_6 : String
    
  
});

module.exports = mongoose.model('Shcstv', shcstvSchema);