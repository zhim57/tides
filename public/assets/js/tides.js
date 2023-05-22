import anchSail40up from "../../assets/data/anch_sail_more_40_or_more_800.js";




$(document).ready(function() {
  $('#dataTable').DataTable();

function showAnchSail40up (tableObject){
  const encodedData = encodeURIComponent(JSON.stringify(tableObject))

let table =encodedData;
$.ajax("api/showAnchSail40up/",{
  type:"GET",
  data:table
}).then((res) => {
  let dudu = res;
  tideObject = res;

  if (dudu != undefined) {
  console.log("tideObject received");

  } else {
    console.log("problem with the response tideObj");
  }
});



}
function filUpTheDateBase2 (tableObject){
  
  tableObject.forEach(element => {

  let table =element;
  $.ajax("api/filUpTheDateBase1/",{
  type:"POST",
  data:table
  }).then((res) => {
  let dudu = res;
 
  
  if (dudu != undefined) {
  console.log("tideObject received");
  
  } else {
    console.log("problem with the response tideObj");
  }
  });
  
});  

}


console.log(anchSail40up);
// showAnchSail40up(anchSail40up);
// filUpTheDateBase1 (anchSail40up);

});