const express = require("express");
const router = express.Router();
const flash = require("connect-flash");

const AnchSail40up = require("../models/anchSail40up");
const AnchArr40up = require("../models/anchArr40up");
const Hhkv = require("../models/hhkv");
const Shcstv = require("../models/shcstv");
const B96_98 = require("../models/b96_98");
const b96_98 = require("../models/b96_98");

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
router.get("/shcstv", (req, res) => {
  let searchQuery = getSearchQuery();

  Shcstv.find(searchQuery) //{"date": {$slice:14}
    .then((tides2) => {
      res.render("shcstv", { tides: tides2 });
    })
    .catch((err) => {
      req.flash("error_msg", "ERROR: " + err);
      res.redirect("/");
    });
});
router.get("/b96_98v", (req, res) => {
  let searchQuery = getSearchQuery();

  B96_98.find(searchQuery) //{"date": {$slice:14}
    .then((tides2) => {
      res.render("b96_98v", { tides: tides2 });
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
router.post("/api/filUpTheDateBase4/", (req, res) => {
  let newShcstv = {
    date: req.body.date,
    day: req.body.day,
    hw_sh: req.body.hw_sh,
    pred_ft: req.body.pred_ft,
    op_29_29_6: req.body.op_29_29_6,
    cl_29_29_6: req.body.cl_29_29_6,
    op_29_6_30: req.body.op_29_6_30,
    cl_29_6_30: req.body.cl_29_6_30,
    op_30_30_6: req.body.op_30_30_6,
    cl_30_30_6: req.body.cl_30_30_6,
    op_30_6_31: req.body.op_30_6_31,
    cl_30_6_31: req.body.cl_30_6_31,
    op_31_31_6: req.body.op_31_31_6,
    cl_31_31_6: req.body.cl_31_31_6,
    op_31_6_32: req.body.op_31_6_32,
    cl_31_6_32: req.body.cl_31_6_32,
    op_32_32_6: req.body.op_32_32_6,
    cl_32_32_6: req.body.cl_32_32_6,
    op_32_6_33: req.body.op_32_6_33,
    cl_32_6_33: req.body.cl_32_6_33,
    o_c_33_33_6: req.body.o_c_33_33_6,
  };


  Shcstv.create(newShcstv)
    .then((shcstv) => {
      // req.flash('success_msg', 'navigational data added to database successfully.')
      res.redirect("/");
      console.log("added to DB");
    })
    .catch((err) => {
      // req.flash('error_msg', 'ERROR: '+err)
      res.redirect("/");
    });
});
router.post("/api/filUpTheDateBase5/", (req, res) => {
  let newB96_98 = {
    date: req.body.date,
    day: req.body.day,
    battery: req.body.battery,
    pred_ft: req.body.pred_ft,
    start_SH_o: req.body.start_SH_o,
    start_SH_cl: req.body.start_SH_cl,
    op_29_6_30: req.body.op_29_6_30,
    start_b_o: req.body.start_b_o,
    start_b_c: req.body.start_b_c,
    
  };


  B96_98.create(newB96_98)
    .then((b96_98) => {
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
