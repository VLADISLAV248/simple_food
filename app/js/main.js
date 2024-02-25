$(function () {
  var mixer = mixitup('.products__list', {
    load: {
      filter: '.burgers'
    }
  });
});

$('.reviews__items').slick({
  dots: true,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2000,
  nextArrow: '<button type="button" class="slick-next"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.63518 0.450798L10.3811 8.19674C10.9822 8.80095 10.9822 9.77689 10.3811 10.3811L2.63518 18.1271C2.05581 18.6243 1.19909 18.6243 0.619717 18.1271C-0.0294237 17.5709 -0.105284 16.5918 0.450888 15.9427L7.09682 9.29666L0.45081 2.63517C-0.150285 2.03095 -0.150285 1.05502 0.45081 0.450798C1.05503 -0.150295 2.03104 -0.150295 2.63518 0.450798Z" fill="#C2C2C2"/></svg></button>',
  prevArrow: '<button type="button" class="slick-prev"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.19676 18.0492L0.450821 10.3033C-0.150273 9.69905 -0.150273 8.72311 0.450821 8.11889L8.19676 0.372949C8.77613 -0.124317 9.63285 -0.124317 10.2122 0.372949C10.8614 0.929121 10.9372 1.90818 10.3811 2.55732L3.73512 9.20334L10.3811 15.8648C10.9822 16.469 10.9822 17.445 10.3811 18.0492C9.77691 18.6503 8.8009 18.6503 8.19676 18.0492Z" fill="#C2C2C2"/></svg></button>',
  infinite: false
});


