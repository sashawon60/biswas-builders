$(document).ready(function () {
    var windowWidth = $(window).width();
    var window_width = $(window).width();
    var w_scroll = $(window).scrollTop();
    var get_first = $('.home-slider'),
        get_half = $(window).height() / 1.2;
    var TM = TweenMax;
    var tl = new TimelineMax();
    console.log('Designed & Developed by Dcastalia');
    $('body').prepend('<div class="Overlay"></div><div class="form-overlay"></div>');


    //------------ Light gallery
    if ($('.Light').length > 0) {
        $(".Light").lightGallery({
            selector: 'a',
            download:false
        });
    }

    //------------ Light gallery with thumbnail
    if ($('.LightThumb').length > 0) {
        $(".Light").lightGallery({
            selector: 'a',
            exThumbImage: 'data-exthumbimage'
        });
    }

    //------------ nice select
    if ($('.Select').length > 0) {
        $('.Select select').niceSelect();
    }


    //------------ tab change in mobile using nice select
    $('.TabSelect').on('change', function (e) {
        $('.TabMenus li a').eq($(this).val()).tab('show');
    });


    //------ form validation
    $('form .dynamic_submit_btn').click(function () {
        $('.form-overlay').addClass('doit');
    });

    $(document).on('click', '.form-overlay.doit,.ok-class', function () {
        $('.form-overlay.doit, .form-message-container').hide();
    });

    $('.btn , button').click(function () {
        $('.form-overlay.doit, .form-message-container').removeAttr('style');
    });

    $('.dynamic_submit_btn').on('click', function () {
        setTimeout(function () {
            $('.form-overlay.doit').hide();
        }, 15000);
    });
    //------ form validation



//-------------- animation

    // if (767 < window_width) {
        // blast init
        if ($('.textUp').length > 0) {
            $('.textUp').blast({delimiter: "character"});
        }
        if ($('.fadeRightWord').length > 0) {
            $('.fadeRightWord').blast({delimiter: "word"});
        }

        if ($('.fadeRight').length > 0) {
            $('.fadeRight').blast({
                delimiter: "character"
            });
        }

        var get_first = $('.home-slider'),
            get_half = $(window).height() / 1.1;

        $(window).scroll(function () {
            var w_scroll = $(window).scrollTop();
            if ($('.anim').length > 0) {
                $('.anim').each(function () {
                    if (w_scroll > $(this).offset().top - get_half) {
                        $(this).addClass('anim-active');
                    }
                    // if (get_first.position().top === w_scroll) {
                    //     $('.anim').removeClass('anim-active');
                    // }

                });
            }

            // concern line draw
            if ($('.asConcernGroup').length > 0) {
                $('.asConcernGroup').each(function () {
                    if (w_scroll > $(this).offset().top - get_half) {
                        $(this).addClass('active');
                    }
                });
            }
        })

    // }
    $('.anim').each(function () {
        if ($(this).visible(true)) {
            $(this).addClass('anim-active');
        }
    });





//-------------- animation end

    // sticky menu
    screenPosition = 0;
    $(window).scroll(function () {
        scrolled = $(window).scrollTop();
        if (screenPosition - scrolled > 0) {
            $(".menuBar").addClass("ShowIt");
        } else {
            $(".menuBar").removeClass("ShowIt");
        }
        screenPosition = scrolled;
    });
    var first_section = $('.menuBar').position().top + 250;
    $(window).scroll(function () {
        if ($(window).scrollTop() <= first_section) {
            $(".menuBar").removeClass("ShowIt");
        }
    });



    //============== message box start

    $(document).delegate('.msg_cont', 'click', function () {
        open_msg();
    });

    $(document).delegate('.msg_icon', 'click', function () {
        open_msg();
    });

    function open_msg() {
        $('.msg_cont_wrap').css({'width': '330px', 'height': '446px'});
        TM.to('.msg_cont', 0.2, {
            height: 580,
            width: 580,
            right: -86,
            bottom: -86,
            borderRadius: 290,
            background: 'rgba(255, 255, 255, 1)',
            onComplete: function () {

            }
        });

        TM.to('.msg_form', 0.5, {
            right: 0,
            delay: 0.2,
            onComplete: function () {
                $('.msg_cont_wrap').addClass('bx_shadow');
            }
        });

        $('.msg_cont_wrap').addClass('msg_opened');
        $('.msg_cont_wrap').removeClass('msg_closed');
    }

    $(document).delegate('.close_btn', 'click', function () {
        close_msg();

    });

    function close_msg() {
        $('.msg_cont_wrap').removeClass('bx_shadow');

        TM.to('.msg_cont', 0.2, {
            width: '50px',
            height: '50px',
            right: 35,
            bottom: 8,
            borderRadius: '100%',
            background: '#008C44',
            onComplete: function () {
                setTimeout(function () {
                    $('.msg_cont_wrap').css({'width': '120px', 'height': '120px'});

                }, 500);

            }
        });

        TM.to('.msg_form', 0.5, {
            right: -500
        });

        setTimeout(function () {
            $('.msg_cont_wrap').removeClass('msg_opened');
            $('.msg_cont_wrap').addClass('msg_closed');
        }, 500);
    }


    $('.msg_cont , .msg_icon').click(function () {
        $('.msg_cont_wrap .title').fadeIn(2000);
        $('.close_btn').fadeIn();
    })

    $('.close_btn').click(function () {
        $('.msg_cont_wrap .title,.close_btn').hide();
    })


    // line draw svg
    if ($('#LineAnim').length > 0) {
        new Vivus('LineAnim', {duration: 80});
    }



//============== message box end



    setTimeout(function () {
        $('.banner-loader').addClass('Loaded')
    }, 1000)


});//document.ready


//------------ Device Image with background image
function deviceImage() {
    // window min width 1401 -- large screen
    var window_width = $(window).width();
    if (1400 < window_width) {
        $('.modify-bg').each(function () {
            var large = $(this).attr('data-image-large');
            $(this).css('background', "url(" + large + ")");
        });
        console.log('large');
    }
    // window max-width 1400 -- standard screen
    if (1400 >= window_width && 992 <= window_width) {
        $('.modify-bg').each(function () {
            var standard = $(this).attr('data-image-standard');
            $(this).css('background', "url(" + standard + ")");
        });
        console.log('standard');
    }
    // window max-width 991 -- mobile device
    if (991 >= window_width) {
        $('.modify-bg').each(function () {
            var small = $(this).attr('data-image-small');
            $(this).css('background', "url(" + small + ")");
        });
        console.log('small');
    }
}

deviceImage();


