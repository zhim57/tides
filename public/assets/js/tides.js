
// import sulcv from "../../assets/data/sulcv_nwk_elz.js";

$(document).ready(function () {
  $("#dataTable").DataTable();

  function filUpTheDateBase8(array) {
    array.slice(1345, 1349).forEach((element) => {     
                                  // .slice(1410, 1411)
      let table = element;
      $.ajax("api/filUpTheDateBase9/", {
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

  // console.log(sulcv);
  
  // filUpTheDateBase8 (sulcv);
});
