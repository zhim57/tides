// import anchSail40up from "../../assets/data/anch_sail_more_40_or_more_800.js";
// import anchArr40up from "../../assets/data/arr_anc_more_40_or_more_800.js";
import shcstv from "../../assets/data/shcstv.js";
// import anchSail40up from "../../assets/data/anch_sail_more_40_or_more_800.js";
// import anchSail40up from "../../assets/data/anch_sail_more_40_or_more_800.js";
// import anchSail40up from "../../assets/data/anch_sail_more_40_or_more_800.js";
// import anchSail40up from "../../assets/data/anch_sail_more_40_or_more_800.js";
// import anchSail40up from "../../assets/data/anch_sail_more_40_or_more_800.js";
// import anchSail40up from "../../assets/data/anch_sail_more_40_or_more_800.js";
// import anchSail40up from "../../assets/data/anch_sail_more_40_or_more_800.js";
// import anchSail40up from "../../assets/data/anch_sail_more_40_or_more_800.js";

$(document).ready(function () {
  $("#dataTable").DataTable();

  function filUpTheDateBase5(shcstv) {
    shcstv.forEach((element) => {     
                                  // .slice(1410, 1411)
      let table = element;
      $.ajax("api/filUpTheDateBase5/", {
        type: "POST",
        data: table,
      }).then((res) => {
        let dudu = res;

        if (dudu != undefined) {
          console.log("aded");
        } else {
          console.log("problem with the response tideObj");
        }
      });
    });
  };

  // console.log(shcstv);
  // showAnchSail40up(anchSail40up);
  // filUpTheDateBase4 (shcstv);
});
