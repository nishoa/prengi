$('.promo__slider').slick({
    infinite: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/promo/arrow_left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/promo/arrow_right.svg"></button>',
    responsive: [
        {
            breakpoint: 769,
            settings: {
                arrows: false
            }
        }
      ]
});

$(document).ready(function() {
    $('.promo__burger').click(function(event) {
      $('.promo__burger,.promo__menu,.header__logo').toggleClass('active');
    });
  });

$('.presentation__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/presentation/arrow_left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/presentation/arrow_right.svg"></button>',
    infinite: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true
        }
      },
      {
        breakpoint: 577,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
})

$('.slider-dots .slider-dots__item').click(function() {
  var $this = $(this);
  $('.presentation__slider').slick('slickGoTo', $this.data('index'))
});

$('.slider-dots__item').click(function () {
  $('.active').removeClass('active');
  $(this).addClass("active")
});