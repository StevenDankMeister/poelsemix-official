function createSlideShow(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav',
    infinite: false
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    asNavFor: '.slider-for',
    centerPadding: '9px',
    focusOnSelect: true,
    infinite: false
  });
}

