$(function () {

    "use strict";



    $(window).scroll(function (){
        /** Strat Fuction Navbar **/
        var navbar = $(".navbar");
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass("scrolled");
        } else {
            navbar.removeClass("scrolled");
        }

        // Show Button Scroll To op
        var buttonScroll = $(".scroll-to-top");
        if ($(window).scrollTop() >= 1100) {
            buttonScroll.fadeIn(400)
        } else {
            buttonScroll.fadeOut(400)
        }

        // sync Navbar Link 
        $('.block').each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                $(".navbar li a").removeClass('active');
                var blockID = $(this).attr('id');
                $('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');
            }
        })
    });


     // Smothly Scroll Elements  
     $(".navbar li a").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 2
        },1000)
     });

       //Scroll To Top
       $(".scroll-to-top, .navbar-brand").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        },1000)
       })


   

});