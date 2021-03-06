import $ from 'jquery';
import TypeIt from "typeit";
require('slick-carousel');
window.$ = window.jQuery = $;
require('jquery.counterup');
require('waypoints/lib/jquery.waypoints.min.js');
require('lightbox2/dist/js/lightbox.min.js');
$(document).ready(function() {

  $('[data-js="dropdown"]').on('click', function() {
    $(this).toggleClass('header__nav-item_open')
  })

  $('[data-modal="popup"]').on("click", function() {
    $("#modal").addClass("show").css({display: "block"});
    $(".modal-backdrop").addClass("show");
    $(document.body).addClass("modal-open");
  })

  $('[data-dismiss="modal"]').on("click", function() {
    $("#modal").removeClass("show").css({display: "none"});
    $(".modal-backdrop").removeClass("show");
    $(document.body).removeClass("modal-open");
  })

  $("#confirm").on("change", function() {
    if ($(this).is(':checked')) {
      $('[data-modal="confirm"]').prop('disabled', false);
    } else {
      $('[data-modal="confirm"]').prop('disabled', true);
    }
  })


  $('[data-js="mobile-dropdown"]').on('click', function() {
    $(this).toggleClass('header__mobile-item_open');
    const dropdown = $(this).children('.header__mobile-dropdown');

    if ($(this).hasClass('header__mobile-item_open')) {
      dropdown.css({"height": "auto", "overflow": "auto"})
    } else {
      dropdown.css({"height": "0", "overflow": "hidden"})
    }
  })

  $(window).scroll(function() {
    const scrollTop = $(window).scrollTop();
    if ( scrollTop > 200) {
      $('[data-js="header-fixed"]').addClass('header__fixed_show');
    } else {
      $('[data-js="header-fixed"]').removeClass('header__fixed_show');
    }
  });

  $('[data-js="toggle-menu"]').on('click', function() {
    $('[data-js="header-mobile"]').toggleClass('header__mobile_show');
  })

  new TypeIt('[data-js="type-intro"]', {
    strings:
    [
      "Эксковаторы", "Краны", "Автогрейдеры", "Асфальтоукладчики", "Бульдозеры",
      "трактора", "комбайны", "сеялки", "опрыскиватели", "глубокорыхлители", "автовышки", "манипуляторы",
      "экскаваторы-погрузчики", "портовая техника", "полуприцепы ТОНАР", "бурильная техника", "зерновозы КАМАЗ", "планировщики MARA"
    ],
    speed: 100,
    breakLines: false,
    autoStart: false,
    loop: true
  }).go();

  const warrantySlider = $('[data-js="warranty-carousel"]').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  });

  $(warrantySlider).on('init', function(event, slick){
    setWidthWarrantySlider();
  });

  $(warrantySlider).on('afterChange', function(event, slick, currentSlide){
    setWidthWarrantySlider();
  });

  function setWidthWarrantySlider() {
    const width = $('[data-js="warranty-carousel"] .slick-current.slick-active .warranty__typeit').width();

    $(warrantySlider).css({
      'max-width': width + 'px'
    });
  }

  $('[data-js="counter"]').counterUp({
    delay: 10,
    time: 3000,
  });

  const gallerySlider = $('[data-js="gallery-carousel"]').slick({
    centerMode: true,
    slidesToShow: 4.4,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    dots: true,
    dotsClass: 'gallery__dots',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.8
        }
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '40px',
          slidesToShow: 3.3
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
          slidesToShow: 2.2
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1.9
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1.3
        }
      }
    ]
  });

  $(function(){
    $("a.scroll-to").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
  });

});
