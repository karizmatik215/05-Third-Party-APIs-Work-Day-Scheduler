//Displays current time in the page header
$(document).ready(function () {
  var DateTime = luxon.DateTime;
  var today = DateTime.local().toLocaleString(DateTime.DATETIME_HUGE);
  $("#currentDay").text(today);
  //function to set CSS classes to each time block after checking for current time
  function timeBlockClasses() {
    //Set current hour to a variable
    var currentHour = luxon.DateTime.local().hour;
    console.log(currentHour);
    //run function to change classes on each time-block
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
      console.log(timeBlock);
      //check if current time is in the past
      if (timeBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      //if not check if time is current
      else if (timeBlock === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      //otherwise change classes to future
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  timeBlockClasses();
});
