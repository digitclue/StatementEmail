$(document).ready(function() {
  // плавный скролл
  $("#menu").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  // включение меню
  $(".top-line__menu-toogle").click(function() {
    $(".sandwich").toggleClass("active");
    $(".top-line__menu ul").toggle();
  });

  $('body').on('click', '.top-line__menu ul li a', function(){
      $(".top-line__menu ul").toggle();
      $(".sandwich").toggleClass("active");

  });

  // настройка слайдера (slick)
  $('.slider-slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [{
        breakpoint: 3000,
        settings: "unslick",
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});

$(window).resize(function() {
  $('.slider-slick').slick('resize');
});