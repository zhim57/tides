const mongoose = require('mongoose');

let tideScheme = new mongoose.Schema({
    name : String,
    designation : String,
    salary : Number
});

module.exports = mongoose.model('Tide', tideScheme);