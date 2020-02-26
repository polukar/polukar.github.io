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

