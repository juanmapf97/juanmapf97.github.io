var one = "#b0190e",
		two = "#7f3995",
		three = "#f96a31",
		four = "#5192e3",
		five = "#bb6774";

$(".icon").on("click", function(e) {
    var parentId = e.currentTarget.parentElement.id;
    if (parentId === "one") {
        $("html, body").animate({scrollTop: $("#two").position().top + 1}, 1000);
    } else if (parentId === "two") {
        $("html, body").animate({scrollTop: $("#three").position().top + 1}, 1000);
    } else if (parentId === "three") {
        $("html, body").animate({scrollTop: $("#four").position().top + 1}, 1000);
    } else if (parentId === "four") {
        $("html, body").animate({scrollTop: $("#five").position().top + 1}, 1000);
    } else if (parentId === "five") {
        $("html, body").animate({scrollTop: $("#six").position().top + 1}, 1000);
    }
});

$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() >= $("#one").position().top) {
            $('body').css('background', $("#one").attr("data-color"));

    };
    if ($(document).scrollTop() > $("#two").position().top) {
            $('body').css('background', $("#two").attr("data-color"))
    };
    if ($(document).scrollTop() > $("#three").position().top) {

    		$('body').css('background', $("#three").attr("data-color"))
    };
    if ($(document).scrollTop() > $("#four").position().top) {

    		$('body').css('background', $("#four").attr("data-color"))
    };
    if ($(document).scrollTop() > $("#five").position().top) {
    		$('body').css('background', $("#five").attr("data-color"))
    };
    if ($(document).scrollTop() >= $("#six").position().top) {
        $('body').css('background', $("#six").attr("data-color"))
    };
});