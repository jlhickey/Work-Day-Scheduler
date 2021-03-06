//display current time and date
var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

$(document).ready(function () {
    //Assign Save Btn listener
    $(".saveBtn").on("click", function () {
       
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        
        localStorage.setItem(time, text);
    })

    
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function timeTracker() {
        //function tracker
        var timeNow = moment().hour();

       //time block
        $(".time-block").each(function () {
            var Time = parseInt($(this).attr("id").split("hour")[1]);

            
            if (Time < Now) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (Time === Now) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    
    
    timeTracker();
})