
(function ($) {
    "use strict";

    /*============================================
    // Preloader
    ============================================*/
    if ($('.preloader').length > 0) {

        window.onload = function () {
            const preloader = document.querySelector('.preloader');
            preloader.classList.add('hidden');
        };
    }

    // header-next
    var getHeaderHeight = function () {
        var headerNext = $(".header-next");
        var header = $(".header-area");
        var headerHeight = header.height();
        headerNext.css({
            "margin-top": headerHeight + "px"
        });
    }
    getHeaderHeight();

    $(window).on('resize', function () {
        getHeaderHeight();
    });

    /*============================================
    nice select
    ============================================*/
    $(document).ready(function () {
        $('.nice-select').niceSelect();
    });

    /*============================================
    Select2
    ============================================*/
    $('.select2').select2();

    /*============================================
        Youtube popup
    ============================================*/
    $(".youtube-popup").magnificPopup({
        disableOn: 300,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    })

    /*============================================
    AOS js init
    ============================================*/
    AOS.init({
        easing: "ease",
        duration: 1200,
        once: true,
        offset: 60,
        disable: "mobile"
    });

    // =============  Dynamic Year ========= 
    if ($('.dynamic-year').length > 0) {
        const yearElement = document.querySelector('.dynamic-year');
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = currentYear;
    }

    /******************************
    Tol Tip
    ********************************/
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Go to Top
    $(window).on("scroll", function () {
        // If window scroll down .active class will added to go-top
        var goTop = $(".go-top");
        if ($(window).scrollTop() >= 200) {
            goTop.addClass("active");
        } else {
            goTop.removeClass("active")
        }
    })
    $(".go-top").on("click", function (e) {
        $("html, body").animate({
            scrollTop: 0,
        }, 0);
    });


    /*============================================
        Image to background image
    ============================================*/
    function lazyLoadBackground() {
        $(".bg-img").each(function () {
            var el = $(this);
            if (el.attr("data-bg-image") && el.is(":visible") && el.offset().top < $(window).scrollTop() + $(window).height()) {
                var src = el.attr("data-bg-image");
                el.css({
                    "background-image": "url(" + src + ")",
                }).removeAttr("data-bg-image");
            }
        });
    }
    lazyLoadBackground();
    $(window).on("scroll", lazyLoadBackground);


    /*============================================
    Image to background image
    ============================================*/
    $(".img-to-bg.blur-up").parent().addClass('blur-up lazyload');

    $(".img-to-bg").each(function () {
        var el = $(this), src = el.attr("src"), parent = el.parent();

        parent.css({
            "background-image": "url(" + src + ")",
            "background-size": "cover",
            "background-position": "center",
            "display": "block"
        });

        el.hide();
    });

    /*============================================
        Lazyload image
    ============================================*/
    var lazyLoad = function () {
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 2;
        lazySizesConfig.preloadAfterLoad = true;

        var lazyContainer = $(".lazy-container");

        if (lazyContainer.children(".lazyloaded")) {
            lazyContainer.addClass("lazy-active")
        } else {
            lazyContainer.removeClass("lazy-active")
        }
    }

    $(document).ready(function () {
        lazyLoad();
    })

    /*============================================
        Data tables
    ============================================*/
    $(document).ready(function () {
        var dataTable = function () {
            var dTable = $("#myTable");
            if (dTable.length) {
                dTable.DataTable();
            }
        }
        dataTable();
    });

    // category - toggle use in sidebar
    $(document).ready(function () {
        $(".category-toggle").on("click", function (e) {
            e.preventDefault();
            $(".category-toggle").removeClass("active");
            $(this).addClass("active");
        });
    });

    /*============================================
    Toggle List
    ============================================*/
    $("[data-toggle-list]").each(function () {

        var show_more = "Show More +";
        var show_less = "Show Less -";

        var list = $(this).children();
        var listShow = $(this).data("toggle-show");
        var listShowBtn = $(this).next("[data-toggle-btn]");

        var showMoreText = show_more + '';
        var showLessText = show_less + '';

        if (list.length > listShow) {
            listShowBtn.show();
            list.slice(listShow).hide();
            listShowBtn.on("click", function () {
                var isExpanded = listShowBtn.text() === showLessText;
                list.slice(listShow).slideToggle(300);
                listShowBtn.text(isExpanded ? showMoreText : showLessText);
            });
        } else {
            listShowBtn.hide();
        }
    });

    /*--------------------------------------------------------
    /  04. password Toggle
    /--------------------------------------------------------*/
    $(".show-password-field").on("click", function () {
        var showIcon = $(this).children(".show-icon");
        var passwordField = $(this).prev("input");
        showIcon.toggleClass("show");
        if (passwordField.attr("type") == "password") {
            passwordField.attr("type", "text")
        } else {
            passwordField.attr("type", "password");
        }
    })






    /*============================================
        category Slider
    ============================================*/
    $(".category-slider").each(function () {
        var web_slider = $(this);
        var id = web_slider.attr("id");
        var sliderId = "#" + id;

        var swiper = new Swiper(sliderId, {
            spaceBetween: web_slider.data("slidespace"),
            speed: 1000,
            pagination: {
                el: sliderId + "-pagination",
                clickable: true,
            },

            navigation: {
                nextEl: sliderId + "-next",
                prevEl: sliderId + "-prev",
            },

            breakpoints: {
                0: {
                    slidesPerView: web_slider.data("xsmview"),
                },
                420: {
                    slidesPerView: web_slider.data("smview"),
                },
                768: {
                    slidesPerView: web_slider.data("mdview"),
                },
                992: {
                    slidesPerView: web_slider.data("lgview"),
                },
                1199: {
                    slidesPerView: web_slider.data("xlview"),
                }
            },
        });
    });

    /*============================================
        product Slider
    ============================================*/
    $(".product-slider").each(function () {
        var web_slider = $(this);
        var id = web_slider.attr("id");
        var sliderId = "#" + id;

        var swiper = new Swiper(sliderId, {
            spaceBetween: web_slider.data("slidespace"),
            speed: 1000,
            pagination: {
                el: sliderId + "-pagination",
                clickable: true,
            },

            navigation: {
                nextEl: sliderId + "-next",
                prevEl: sliderId + "-prev",
            },

            breakpoints: {
                0: {
                    slidesPerView: web_slider.data("xsmview"),
                },
                420: {
                    slidesPerView: web_slider.data("smview"),
                },
                768: {
                    slidesPerView: web_slider.data("mdview"),
                },
                992: {
                    slidesPerView: web_slider.data("lgview"),
                },
                1199: {
                    slidesPerView: web_slider.data("xlview"),
                }
            },
        });
    });

    /*============================================
        testiomonial vertical Sliders 
    ============================================*/

    if ($('.vertical-slider').length > 0) {
        var swiper = new Swiper(".vertical-slider", {
            direction: "vertical",
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            freeMode: true,
            speed: 10000,
            autoplay: {
                delay: 0.8,
                disableOnInteraction: false,
            },
        });
    }
    if ($('.swiper-vertical-reverse').length > 0) {
        var swiperdown1 = new Swiper(".swiper-vertical-reverse", {
            direction: "vertical",
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            freeMode: true,
            speed: 10000,
            autoplay: {
                delay: 0.8,
                disableOnInteraction: false,
                reverseDirection: true,
                pauseOnMouseEnter: true,
            },

        });
    }

    $('.progress-line').each(function () {
        var percentage = $(this).data('percentage'); // Get from data-percentage

        $(this).rProgressbar({
            percentage: percentage,
            duration: 2000
        });
    });


    // selected rating
    document.addEventListener("DOMContentLoaded", () => {
        const stars = document.querySelectorAll(".rate-stat li");
        const ratingLabel = document.getElementById("rating-label");

        const starLabels = {
            1: "Terrible",
            2: "Poor",
            3: "Good",
            4: "Very Good",
            5: "Excellent"
        };

        let selectedRating = null; // Keep track of the selected rating

        stars.forEach((star, index) => {
            const starValue = star.getAttribute("data-star");

            // Click: select rating
            star.addEventListener("click", () => {
                selectedRating = starValue;

                // Remove active class from all
                stars.forEach(s => s.classList.remove("active"));
                // Add to selected
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add("active");
                }

                ratingLabel.textContent = starLabels[starValue] || "Select a rating";
            });

            // Hover: preview rating label
            star.addEventListener("mouseenter", () => {
                ratingLabel.textContent = starLabels[starValue] || "Select a rating";
            });

            // Mouse leave: reset to selected rating
            star.addEventListener("mouseleave", () => {
                if (selectedRating) {
                    ratingLabel.textContent = starLabels[selectedRating];
                } else {
                    ratingLabel.textContent = "Select a rating";
                }
            });
        });
    });







})(jQuery);


