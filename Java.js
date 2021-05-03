$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky-top");
        }else{
            $('.navbar').removeClass("sticky-top");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    $(function (){
        $(document).scroll(function () {
          var $nav = $(".navbar-fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
});