// import anchSail40up from "../../assets/data/anch_sail_more_40_or_more_800.js";
// import anchArr40up from "../../assets/data/arr_anc_more_40_or_more_800.js";
import b96_98 from "../../assets/data/b96_98.js";
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

  function filUpTheDateBase5(b96_98) {
    b96_98.forEach((element) => {     
                                  // .slice(1410, 1411)
      let table = element;
      $.ajax("api/filUpTheDateBase5/", {
        type: "POST",
        data: table,
      }).then((res) => {
        let dudu = res;

        if (dudu != undefined) {
          console.log("aded to DB");
        } else {
          console.log("problem with the response tideObj");
        }
      });
    });
  };

  // console.log(b96_98);
  // showAnchSail40up(anchSail40up);
  // filUpTheDateBase5 (b96_98);
});
