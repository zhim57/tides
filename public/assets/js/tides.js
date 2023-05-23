
import cgt_bayonne from "../../assets/data/cgt_bayonne.js";

$(document).ready(function () {
  $("#dataTable").DataTable();

  function filUpTheDateBase7(cgt_bayonne) {
    cgt_bayonne.forEach((element) => {     
                                  // .slice(1410, 1411)
      let table = element;
      $.ajax("api/filUpTheDateBase7/", {
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

  // console.log(cgt_bayonne);
  
  // filUpTheDateBase6 (cgt_bayonne);
});
