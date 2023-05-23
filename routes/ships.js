const express = require("express");
const router = express.Router();
const flash = require("connect-flash");

const AnchSail40up = require("../models/anchSail40up");
const AnchArr40up = require("../models/anchArr40up");
const Hhkv = require("../models/hhkv");

//get routes starts here
router.get("/", (req, res) => {
  res.render("index1");
});

function getSearchQuery() {
  let dateJa = new Date();
  let dateJa1 = new Date();

  dateJa1.setDate(dateJa1.getDate() + 7);
  var dd = String(dateJa1.getDate()).padStart(2, "0");
  var mm = String(dateJa1.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = dateJa1.getFullYear();
  dateJa1 = mm + "/" + dd + "/" + yyyy;

  var dd = String(dateJa.getDate()).padStart(2, "0");
  var mm = String(dateJa.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = dateJa.getFullYear();

  dateJa = mm + "/" + dd + "/" + yyyy;

  let searchQuery = {
    date: { $gte: dateJa, $lte: dateJa1 },
  };
  return searchQuery;
}
router.get("/tide1", (req, res) => {
  let searchQuery = getSearchQuery();
  AnchSail40up.find(searchQuery) //{"date": {$slice:14}
    .then((tides1) => {
      // req.flash("success_msg", "All went well, tides fetched");
      res.render("tide1", { tides: tides1 });
    })
    .catch((err) => {
      req.flash("error_msg", "ERROR: " + err);
      res.redirect("/");
    });
});

router.get("/tide2", (req, res) => {
  let searchQuery = getSearchQuery();

  AnchArr40up.find(searchQuery) //{"date": {$slice:14}
    .then((tides2) => {
      res.render("tide2", { tides: tides2 });
    })
    .catch((err) => {
      req.flash("error_msg", "ERROR: " + err);

      res.redirect("/");
    });
});
router.get("/hhkv", (req, res) => {
  let searchQuery = getSearchQuery();

  Hhkv.find(searchQuery) //{"date": {$slice:14}
    .then((tides2) => {
      res.render("hhkv", { tides: tides2 });
    })
    .catch((err) => {
      req.flash("error_msg", "ERROR: " + err);
      res.redirect("/");
    });
});

router.get("/edit/:id", (req, res) => {
  let searchQuery = { _id: req.params.id };
  Employee.findOne(searchQuery)
    .then((employee) => {
      res.render("edit", { employee: employee });
    })
    .catch((err) => {
      req.flash("error_msg", "ERROR: " + err);
      res.redirect("/");
    });
});

//get routes ends here

//post routes starts here
router.post("/api/filUpTheDateBase2/", (req, res) => {
  let newAnchArr40up = {
    date: req.body.date,
    day: req.body.day,
    hwsh: req.body.hwsh,
    pred_ft: req.body.pred_ft,
    windowOpen: req.body.windowOpen,
    windowClose: req.body.windowClose,
  };

  AnchArr40up.create(newAnchArr40up)
    .then((anchArr40up) => {
      // req.flash('success_msg', 'navigational data added to database successfully.')
      // res.redirect('/');
      //   console.log("added to DB");
    })
    .catch((err) => {
      // req.flash('error_msg', 'ERROR: '+err)
      // res.redirect('/');
    });
});
router.post("/api/filUpTheDateBase3/", (req, res) => {
  let newHhkv = {
    date: req.body.date,
    day: req.body.day,
    battery: req.body.battery,
    pred_ft: req.body.pred_ft,
    sailingTime: req.body.sailingTime,
  };

  Hhkv.create(newHhkv)
    .then((hhkv) => {
      // req.flash('success_msg', 'navigational data added to database successfully.')
      res.redirect("/");
      console.log("added to DB");
    })
    .catch((err) => {
      // req.flash('error_msg', 'ERROR: '+err)
      res.redirect("/");
    });
});

//post routes end here

//put routes starts here

router.put("/edit/:id", (req, res) => {
  let searchQuery = { _id: req.params.id };

  Employee.updateOne(searchQuery, {
    $set: {
      name: req.body.name,
      designation: req.body.designation,
      salary: req.body.salary,
    },
  })
    .then((employee) => {
      req.flash("success_msg", "Employee data updated successfully.");
      res.redirect("/");
    })
    .catch((err) => {
      req.flash("error_msg", "ERROR: " + err);
      res.redirect("/");
    });
});

//put routes ends here

//delete routes starts here
router.delete("/delete/:id", (req, res) => {
  let searchQuery = { _id: req.params.id };

  Employee.deleteOne(searchQuery)
    .then((employee) => {
      req.flash("success_msg", "Employee deleted successfully.");
      res.redirect("/");
    })
    .catch((err) => {
      req.flash("error_msg", "ERROR: " + err);
      res.redirect("/");
    });
});

//delete routes ends here
module.exports = router;
