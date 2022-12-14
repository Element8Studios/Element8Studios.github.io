(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
          if (validate(input[i]) == false) {
            showValidate(input[i]);
            check = false;
          }
        }

        return check;
    });


    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
          hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate (input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



    /*==================================================================
    [ Simple slide100 ]*/

    $('.simpleslide100').each(function() {
      var delay = 700000; //default 7000
      var speed = 100000; //default 1000
      var itemSlide = $(this).find('.simpleslide100-item');
      var nowSlide = 0;

      $(itemSlide).hide();
      $(itemSlide[nowSlide]).show();
      nowSlide++;
      if (nowSlide >= itemSlide.length) {
        nowSlide = 0;
      }

      setInterval(function() {
        $(itemSlide).fadeOut(speed);
        $(itemSlide[nowSlide]).fadeIn(speed);
        nowSlide++;
        if (nowSlide >= itemSlide.length) {
          nowSlide = 0;
        }
      }, delay);
    });

    /*==================================================================
    [ magnificPopup ]*/

    $(document).ready(function() {
      $('.popup-youtube').magnificPopup({
        mainClass: 'mfp-fade youtube-popup-custom',
        callbacks: {
          open: function() {
            var iframe = jQuery('.mfp-content iframe');
            var player = new YouTube.Player(iframe);

            player.on('ended', function() {
              jQuery.magnificPopup.close();
            });
          },
          close: function() {
            window.open('./briefing','_self');
          }
        },
        type: 'iframe'
      });
    });

    $('.button').magnificPopup({
      items: {
        src: 'https://www.youtube.com/watch?v=JEWyqlRaxrw'
      },
      type: 'iframe',
      iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '</div>',
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: '//www.youtube.com/embed/%id%?autoplay=1?showinfo=0?controls=0'
          }
        },
        srcAction: 'iframe_src',
      }
    });

    /*==================================================================
    [ magnificPopup - VIMEO ]*/

    $(document).ready(function() {
      $('.vimeo-video-welcome').magnificPopup({
        // main options
        alignTop: false,
        mainClass: 'mfp-fade vimeo-popup-custom',
        callbacks: {
          open: function() {
            var iframe = jQuery('.mfp-content iframe');
            var player = new Vimeo.Player(iframe);

            player.on('ended', function() {
              jQuery.magnificPopup.close();
            });
          },
          close: function() {
            window.open('./briefing','_self');
          }
        },

        items: [{
          src: 'https://player.vimeo.com/video/745185074',
          type: 'iframe' // this overrides default type
        }],
        gallery: {
          enabled: false
        },
        type: 'image'
      });
    });

    //     //MORE VIMEO VIDEO
    // $('.vimeo-video-more').magnificPopup({
    //       items: [
    //         {
    //           src: 'https://player.vimeo.com/video/742065435',
    //           type: 'iframe' // this overrides default type
    //         },
    //         {
    //             src: 'https://player.vimeo.com/video/742065435',
    //             type: 'iframe' // this overrides default type
    //         },],
    //         gallery: {
    //           enabled: true
    //         },
    //       type: 'image'
    //     });


    /*==================================================================
    [ PLAY / PAUSE BUTTON ]*/

    var playing = false;
      playpause.addEventListener('click', function () {
          if(!playing) {
              document.getElementById('player').play();
          }
          else {
              document.getElementById('player').pause();
          }
          playing = !playing;
      });

      var playing = false;
        justpause.addEventListener('click', function () {
            if(!playing) {
            }
            else {
                document.getElementById('player').pause();
            }
            playing = !playing;
        });

      /*==================================================================
      [ OTHER ]*/

})(jQuery);
