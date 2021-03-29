$(document).ready(function() {

    $("#subnav-trigger").hover(function() {
        $(".subnav-content").slideToggle("slow");
    });

    $("ul li a").click(function() {
        $("li a").removeClass("active");
        $(this).addClass("active")
    })
})
