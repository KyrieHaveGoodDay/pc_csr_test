$(function () {

  // [側邊選單] 
  var $sidenav = $('.sidenav');
  // [側邊選單]--// 收合
  $sidenav.on('click', '.sidenav__btn a', function (e) {
    e.preventDefault();
    $(this).parents('.sidenav').toggleClass('sidenav--hide');
  })

  // [右邊選單]
  var $rightNav = $('.sidenav--right');
  // [右邊選單]--// 側選單是
  var $sidenavTop = $rightNav.length > 0 ? $rightNav.offset().top : 0;
  // [右邊選單]--// 手機版置頂
  function rightnavFixedTop() {
    var $windowTop = $(window).scrollTop();
    if ($windowTop > $sidenavTop) {
      $sidenav.addClass('fixed');
      $('.main').addClass('addPadding')
    }
    else {
      $sidenav.removeClass('fixed');
      $('.main').removeClass('addPadding')
    }
  }

  // [右邊GoTop]--// 滾動出現
  function goTopShow() {
    var $windowTop = $(window).scrollTop();
    $windowTop >= 100 ? $('.gotop').addClass('show') : $('.gotop').removeClass('show');
  }
  // [右邊GoTop]--// gotop
  $('.gotop').on('click', function () {
    $('html,body').animate({ scrollTop: '0px' }, 300);
  });

  // [錨點]--// 判斷滑動位置
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var headerH = $('.header').height();
    var sidenavH = $('.sidenav').height();
    var targetTop = $($(this).attr('href')).offset().top;
    var scrollPos = $(window).width() >= 768 ? targetTop : targetTop - headerH - sidenavH;
    $('html, body').stop().animate({
      scrollTop: scrollPos
    }, 300);
  });


  $(window).on('scroll', function () {
    goTopShow();
    $(window).width() < 768 && rightnavFixedTop();
  }).scroll();



});

// lesson1輪播
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 1000,
  },
  navigation: {
    nextEl: ".arrow_right",
    prevEl: ".arrow_left",
  },
});

// 偵測寬度 到1250加入輪播套件
$(document).ready(function () {

    // var wjb = screen.width;
    var wdth = $(window).width();
    // console.log(wdth);
    
    if (wdth < 1250) {
      $('.company').addClass('swiper-container lesson4_slide')
      $('.company_slide').addClass('swiper-wrapper')
      $('.company_1').addClass('swiper-slide')
      $('.company_2').addClass('swiper-slide')
      $('.company_3').addClass('swiper-slide')
      var swiper = new Swiper(".lesson4_slide", {
        autoplay: {
          delay: 2000,
        },
        breakpoints: {
          1249: {
            slidesPerView: 1.9,
            paceBetween: 20
          },
          1024: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 1,

          },
        }
      });
    }
    if (wdth > 1250) {
      $('.company').removeClass('swiper-container')
      $('.company_slide').removeClass('swiper-wrapper')
      $('.company_1').removeClass('swiper-slide')
      $('.company_2').removeClass('swiper-slide')
      $('.company_3').removeClass('swiper-slide')
    }

});

// gsap

// 腳印 從上彈跳到下
gsap.from('.lesson1_icon1', { delay: 1, duration: 2.5, ease: "bounce.out", y: -500 });
gsap.from('.lesson1_icon2', { delay: 2, duration: 2.5, ease: "bounce.out", y: -500 });
gsap.from('.lesson1_icon3', { delay: 3, duration: 2.5, ease: "bounce.out", y: -500 });
gsap.from('.lesson1_icon4', { delay: 4, duration: 2.5, ease: "bounce.out", y: -500 });
// lesson1
const t1 = gsap.timeline({ repeat: -1  });
t1.to('.lesson1_icon4', { duration: 0.5, opacity: 1 })
  .to('.lesson1_icon3', { duration: 0.5, opacity: 1 })
  .to('.lesson1_icon2', { duration: 0.5, opacity: 1 })
  .to('.lesson1_icon1', { duration: 0.5, opacity: 1 })
  .to('.lesson2_icon_foot1', { duration: 0.5, opacity: 1 })
  .to('.lesson2_icon_foot2', { duration: 0.5, opacity: 1 })
  .to('.lesson2_icon_foot3', { duration: 0.5, opacity: 1 })
  .to('.lesson2_icon_foot4', { duration: 0.5, opacity: 1 })
  .to('.lesson2_icon_foot5', { duration: 0.5, opacity: 1 })
  .to('.lesson2_icon_foot6', { duration: 0.5, opacity: 1 })
  .to('.lesson3_icon_foot3', { duration: 0.5, opacity: 1 })
  .to('.lesson3_icon_foot2', { duration: 0.5, opacity: 1 })
  .to('.lesson3_icon_foot1', { duration: 0.5, opacity: 1 });



t1.to('.lesson3_icon_foot1', { duration: 0.5, opacity: 0 })
  .to('.lesson3_icon_foot2', { duration: 0.5, opacity: 0 })
  .to('.lesson3_icon_foot3', { duration: 0.5, opacity: 0 })
  .to('.lesson2_icon_foot6', { duration: 0.5, opacity: 0 })
  .to('.lesson2_icon_foot5', { duration: 0.5, opacity: 0 })
  .to('.lesson2_icon_foot4', { duration: 0.5, opacity: 0 })
  .to('.lesson2_icon_foot3', { duration: 0.5, opacity: 0 })
  .to('.lesson2_icon_foot2', { duration: 0.5, opacity: 0 })
  .to('.lesson2_icon_foot1', { duration: 0.5, opacity: 0 })
  .to('.lesson1_icon1', { duration: 0.5, opacity: 0 })
  .to('.lesson1_icon2', { duration: 0.5, opacity: 0 })
  .to('.lesson1_icon3', { duration: 0.5, opacity: 0 })
  .to('.lesson1_icon4', { duration: 0.5, opacity: 0 });


// 標題
gsap.from('.lesson1_title_dk', { duration: 1.5, ease: "bounce.out", y: -500 });
gsap.from('.lesson1_title_mb', { duration: 1.5, ease: "bounce.out", y: -500 });

// 標題lesson2
gsap.from('.lesson2_title_dk', { duration: 0.5, y:50 , repeat:3 ,yoyo:true});

// 小橘貓的星星
const t2 = gsap.timeline({repeat:-1})
t2.to('.lesson2_icon_star', { duration: 0.1,opacity: 1})
.to('.lesson2_icon_star', { duration: 0.1,opacity: 0});

const t3 = gsap.timeline({repeat:-1})
t3.to('.lesson2_icon_star2', { duration: 0.1,opacity: 1})
.to('.lesson2_icon_star2', { duration: 0.1,opacity: 0});

// $('.see_more_link_inner').click(function(){
//   console.log('123');
// })