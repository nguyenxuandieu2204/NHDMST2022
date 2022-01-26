$(window).on('scroll', function () {
    if ($(this).scrollTop() > 70) { // Set position from top
        $('.icon-menu').addClass("color-scroll");
        $('.scroll-menu').addClass("blue-color-menu");
        $('.logo  img').attr('src', 'assets/images/logo/NHDMST-LandingPage-Logo-Header-02.png');
    }else{
        $('.icon-menu').removeClass("color-scroll");
        $('.scroll-menu').removeClass("blue-color-menu");
        $('.logo  img').attr('src', 'assets/images/logo/NHDMST-LandingPage-Logo-Header-01.png');
    }
    });