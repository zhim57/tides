// import anchSail40up from "../../assets/data/anch_sail_more_40_or_more_800.js";
// import anchArr40up from "../../assets/data/arr_anc_more_40_or_more_800.js";
import hhkv from "../../assets/data/hhk.js";
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

  function filUpTheDateBase4(hhkv) {
    hhkv.slice(1410, 1411).forEach((element) => {
      let table = element;
      $.ajax("api/filUpTheDateBase3/", {
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

  console.log(hhkv);
  // showAnchSail40up(anchSail40up);
  // filUpTheDateBase3 (hhkv);
});
