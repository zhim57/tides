const mongoose = require('mongoose');

let slackvSchema = new mongoose.Schema({
    date : String,
    h_l : String,
    kvk : String,
    nwk_bay : String,
    elz : String,
    tuff_point : String,
    sh_slack : String,
    narrows : String,
    east_river : String,
    north_river : String,
    north_cove : String,
    chelsey_piers : String   
  });

module.exports = mongoose.model('Slackv', slackvSchema);