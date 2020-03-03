function blurBody() {
  $('body').addClass('.hidden');
  $('.wrap').addClass('blur')
}


$('.__socials, .burger').on('click', function () {
  $('.popup.--socials').fadeIn();
  blurBody();
})

$('.__callback').on('click', function () {
  $('.popup.--socials').fadeOut();
  $('.popup.--callback').fadeIn();
  blurBody();
})


$('.submit').on('click', function () {
  // перенести в форму при удачной отправке
  $('.popup.--callback').fadeOut();
  $('.--goodmessage').fadeIn();
  //------
})


$('.popup__bg, .popup__close').on('click', function () {
  $('.popup').fadeOut();
  $('body').removeClass('.hidden');
  $('.wrap').removeClass('blur')
})


$(".downnpage").click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $('html, body').animate({ scrollTop: destination }, 600);
  return false;
});

var trigger = 0;

function bodyColor() {
  if (trigger == 0) {
    $('body').removeClass('color-5').addClass('color-0')
    trigger = 1;
  } else if (trigger == 1) {
    $('body').removeClass('color-0').addClass('color-1')
    trigger = 2;
  } else if (trigger == 2) {
    $('body').removeClass('color-1').addClass('color-2')
    trigger = 3;
  } else if (trigger == 3) {
    $('body').removeClass('color-2').addClass('color-3')
    trigger = 4;
  } else if (trigger == 4) {
    $('body').removeClass('color-3').addClass('color-4')
    trigger = 5;
  } else if (trigger == 5) {
    $('body').removeClass('color-4').addClass('color-5')
    trigger = 0;
  }
}

setInterval(bodyColor, 2000)


$('.events__slider').slick({
  dots: false,
  arrows: false,
})