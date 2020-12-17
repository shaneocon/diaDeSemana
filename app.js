$(function () {
    //Adds current day to currentDay Head
    var currentdayEl = $("#currentDay");
    currentdayEl.text(moment().format("MMMM Do YYYY, h:mm a"));
    var currentHourTime = parseInt(moment().format('k'));
    //Change color
    for (var hourCount = 9; hourCount < 18; hourCount++) {
        var hourgrabEl = $("#hour-" + hourCount);
        if(hourCount < currentHourTime) {
            hourgrabEl.attr("class","row time-block past");
        }
        else if(hourCount === currentHourTime) {
            hourgrabEl.attr("class","row time-block present");
        }
        else {
            hourgrabEl.attr("class","row time-block future");
        }
    }
    // var descriptionArray = [{hour: ??, description: ?? }];
    // $(".saveBtn").on("click", function() {
    //     var tempString = $(this.previousElementSibling).val();
    //     console.log(tempString);
    //     var hourTemp = $(this.parentElement).i
    //     localStorage.setItem("description", JSON.stringify(tempString));
    // })
    // function init() {
    //     var storedHighscores = JSON.parse(localStorage.getItem("highscores"));
    //     if (storedHighscores !== null) {
    //         highscores = storedHighscores;
    //     }
    // }
    function storeDescriptions() {
    }
    console.log(moment().format('k'));
    console.log(currentHourTime);
    console.log(typeof(currentHourTime));
});