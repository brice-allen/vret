(function ($) {
    "use strict";

    jQuery(document).ready(function($){

        // initializing preloader
        $(window).on('load',function(){
            var preLoder = $(".preloader");
            preLoder.fadeOut(1000);

            // banner img animation
            setInterval(function(){ 
                $(".banner .part-img").addClass("active")
            }, 500);    
        });

        // UI - banner top spacing
        var headerHeight = $('.header').outerHeight();
        $('.banner').css('padding-top', headerHeight);
        $('.banner-2').css('padding-top', headerHeight + 40);

        // ref section animated & levelling
        var $section = $('#referral');
        var $sectionAbout = $('#aboutUs');
        var $sectionCalc = $('#staticss');
        var $sectionFaq = $('#faq');
        $(window).on("scroll", function(){
            var scrollOffset = $(document).scrollTop();
            var containerOffset = $section.offset().top - window.innerHeight;
            var containerOffset2 = $sectionAbout.offset().top - window.innerHeight;
            var containerOffset3 = $sectionCalc.offset().top - window.innerHeight;
            var containerOffset4 = $sectionFaq.offset().top - window.innerHeight;
            if (scrollOffset > containerOffset) {
                
                $section.addClass('active');
                $('.single-level').each(function(){
                    var prElem = $(this).find('.percentage');
                    var prElemWidth = prElem.width();
                    var dataPercent = $(this).find('.percentage').data('percent');
                    var levelColor = $(this).data('color');
                    $(prElem).css({'margin-right': - prElemWidth / 2, 'color' : levelColor});
                    
                    $(this).find('.pr-level').css({'background-color' : levelColor});
                    $(this).find('.pr-level').css({'width' : dataPercent + '%'});
                });

            }

            if (scrollOffset > containerOffset2) {
                $sectionAbout.addClass('active');
            }

            
            if (scrollOffset > containerOffset3) {
                $sectionCalc.addClass('active');
            }

            if (scrollOffset > containerOffset4) {
                $sectionFaq.addClass('active');
            }

        });

        // fixed navbar
        $(window).on('scroll', function(){
            var headerSection = $('.header');
            var backToTopBtn = $('.back-to-top-btn a');
            
    
            if ($(window).scrollTop() > 300) {
                headerSection.addClass('header-fixed fadeInDown animated');
                $('.logo').find("img").attr("src","assets/img/logo2.png");
            } else {
                headerSection.removeClass('header-fixed fadeInDown animated');
                $('.logo').find("img").attr("src","assets/img/logo.png");
                $('.logo2').find("img").attr("src","assets/img/logo2.png");
            }

            if ($(window).scrollTop() > 1500) {
                backToTopBtn.addClass('active');
            } else {
                backToTopBtn.removeClass('active');
            }
            
        });
    });

}(jQuery));	
