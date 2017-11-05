
$(document).ready(function() {

//параллакс топслайдера
 $(window).scroll(function(){
  var scr = $(this).scrollTop();
  $(".content").css({
    "transform": "translate(0%,"+ -scr/18 +"%)"
    });
    $(".catalog").css({
      "transform": "translate(0%,"+ -scr/100 +"%)"
      });

 });







	$(".nav-mobile").on("click", function(){
		$(this).toggleClass("active");
    $("ul.menu").toggleClass("showed");
    $(".header-top.header-top__menu").toggleClass("activated-top");
    $(".header-top__phones-popup").removeClass("activated-phones");
    $(".searching").removeClass("activated-search-panel");
    $(".search img").removeClass("add-action-icons");
    $(".phone-ico").removeClass("add-action-icons");
  });
  
	$(".phone-ico").on("click", function(){
    $(".searching").removeClass("activated-search-panel");
    $(".header-top__phones-popup").toggleClass("activated-phones");
    $(".header-top.header-top__menu").removeClass("activated-top");
    $(".nav-mobile").removeClass("active");
    $(this).toggleClass("add-action-icons");
    $(".search img").removeClass("add-action-icons");
  });
  
  $(".search").on("click", function(){
    
    $(".searching").toggleClass("activated-search-panel");
    $(".header-top.header-top__menu").removeClass("activated-top");
    $(".header-top__phones-popup").removeClass("activated-phones");
    $(".search img").toggleClass("add-action-icons");
    $(".phone-ico").removeClass("add-action-icons");
	});

	$(".footnav-mobile").on("click", function(){
    $(this).toggleClass("active");
    $(".footer__phones-ico").removeClass("add-action-icons");
    $("ul.menu").toggleClass("showed");
    $(".footer__menu").toggleClass("activated-bottom");
    $(".footer__phones-popup").removeClass("activated-phones-bottom");
  });

  $(".footer__phones-ico").on("click", function(){
    $(".footer__phones-popup").toggleClass("activated-phones-bottom");
    $(".footer__menu").removeClass("activated-bottom");
    $(".footer__phones-ico").toggleClass("add-action-icons");
  });
  


  	/**
     * slick slider1
     */

      $('.slider-top').slick({
        infinite:true,
        autoplay: true,
        autoplaySpeed: 10000,    
        slidesToShow:1,
        slidesToScroll:1,
        arrows: true,
        dots:true});
  


      // $("#filter-price").slider({
      //   min: 0,
      //   max: 1000,
      //   values: [0,1000],
      //   range: true
      // });
      //ползунок цен
      $( function() {
        $( "#slider-range" ).slider({
          max: 2000,
          range: true,
          values: [ 17, 2000 ],
          slide: function( event, ui ) {
            $( "#pricingpicker__slide" ).val( "$" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
          }
        });
        $( "#pricingpicker__slide" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
          " - " + $( "#slider-range" ).slider( "values", 1 ) );
      } );

      //аккордеон категорий
      var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
      };

      $( "#accordion" ).accordion(
        {
          icons: icons,
          heightStyle: "content"
        }
      );
              
//рейтинг
              $.fn.raty.defaults.path = '../libs/raty/images';
              $('.rating').raty({
                  
                score: function() {
                  return $(this).attr('data-score');
                }
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




  });