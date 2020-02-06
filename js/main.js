var langMain = document.querySelector('.lang__main');
var langItem = [].slice.call(document.querySelectorAll('.lang__item'));

langMain.addEventListener('click', function (elem) {
  langMain.classList.add('active');
})

langItem.forEach(function (elem) {
  elem.addEventListener('click', function () {
    var txt = elem.textContent || elem.innerText;
    langMain.textContent = "";
    langMain.textContent = txt;
    langMain.classList.remove('active');
  })
});


function animateLoad() {
  var header = document.querySelector('.header');
  var main = document.querySelector('.main');
  header.classList.add('animate');
  main.classList.add('animate');
}



window.onload = function () {
  animateLoad();
  scrollPage();
}




function animatePanels(scroll) {
  if (scroll < 350) {
    document.querySelector('.categories').classList.add('animate')
  }
}

function animateWorks(scroll) {
  if (scroll < 350) {
    document.querySelector('.works').classList.add('animate')
  }
}

function animateAbout(scroll) {
  if (scroll < 350) {
    document.querySelector('.about').classList.add('animate')
  }
}

function animateForm(scroll) {
  if (scroll < 350) {
    document.querySelector('.form-section').classList.add('animate')
    document.querySelector('.footer').classList.add('animate')
  }
}

function scrollPage() {

  var gifs = Gifffer({
    playButtonStyles: {
      'opacity': '0',
    },
  });

  var gifTrigger = 0;

  window.addEventListener('scroll', function () {
    var scrTopGif = document.querySelector('.animateGif').getBoundingClientRect().top;
    var scrpanels = document.querySelector('.categories').getBoundingClientRect().top;
    var scrWorks = document.querySelector('.works').getBoundingClientRect().top;
    var scrAbout = document.querySelector('.about').getBoundingClientRect().top;
    var scrForm = document.querySelector('.form-section').getBoundingClientRect().top;

    if (scrTopGif < 550 && gifTrigger == 0) {
      document.querySelector('.animateGif').classList.add('active')
      gifTrigger = 1;
      gifs[0].click();
    }

    animatePanels(scrpanels);
    animateWorks(scrWorks);
    animateAbout(scrAbout);
    animateForm(scrForm);
  });

}




$('.works__slider').slick({
  dots: false,
  infinite: true,
  prevArrow: $('.prev--works'),
  nextArrow: $('.next--works'),
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        dots: false,
        infinite: true,
        prevArrow: $('.prev--works'),
        nextArrow: $('.next--works'),
        slidesToShow: 3,
        slidesToScroll: 2,
        swipeToSlide: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: false,
        infinite: true,
        prevArrow: $('.prev--works'),
        nextArrow: $('.next--works'),
        slidesToShow: 2,
        slidesToScroll: 2,
        swipeToSlide: true
      }
    }
  ]

});


