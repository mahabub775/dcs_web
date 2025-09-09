$(function () {
    "use strict";

    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    
    /*----------------------------------------*/
    /*  Search Trigger
    /*----------------------------------------*/
    $(document).on('click', '.search-trigger', function (e) {
        e.preventDefault();
        $(this).toggleClass('active-search');
        $('.search-box').toggleClass('open');
    });
    /*----------------------------------------*/
    /*  Search Trigger
    /*----------------------------------------*/


    /*----------------------------------------*/
    /*  Mobile Menu Fixer
    /*----------------------------------------*/
    $(document).on('click', '.nav-toggler', function (e) {
        e.preventDefault();
        $('.mobile-menu').toggleClass('open-menu');
    });
    $(document).on('click', '.submenu_toggler', function (e) {
        e.preventDefault();
        $(this).closest('.list-item').addClass('open');
    });
    $(document).on('click', '.submenu_collapse', function (e) {
        e.preventDefault();
        $(this).closest('.list-item').removeClass('open');
    });
    /*----------------------------------------*/
    /*  Mobile Menu Fixer
    /*----------------------------------------*/

    
    /*----------------------------------------*/
    /*  Sticky Header & Scroll to top
    /*----------------------------------------*/
    function scrollToTop() {
        var $scrollUp = $('.scrollTop'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
                $(".header").addClass("sticky");
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                    $(".header").removeClass("sticky");
                } else {
                    $scrollUp.removeClass('show');
                    $(".header").removeClass("sticky");
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({
                scrollTop: 0
            }, 100);
            evt.preventDefault();
        });
    }
    scrollToTop();
    /*----------------------------------------*/
    /*  Sticky Header & Scroll to top
    /*----------------------------------------*/


    //**  Carousel Functions Here **//
    function carousel() {
        $(".carousel").not(".slick-initialized").each(function () {
            var $this = $(this);

            var slidesPerViewXs = $this.data("xs-items");
            var slidesPerViewSm = $this.data("sm-items");
            var slidesPerViewMd = $this.data("md-items");
            var slidesPerViewLg = $this.data("lg-items");
            var slidesPerViewXl = $this.data("xl-items");
            var slidesPerView = $this.data("items");

            var slidesCenterMode = $this.data("center");
            var slidesArrows = $this.data("arrows");
            var slidesDots = $this.data("dots");
            var slidesRows = $this.data("rows");
            var slidesAutoplay = $this.data("autoplay");
            var slidesFade = $this.data("fade");
            var asNavFor = $this.data("nav-for");
            var infinite = $this.data("infinite");
            var focusOnSelect = $this.data("focus-select");
            var adaptiveHeight = $this.data("auto-height");
            var centerPadding = $this.data("center-padding");


            var vertical = $this.data("vertical");
            var verticalXs = $this.data("vertical-xs");
            var verticalSm = $this.data("vertical-sm");
            var verticalMd = $this.data("vertical-md");
            var verticalLg = $this.data("vertical-lg");
            var verticalXl = $this.data("vertical-xl");

            var timeout = $this.data("timeout");
            timeout = !timeout ? 3000 : timeout;

            slidesPerView = !slidesPerView ? 1 : slidesPerView;
            slidesPerViewXl = !slidesPerViewXl ? slidesPerView : slidesPerViewXl;
            slidesPerViewLg = !slidesPerViewLg ? slidesPerViewXl : slidesPerViewLg;
            slidesPerViewMd = !slidesPerViewMd ? slidesPerViewLg : slidesPerViewMd;
            slidesPerViewSm = !slidesPerViewSm ? slidesPerViewMd : slidesPerViewSm;
            slidesPerViewXs = !slidesPerViewXs ? slidesPerViewSm : slidesPerViewXs;


            vertical = !vertical ? false : vertical;
            verticalXl = (typeof verticalXl == 'undefined') ? vertical : verticalXl;
            verticalLg = (typeof verticalLg == 'undefined') ? verticalXl : verticalLg;
            verticalMd = (typeof verticalMd == 'undefined') ? verticalLg : verticalMd;
            verticalSm = (typeof verticalSm == 'undefined') ? verticalMd : verticalSm;
            verticalXs = (typeof verticalXs == 'undefined') ? verticalSm : verticalXs;


            slidesCenterMode = !slidesCenterMode ? false : slidesCenterMode;
            slidesArrows = !slidesArrows ? false : slidesArrows;
            slidesDots = !slidesDots ? false : slidesDots;
            slidesRows = !slidesRows ? 1 : slidesRows;
            slidesAutoplay = !slidesAutoplay ? false : slidesAutoplay;
            slidesFade = !slidesFade ? false : slidesFade;
            asNavFor = !asNavFor ? null : asNavFor;
            infinite = !infinite ? false : infinite;
            focusOnSelect = !focusOnSelect ? false : focusOnSelect;
            adaptiveHeight = !adaptiveHeight ? false : adaptiveHeight;


            var slidesRtl = ($("html").attr("dir") === "rtl" && !vertical) ? true : false;
            var slidesRtlXL = ($("html").attr("dir") === "rtl" && !verticalXl) ? true : false;
            var slidesRtlLg = ($("html").attr("dir") === "rtl" && !verticalLg) ? true : false;
            var slidesRtlMd = ($("html").attr("dir") === "rtl" && !verticalMd) ? true : false;
            var slidesRtlSm = ($("html").attr("dir") === "rtl" && !verticalSm) ? true : false;
            var slidesRtlXs = ($("html").attr("dir") === "rtl" && !verticalXs) ? true : false;

            $this.slick({
                slidesToShow: slidesPerView,
                autoplay: slidesAutoplay,
                dots: slidesDots,
                arrows: slidesArrows,
                infinite: infinite,
                vertical: vertical,
                rtl: slidesRtl,
                rows: slidesRows,
                centerPadding: centerPadding,
                centerMode: slidesCenterMode,
                fade: slidesFade,
                asNavFor: asNavFor,
                focusOnSelect: focusOnSelect,
                adaptiveHeight: adaptiveHeight,
                slidesToScroll: 1,
                autoplaySpeed: timeout,
                prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
                responsive: [{
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: slidesPerViewXl,
                            vertical: verticalXl,
                            rtl: slidesRtlXL,
                        },
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: slidesPerViewLg,
                            vertical: verticalLg,
                            rtl: slidesRtlLg,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: slidesPerViewMd,
                            vertical: verticalMd,
                            rtl: slidesRtlMd,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: slidesPerViewSm,
                            vertical: verticalSm,
                            rtl: slidesRtlSm,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: slidesPerViewXs,
                            vertical: verticalXs,
                            rtl: slidesRtlXs,
                        },
                    },
                ],
            });
        });

    }

    //**  On Click Functions Here **//
    function onClicks() {

        $(window).on("scroll", function () {
            var scroll = $(window).scrollTop();
            if (scroll < 100) {
                // $(".header .bottom").removeClass("sticky");
                $(".scrollTop").fadeOut("100");
            } else {
                // $(".header .bottom").addClass("sticky");
                $(".scrollTop").fadeIn("100");
            }
        });

        $(".scrollTop").click(function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

    }

    $(document).on('mouseenter', '.category-menu li li a', function () {
        let id = $(this).data('id');
        showCategoryProduct(id);
    });

    $(document).on('click', '.custom-menu li.dropdown li a', function (e) {
        e.preventDefault();
        let id = $(this).data('id');
        showCategoryProduct(id);
    });

    function showCategoryProduct(id) {
        $('.product').removeClass('active');
        $('#product_' + id).addClass('active');
    }

    function menuToggler() {
        $('.custom-menu li.dropdown').append("<button type='button' class='toggler'><i class='far fa-plus'></i></button>");
        $('.custom-menu li.dropdown button').click(function () {
            $(this).closest('.dropdown').siblings('.dropdown').find('> ul').slideUp('fast');
            $(this).closest('.dropdown').find('> ul').slideToggle('fast');
        });
    }

    function initWow() {
        new WOW().init();
    }

    carousel();
    onClicks();
    menuToggler();
    initWow();
});