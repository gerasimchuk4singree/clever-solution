$('.one-time').slick({
    infinite: true,
    speed: 300,
    dots: false,
    slidesToShow: 5,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: true,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});
$(function(){
    $('.floating-tab-controls').on('click', function(e) {
        e.preventDefault();

        var input = $(this).attr('href'),
            hash = [
                '#smm',
                '#seo',
                '#ppc'
            ];

        var leftover = hash.filter(function(item) { return item != input; })[0];

        $('#tabList a[href="' + leftover + '"]').tab('show');
        $('#tabList a[href="' + input + '"]').tab('show');
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var id = $(e.target).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 300);

    });

    var topPos = $('.tab-content').offset().top,
        height = $('.floating').outerHeight();
    $(window).scroll(function() {
        var top = $(document).scrollTop(),
            pip = $('.form-cl-2').offset().top;
        if (top > topPos + height && top < pip - height) {
            $('#tabListHeader').addClass('fixed-header');
            $('.floating').addClass('fixed').removeAttr("style");
        } else if (top > pip - height) {
            $('#tabListHeader').removeClass('fixed-header');
            $('.floating').removeClass('fixed').css({'position':'absolute','bottom':'0'});
        } else {
            $('#tabListHeader').removeClass('fixed-header');
            $('.floating').removeClass('fixed').css({top: topPos});
        }
    });
});