
$(document).ready(function() {

	$(".nav-mobile").on("click", function(){
		$(this).toggleClass("active");
    $("ul.menu").toggleClass("showed");
    $(".header-top.header-top__menu").toggleClass("activated-top");
    $(".header-top__phones-popup").removeClass("activated-phones");
  });
  
	$(".phone-ico").on("click", function(){
   
    $(".header-top__phones-popup").toggleClass("activated-phones");
    $(".header-top.header-top__menu").removeClass("activated-top");

	});

	$(".footnav-mobile").on("click", function(){
		$(this).toggleClass("active");
    $("ul.menu").toggleClass("showed");
    $(".footer__menu").toggleClass("activated-bottom");
    $(".footer__phones-popup").removeClass("activated-phones-bottom");
  });

  $(".footer__phones-ico").on("click", function(){
    $(".footer__phones-popup").toggleClass("activated-phones-bottom");
    $(".footer__menu").removeClass("activated-bottom");
  });
  



  	/**
     * slick slider1
     */

      $('.slider-top').slick({
            infinite:true,
            
        slidesToShow:1,
        slidesToScroll:1,
        arrows: true,
            dots:true});
      
        //slider2
        $('.actions__slider').slick({
            infinite:true,
            
            slidesToShow:3,
            slidesToScroll:3,
            arrows: true,
            dots:true,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                // {
                //   breakpoint: 600,
                //   settings: {
                //     slidesToShow: 2,
                //     slidesToScroll: 2
                //   }
                // },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        
        
        
        });

//slider3
            $('.news__slider').slick({
                infinite:true,
                
                slidesToShow:3,
                slidesToScroll:3,
                arrows: true,
                dots:true,
                responsive: [
                    {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                      }
                    },
                    // {
                    //   breakpoint: 600,
                    //   settings: {
                    //     slidesToShow: 2,
                    //     slidesToScroll: 2
                    //   }
                    // },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                  ]
            
            
            
            
            });

//slider4
        $('.brands__slider').slick({
            infinite:true,
            
            slidesToShow:4,
            slidesToScroll:2,
            arrows: true,
            dots:false,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                // {
                //   breakpoint: 600,
                //   settings: {
                //     slidesToShow: 2,
                //     slidesToScroll: 2
                //   }
                // },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        
        
        
        });

//slider5
          $('.review__slider').slick({
              infinite:true,
              
              slidesToShow:4,
              slidesToScroll:2,
              arrows: true,
              dots:false,
              responsive: [
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                    }
                  },
                  // {
                  //   breakpoint: 600,
                  //   settings: {
                  //     slidesToShow: 2,
                  //     slidesToScroll: 2
                  //   }
                  // },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                  // You can unslick at a given breakpoint now by adding:
                  // settings: "unslick"
                  // instead of a settings object
                ]




          });

//skillbar
            $(".skillbar").each(function(){
                $(this).find(".skillbar-bar").animate({
                  width:$(this).attr("data-percent")
                }, 8000);
              });
              
              $(".skillbar-bar-percent").each(function(){
                $(this).prop("Counter", 0). animate({
                  Counter:$(this).text()
                },{
                  duration: 8000,
                  easing:"swing",
                  step: function(now){
                  $(this).text(Math.ceil(now) +"%");
                }
                });
              });
              
//рейтинг
              $.fn.raty.defaults.path = '../libs/raty/images';
              $('.rating').raty({
                  
                score: function() {
                  return $(this).attr('data-score');
                }
              });








  	/**
     * accordion
     */

		$(function () {
			var icons = {
				header: "plus",
				activeHeader: "minus"
			};
			$("#accordion").accordion({
				icons: icons
			});
			$("#toggle").button().on("click", function () {
				if ($("#accordion").accordion("option", "icons")) {
					$("#accordion").accordion("option", "icons", null);
				} else {
					$("#accordion").accordion("option", "icons", icons);
				}
			});
		});

  	/**
     * scrollto smooth
     */
		jQuery("a.scrollTo").click(function () {
			var elementClick = jQuery(this).attr("href")
			var destination = jQuery(elementClick).offset().top +10;
			jQuery("html:not(:animated),body:not(:animated)").animate({
				scrollTop: destination
			}, 800);
			$('.collapse').collapse('hide');
			return false;
		});
		jQuery('#up').click(function () {
			$('html, body').animate({scrollTop: 0}, 500);
			return false;
		});

		   jQuery(window).scroll(function () {
			if (jQuery(document).scrollTop() > 300) {
				jQuery('#up').fadeIn('fast');
			} else {
				jQuery('#up').fadeOut('fast');
        }
    });
	 /**
     * fancybox
     */
    $('.fancy').fancybox({'padding':0,'closeBtn': true});

  	/**
     * Send email with AJAX
     */

    $('#ajax-form').submit(function () {
        var email = $(this).find("input[name='email']").val(),
            message = $(this).find("textarea.message").val();

        $.ajax({
            type: "POST",
            url: "email.php",
            data: {
                email: email,
                message: message
            },
            success: function (response) {
                // hide form's header and fields before message show
                $(".ajax-form-container .modal-header").addClass('invisible');
                $(".ajax-form-container .modal-body").addClass('invisible');

                if (response == 'OK') {
                    $('.email-container-success').removeClass('display-none');
                }
                else {
                    $('.email-container-error').removeClass('display-none');
                }

                // generate window close event
                setTimeout(function(){
                    // hide messages
                    $('.email-container-success').addClass('display-none');
                    $('.email-container-error').addClass('display-none');

                    // показываем скрытые заголовок и поля формы перед закрытием popup окна
                    $(".ajax-form-container .modal-header").removeClass('invisible');
                    $(".ajax-form-container .modal-body").removeClass('invisible');

                    // очистка полей формы
                    $('#modalConsultation.modal').find('form')[0].reset();

                    // закрываем окно модальное окно
                    $('#modalConsultation.modal').modal('hide');
                }, 4000);
            }
        });
        return false;
    });


});







 //    //filtering
	// var mixer = mixitup(".projectContainer");

 //    $(".menubar li").on("click", function(){
 //        $(".menubar li").removeClass("active");
 //        $(this).addClass("active")
 //    });

 //  $('.sl-slider').slick({ 
 //        arrows: true,
 //        slidesToShow: 3,
 //        responsive: [
 //          {
 //            breakpoint: 992,
 //            settings: {
 //              arrows: true,
 //              dots: true,
 //              slidesToShow: 2
 //            }
 //          },
 //          {
 //            breakpoint: 700,
 //            settings: {
 //              arrows: false,
 //              dots: true,
 //              slidesToShow: 1
 //            }
 //          }
 //        ]
 //      });
  
 //    // GOOGLE MAP API
 //    // if HTML DOM Element that contains the map is found...
 //  if (document.getElementById('map-canvas')){
  
 //      // Coordinates to center the map
 //      var myLatlng = new google.maps.LatLng(50.469287,30.448317);
  
 //      // Other options for the map, pretty much selfexplanatory
 //      var mapOptions = {
 //          zoom: 14,
 //          center: myLatlng,
 //          mapTypeId: google.maps.MapTypeId.ROADMAP
 //      };
      
 //      // Attach a map to the DOM Element, with the defined settings
 //      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      
 //      var marker = new google.maps.Marker({
 //            position: myLatlng,
 //            map: map
 //          });

 //  }
    

