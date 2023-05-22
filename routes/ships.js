const express = require('express');
const router = express.Router();
const flash = require("connect-flash");

const Tide = require('../models/tide');
const AnchSail40up = require('../models/anchSail40up');


//get routes starts here
router.get('/', (req, res)=> {
  
            res.render('index1');

    
});
// router.get('/', (req, res)=> {
//     Tide.find({})
//         .then(tides => {
//             res.render('index', {tides : tides});
//         })
//         .catch(err=> {
//             req.flash('error_msg', 'ERROR: '+err)
//             res.redirect('/');
//         })
    
// });

router.get('/employee/new', (req,res)=> {
    res.render('new');
});
router.get('api/showAnchSail40up/', (req , res)=> {
    console.log(req.body.data)
    res.render('index', {data:data});
});

router.get('/employee/search', (req,res)=> {
    res.render('search', {employee:""});
});

router.get('/tide', (req,res)=> {

    let dateJa = new Date();
    let dateJa1 = new Date();

    dateJa1.setDate(dateJa1.getDate() + 14);
    var dd = String(dateJa1.getDate()).padStart(2, '0');
    var mm = String(dateJa1.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = dateJa1.getFullYear();
    dateJa1 = mm + '/' + dd + '/' + yyyy;
    
    
    
    
    var dd = String(dateJa.getDate()).padStart(2, '0');
    var mm = String(dateJa.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = dateJa.getFullYear();
    
    dateJa = mm + '/' + dd + '/' + yyyy;
    
    console.log(dateJa);
    console.log(dateJa1);




    
    let searchQuery = {
        "date" : {$gte : dateJa, $lte: dateJa1 }

    };



    console.log(searchQuery);
AnchSail40up.find(searchQuery   )  //{"date": {$slice:14} 
        .then(tides1 => {
            console.log(tides1);
            res.render('index', {tides:tides1});
        })
        .catch(err => {
            req.flash('error_msg', 'ERROR: '+err)
           
            res.redirect('/');
        });

});

router.get('/edit/:id', (req, res)=> {

    let searchQuery = {_id : req.params.id};
    Employee.findOne(searchQuery)
        .then(employee => {
            res.render('edit', {employee:employee});
        })
        .catch(err => {
            req.flash('error_msg', 'ERROR: '+err)
            res.redirect('/');
        });

});

//get routes ends here


//post routes starts here
router.post('/employee/new', (req,res)=> {
    let newEmployee = {
        name : req.body.name,
        designation : req.body.designation,
        salary : req.body.salary
    };

    Employee.create(newEmployee)
        .then(employee => {
            req.flash('success_msg', 'Employee data added to database successfully.')
            res.redirect('/');
        })
        .catch(err => {
            req.flash('error_msg', 'ERROR: '+err)
            res.redirect('/');
        });
});
router.post("/api/filUpTheDateBase1/", (req,res)=> {
    console.log("api/filUpTheDateBase1/")
    console.log(req.body);
    let newAnchSail40up = {
       date : req.body.date,
       day : req.body.day,
       tideTimeBattery: req.body.tideTimeBattery,
       pred_ft : req.body.pred_ft,
       h_l : req.body.h_l,
       windowOpen1 : req.body.windowOpen1,
       windowOpen2 : req.body.windowOpen2,
       windowClose1 : req.body.windowClose1,
       windowClose2 : req.body.windowClose2
  
    };

    AnchSail40up.create(newAnchSail40up)
        .then(anchSail40up => {
            req.flash('success_msg', 'navigational data added to database successfully.')
            res.redirect('/');
        })
        .catch(err => {
            req.flash('error_msg', 'ERROR: '+err)
            res.redirect('/');
        });
});

//post routes end here

//put routes starts here

router.put('/edit/:id', (req, res)=> {
    let searchQuery = {_id : req.params.id};

    Employee.updateOne(searchQuery, {$set: {
        name : req.body.name,
        designation : req.body.designation,
        salary : req.body.salary
    }})
    .then(employee => {
        req.flash('success_msg', 'Employee data updated successfully.')
        res.redirect('/');
    })
    .catch(err => {
        req.flash('error_msg', 'ERROR: '+err)
        res.redirect('/');
    });
});

//put routes ends here


//delete routes starts here
router.delete('/delete/:id', (req, res)=> {
    let searchQuery = {_id : req.params.id};

    Employee.deleteOne(searchQuery)
        .then(employee=>{
            req.flash('success_msg', 'Employee deleted successfully.')
            res.redirect('/');
        })
        .catch(err => {
            req.flash('error_msg', 'ERROR: '+err)
            res.redirect('/');
        });
});

//delete routes ends here
module.exports = router;