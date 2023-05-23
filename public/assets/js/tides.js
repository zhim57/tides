// import anchSail40up from "../../assets/data/anch_sail_more_40_or_more_800.js";
// import anchArr40up from "../../assets/data/arr_anc_more_40_or_more_800.js";
import hkkv from "../../assets/data/hkk.js";
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

  function filUpTheDateBase3(hkkv) {
    anchArr40up.forEach((element) => {
      let table = element;
      $.ajax("api/filUpTheDateBase/", {
        type: "POST",
        data: table,
      }).then((res) => {
        let dudu = res;

        if (dudu != undefined) {
          // console.log("tideObject received");
        } else {
          console.log("problem with the response tideObj");
        }
      });
    });
  };

  console.log(hkkv);
  // showAnchSail40up(anchSail40up);
  filUpTheDateBase3 (anchArr40up);
});
