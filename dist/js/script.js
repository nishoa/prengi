$('.promo__slider').slick({
    infinite: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>',
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
  