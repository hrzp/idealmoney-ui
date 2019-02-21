var myFullpage = new fullpage('#main', {
  // verticalCentered: false,
  // slidesNavigation: true,
  navigation: true,
  scrollingSpeed: 1000,
    // scrollingSpeed: 1000,
    // scrollBar: false,
    // fadingEffect: true,
    licenseKey: 'C74E309E-891D44FF-980DCF32-4E4E704B',
    menu: '#myMenu',
    anchors: ['home', 'ourphilosophy', 'intro','etherbank', 'partners','blog-page', 'f'],
});

function changeOpacity(bl, wh) {
  $(".main-logo-bl").css("opacity", bl);
  $(".main-logo-wh").css("opacity", wh);
  if (bl == 1) {
    $(".main-logo-bl").css("visibility", "visible");
    $(".main-logo-wh").css("visibility", "hidden");
  }
  else {
    $(".main-logo-bl").css("visibility", "hidden");
    $(".main-logo-wh").css("visibility", "visible");
  }
}


function checkHash() {
  let url = window.location.hash;
  if ( url == "#home") {
   $(".site-header").removeClass('scrolled');
   $(".main_logo").removeClass('main_logo_visible');
   $(".header").css("background-color", "");
   changeOpacity(1, 0);
   // $(".main_logo img").attr('src','asset/image/logo.png');
  }
  else if (url == "#etherbank") {
   $(".header .menu-item a").css("color", "white");
   $(".main_logo").css("color", "white");
   changeOpacity(0, 1);
   // $(".main_logo img").attr('src','asset/image/logo-wh.png');
  }
  else if (url == "#f") {
    changeOpacity(1, 0);
    // $(".main_logo img").attr('src','asset/image/logo.png');
    $(".header").css("background-color", "rgba(255, 255, 255, 0.94)");
  }
  else if (url == "") {
    changeOpacity(1, 0);
    // $(".main_logo img").attr('src','asset/image/logo.png');
  }
  else {
    changeOpacity(1, 0);
    // $(".main_logo img").attr('src','asset/image/logo.png');
    $(".main_logo").addClass('main_logo_visible');
    $(".site-header").addClass('scrolled');
    $(".header .menu-item a").css("color", "#111A44");
    $(".main_logo").css("color", "#2e3666");
    $(".header").css("background-color", "");
  }
}

$(document).ready(function(){
    $(window).on('hashchange', function(e){
      checkHash();
    });
    $(window).on('resize', function(){
      $('.main-logo-wh').css("left", $('.main-logo-bl').position().left);
    });
    setTimeout(function(){
      checkHash();
      $('.main-logo-wh').css("left", $('.main-logo-bl').position().left);
    }, 1000);
});


$('.blog-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: true,
  mergeFit: true,
  // autoWidth: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
})
$('.team-carousel').owlCarousel({
  // loop: true,
  margin: 10,
  // nav: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
})
