$(document).ready(function () {
  let DateTime = luxon.DateTime;
  let today = DateTime.local();
  $("#currentDay").text(today);
})
