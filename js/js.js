$(document).ready(function(){
  $('.slider').slick({
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
      autoplay: true,
      prevArrow: "<img src='img/long-left-arrow.png' class='slick-prev prev' alt='1'>",
    nextArrow: "<img src='img/long-right-arrow.png' class='slick-next next' alt='2'>",
     responsive: [
    {
      breakpoint: 1301,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true
        
      }
    },
             {
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: true
        
      }
    },
                      {
      breakpoint: 1110,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: false
        
      }
    },
    {
      breakpoint: 820,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 578,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
  });
    
});