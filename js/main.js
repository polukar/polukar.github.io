var myJellyCircle = new Jelly('.jelly-circle-canvas',
  [{
    paths: '.circle__canvas path',
    color: '#0099FF',
    fastness: 1 / 200,
    intensity: 0.95,
    imageCentroid: false
  }]);


myJellyCircle.hide({ i: 0, maxDelay: 0, animate: false })
$(window).on('load', function () {
  $('.preloader__front').addClass('active');
  $('.preloader').addClass('active');
  setTimeout(function () {
    $('.main__canvas').addClass('active');
    $('.preloader').remove();
    myJellyCircle.show({ i: 0, maxDelay: 0, animate: true })
    var k = 1;

    myInterval = setInterval(function () {
      k = k + 1;
      if (k < 121) {
        $('.main__projects-wrap span').empty().text(k + '+');
      }

    }, 10)
  }, 1700)




})



function nextSlide() {
  var index = $('.slide.active').index();
  var tabindex = index + 1;
  var lengthSumm = $('.slide').length - 1;
  var activeSlide = index + 1;
  var nextSlide = index + 2;
  var nextNextSlide = index + 3;;
  $('.slider-tab:eq(' + tabindex + ')').addClass('active').siblings().removeClass('active')
  $('.slide.active').removeClass('active').addClass('slide-left');
  if (index == lengthSumm - 2) {
    $('.slide:eq(' + activeSlide + ')').removeClass('slide-next').addClass('active');
    $('.slide:eq(' + nextSlide + ')').removeClass('slide-next-next').addClass('slide-next');
    $('.slide:eq(0)').addClass('slide-next-next')
    $('.slide:eq(1)').removeClass('slide-left');
  } else if (index == lengthSumm - 1) {
    $('.slide:eq(' + activeSlide + ')').removeClass('slide-next').addClass('active');
    $('.slide:eq(0)').removeClass('slide-next-next').addClass('slide-next');
    $('.slide:eq(1)').addClass('slide-next-next');
    $('.slide:eq(2)').removeClass('slide-left');
  } else if (index == lengthSumm) {
    $('.slide:eq(0)').removeClass('slide-next').addClass('active');
    $('.slide:eq(1)').removeClass('slide-next-next').addClass('slide-next');
    $('.slide:eq(2)').addClass('slide-next-next').next().removeClass('slide-left');
    $('.slider-tab:eq(0)').addClass('active').siblings().removeClass('active')
  } else {
    if (index == lengthSumm - 3) {
      $('.slide:eq(0)').removeClass('slide-left');
    }
    $('.slide:eq(' + activeSlide + ')').removeClass('slide-next').addClass('active');
    $('.slide:eq(' + nextSlide + ')').removeClass('slide-next-next').addClass('slide-next').next().removeClass('slide-left');
    $('.slide:eq(' + nextNextSlide + ')').addClass('slide-next-next').next().removeClass('slide-left');
  }
}


function prevSlide() {
  var index = $('.slide.active').index();
  var lengthSumm = $('.slide').length - 1;
  var tabindex = index - 1;
  var activeSlide = index - 1;
  if (index == 0) {
    $('.slide-next-next').removeClass('slide-next-next');
    $('.slide-next').removeClass('slide-next').addClass('slide-next-next')
    $('.slide.active').removeClass('active').addClass('slide-next');
    $('.slide:eq(' + lengthSumm + ')').removeClass('slide-left').addClass('active')
    $('.slider-tab:eq(' + lengthSumm + ')').addClass('active').siblings().removeClass('active')
  } else {
    $('.slide-next-next').removeClass('slide-next-next');
    $('.slide-next').removeClass('slide-next').addClass('slide-next-next')
    $('.slide.active').removeClass('active').addClass('slide-next').prev().removeClass('slide-left').addClass('active');
    $('.slider-tab:eq(' + tabindex + ')').addClass('active').siblings().removeClass('active')
  }
}

$('.slider__nav .slider__next').on('click', function () {
  nextSlide();
});

$('.slider__nav .slider__prev').on('click', function () {
  prevSlide();
});


$('.slider-tab').on('click', function () {
  if (!$(this).hasClass('active')) {
    var prevIndex = $('.slider-tab.active').index();
    var nextIndex = $(this).index();
    if (prevIndex < nextIndex) {
      var goToSlide = nextIndex - prevIndex;
      for (var i = 0; i < goToSlide; i++) {
        nextSlide();
      }
    } else {
      var goToSlide = prevIndex - nextIndex;
      for (var i = 0; i < goToSlide; i++) {
        prevSlide();
      }
    }
    $(this).addClass('active').siblings().removeClass('active');
  }
})


$('.burger').on('click', function () {
  if (!$(this).hasClass('active')) {
    $(this).removeClass('noactive').addClass('active');
    $('.popup.--menu').fadeIn();
  } else {
    $(this).removeClass('active').addClass('noactive')
    $('body').removeClass('hidden');
    $('.popup').fadeOut();
  }
})

$(".pagedown").click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $('html, body').animate({ scrollTop: destination }, 600);
  return false;
});


$('.__callback').on('click', function (e) {
  e.preventDefault();
  $('.popup.--callback').fadeIn();
  $('.burger').removeClass('noactive').addClass('active')
  $('body').addClass('hidden')
});


$('.__brif').on('click', function (e) {
  e.preventDefault();
  $('.popup.--brif').fadeIn();
  $('.burger').removeClass('noactive').addClass('active')
  $('body').addClass('hidden')
});

$('.work').on('click', function (e) {
  e.preventDefault();
  var index = $(this).index();
  $('.popup.--work').addClass('active');
  $('.burger').removeClass('noactive').addClass('active')
  $('body').addClass('hidden')
  console.log(index)
  $('.workslider_info').slick('slickGoTo', index);
  $('.workslider_pic').slick('slickGoTo', index);
});



$('.__menu_callback').on('click', function (e) {
  e.preventDefault();
  $('.popup.--menu').fadeOut();
  $('.popup.--callback').fadeIn();
})

$('.__menu_brif').on('click', function (e) {
  e.preventDefault();
  $('.popup.--menu').fadeOut();
  $('.popup.--brif').fadeIn();
})



$('.workslider_info').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.workslider_pic'
});

$('.workslider_pic').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.workslider_info',
  dots: false,
  prevArrow: '.workslider_info-nav .slider__prev',
  nextArrow: '.workslider_info-nav .slider__next',
});



