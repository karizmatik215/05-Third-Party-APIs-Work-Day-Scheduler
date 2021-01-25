$(document).ready(function () {
  let DateTime = luxon.DateTime;
  let today = DateTime.local().toLocaleString(DateTime.DATE_HUGE);
  $("#currentDay").text(today);
});
