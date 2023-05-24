
import sw_sailing from "../../assets/data/sw_sailingv.js";

$(document).ready(function () {
  $("#dataTable").DataTable();

  function filUpTheDateBase10(array) {
    array.forEach((element) => {     
                                  // .slice(1410, 1411)
      let table = element;
      $.ajax("api/filUpTheDateBase10/", {
        type: "POST",
        data: table,
      }).then((res) => {
        let dudu = res;

        if (dudu != undefined) {
          console.log("added to DB");
        } else {
          console.log("problem with the response tideObj");
        }
      });
    });
  };

  console.log(sw_sailing);
  
  // filUpTheDateBase10 (sw_sailing);
});
