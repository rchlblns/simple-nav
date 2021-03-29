$(document).ready(function() {

    $("#subnav-trigger").click(function() {
        $(".subnav-content").slideToggle("slow");
        $(".material-icons").toggleClass("down");
        $("li a").removeClass("active");
        $(this).addClass("active-dropdown")
    });

    $("#subnav-trigger ul").click(function(e) {
        e.stopPropagation();
    })

    $("ul li a").click(function() {
        $("li a").removeClass("active");
        $(this).addClass("active")
    })

})
