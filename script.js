//Displays current time in the page header
$(document).ready(function () {
  var DateTime = luxon.DateTime;
  var today = DateTime.local().toLocaleString(DateTime.DATETIME_HUGE);
  $("#currentDay").text(today);
  //function to set CSS classes to each time block after checking for current time
  function timeBlockClasses() {
    //Set current hour to a variable
    var currentHour = luxon.DateTime.local().hour;
    //run function to change classes on each time-block
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
      //check if current time is in the past
      if (timeBlock < currentHour) {
        $(this).addClass("past");
      }
      //if not check if time is current
      else if (timeBlock === currentHour) {
        $(this).addClass("present");
      }
      //otherwise change classes to future
      else {
        $(this).addClass("future");
      }
    });
  }
  timeBlockClasses();
});
// function to save textarea to local storage
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var hour = $(this).parent().attr("id");
  var text = $(this).siblings(".description").val();

  localStorage.setItem(hour, text);
});
// function to set textarea from local storage
var keys = Object.keys(localStorage);
for (let i = 0; i < keys.length; i++) {
  var value = localStorage.getItem(keys[i]);
  var textInput = $("#" + keys[i]).find("textarea");
  textInput.val(value);
}
