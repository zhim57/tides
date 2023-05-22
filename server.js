const dotenv = require('dotenv');
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const methodOverride = require('method-override');

dotenv.config({path : './.env'});
var PORT = process.env.PORT ;




// connecting mongo database
mongoose.connect( "mongodb://127.0.0.1:27017/mongodb" ,{   //process.env.DATABASE_LOCAL||
  useNewUrlParser: true,  
  useUnifiedTopology: true,

 
}), function (err, db) {
  if(err) throw err;   
// Use this space to pass MongoDB CRUD code here  
console.log(db)      ;     
};
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname,"views"));
app.set('view engine', 'ejs');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware for  method override
app.use(methodOverride('_method'));

// Import routes and give the server access to them.
const routes = require('./routes/ships');

app.use(session({
  secret: "nodejs",
  resave:true,
  saveUninitialized:true
}));

//middleware for connect flash
app.use(flash());

//Setting messages variables globally
app.use((req,res, next) => { 
  res.locals.success_msg = req.flash(("success_msg")),
  res.locals.error_msg = req.flash(("error_msg")),
  next()
});

app.use(routes);
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
