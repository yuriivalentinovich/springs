(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('#phone-call').click(function(){
        if ($(this).hasClass('phone-call-active')) {
            $('#page-wrap').removeClass('page-fade');
            $('#phone-call').removeClass('phone-call-active');
            $('#one').delay(200).css({'display':'none',     'transform': 'scale(0)' });
            $('#two').delay(100).css({'display':'none',     'transform': 'scale(0)' });
            // $('#three').transition({ scale: 0 });
        }

        else {
            $('#page-wrap').addClass('page-fade');
            $('#phone-call').addClass('phone-call-active');
            $('#one').css({   'transform': 'scale(1.1)' });
            $('#two').delay(100).css({   'transform': 'scale(1.1)' });
            // $('#three').delay(200).transition({ scale: 1.1 });
        }
    })
    $('#page-wrap').click(function(){
        if ($('#page-wrap').hasClass('page-fade')) {
            $('#page-wrap').removeClass('page-fade');
            $('#phone-call').removeClass('phone-call-active');
            $('#one').delay(200).css({'display':'none',     'transform': 'scale(0)' });
            $('#two').delay(100).css({'display':'none',     'transform': 'scale(0)' });
            // $('#three').transition({ scale: 0 });
        }
    })

})(jQuery); // End of use strict
