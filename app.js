//----------------- VARIABLES ------------------// 
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");

var hourSpan;
var userInput;
// ----------------------------------//


$(function () {
    //Adds current day to currentDay Head
    var currentdayEl = $("#currentDay");
    currentdayEl.text(moment().format("MMMM Do YYYY, h:mm a"));
    var currentHourTime = parseInt(moment().format('k'));
    //Change color
    for (var hourCount = 9; hourCount < 18; hourCount++) {
        var hourgrabEl = $("#hour-" + hourCount);
        if (hourCount < currentHourTime) {
            hourgrabEl.attr("class", "row time-block past");
        }
        else if (hourCount === currentHourTime) {
            hourgrabEl.attr("class", "row time-block present");
        }
        else {
            hourgrabEl.attr("class", "row time-block future");
        }
    }
    // --- RETRIEVING FROM LOCAL STORAGE AND DISPLAYING IN CORRESPONDING TIME SLOT ----- // 
                 
    function initPage() {

        var init9 = JSON.parse(localStorage.getItem("9AM"));
        nineAm.val(init9);

        var init10 = JSON.parse(localStorage.getItem("10AM"));
        tenAm.val(init10);

        var init11 = JSON.parse(localStorage.getItem("11AM"));
        elevenAm.val(init11);

        var init12 = JSON.parse(localStorage.getItem("12PM"));
        twelvePm.val(init12);

        var init13 = JSON.parse(localStorage.getItem("1PM"));
        onePm.val(init13);

        var init14 = JSON.parse(localStorage.getItem("2PM"));
        twoPm.val(init14);

        var init15 = JSON.parse(localStorage.getItem("3PM"));
        threePm.val(init15);

        var init16 = JSON.parse(localStorage.getItem("4PM"));
        fourPm.val(init16);

        var init17 = JSON.parse(localStorage.getItem("5PM"));
        fivePm.val(init17);

    }

    initPage()

    //-------- SAVE BUTTON FUNCTION --------------- //
    $(".saveBtn").on("click", function () {
        userInput = $(this).siblings(".description").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".hour").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })

    //------- CLEAR BUTTON FOR THE DAY ---------//
        $("#clear").on("click", function(){
            localStorage.clear();
            initPage()
        })




})

