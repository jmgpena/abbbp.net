define(["jquery"], function($) {
    // main entry point
    $(function() {
        console.log("app started");

        var h = $(window).height();
        var w = $('.image').width();

        $('.image').height(h);
    })
});
