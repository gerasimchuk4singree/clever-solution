/**
 * Functionality specific to Clever Solution.
 *
 * Provides helper functions to enhance the theme experience.
 */
$( document ).ready(function() {
    $( '.dop-menu' ).hide();
    $(" .mob-menu li")
        .mouseenter(function () {
            $(this).find("ul").show();
            // $('.pushy').css('overflow','visible')
        })
        .mouseleave(function () {
            $(this).find("ul").hide();
            // $('.pushy').css('overflow','')
        });
    // $( '.mob-menu li' ).on("click", function () {
    //     $( this ).append('<div class="triangle"></div>');
    //     $( this ).siblings('.triangle').hide();
    // });
    // if ($(window).height() <= 920) {
    //     $('.mob-menu li a span').hide();
    //     $('.mob-menu .social').css('margin', '15px 0');
    //     $('.site-main .mob-menu').css('width', '100px');
    //     $(".mob-menu .logo-mob img").attr("src","/wp-content/themes/cleversolution/images/mob-menu/mini-logo.png");
    //     $('.menu-btn-block').css('width', '100px');
    // }

});
