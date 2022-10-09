$('.single-item').slick({
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  dots: false,
  arrows: false
});


$('.trending_sliders').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  dots: false ,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ] 
});


$('.category .cat_inner').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  dots: false  ,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]

});