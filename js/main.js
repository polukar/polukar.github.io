$('.menu__top').on('click', function () {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    $('.menu__drop').fadeIn();
  } else {
    $(this).removeClass('active');
    $('.menu__drop').fadeOut();
  }
})


$(document).mouseup(function (e) {
  if ($(window).width() > 700) {
    var div = $(".menu");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.menu__top').removeClass('active');
      $('.menu__drop').fadeOut();
    }
  }

});


$('.checkbox.--all').on('click', function () {
  $(this).siblings().find('input').attr("checked", "checked");
})



$('.switch__up').on('click', function () {
  var val = Number($(this).siblings('.switch input').val())
  if (val != 100) {
    $(this).siblings('.switch input').val(val + 1)
  }
})


$('.switch__down').on('click', function () {
  var val = Number($(this).siblings('.switch input').val())
  if (val > 0) {
    $(this).siblings('.switch input').val(val - 1)
  }
})


$('.basket__delete').on('click', function () {
  $(this).parents('tr').remove();
})



$('.mobile__search').click(function () {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    $('.search').fadeIn();
    $('.menu').fadeOut();
  } else {
    $(this).removeClass('active');
    $('.search').fadeOut();
  }
})



$('.burger').click(function () {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    $('.menu').fadeIn();
    $('.search').fadeOut();
  } else {
    $(this).removeClass('active');
    $('.menu').fadeOut();
  }
})