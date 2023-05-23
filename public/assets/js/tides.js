
import slackv from "../../assets/data/slackv.js";

$(document).ready(function () {
  $("#dataTable").DataTable();

  function filUpTheDateBase7(array) {
    array.forEach((element) => {     
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

  // console.log(slackv);
  
  // filUpTheDateBase7 (slackv);
});
