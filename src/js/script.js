
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    // drawer

$(".drawer__icon").on("click", function (e) {
    e.preventDefault();
    // 上記はaタグクリックしてもリンク先に飛ばないようにする指定
  
    $(".drawer__icon").toggleClass("is-active");
    $(".drawer__icon__bar1").toggleClass("is-active");
    $(".drawer__icon__bar2").toggleClass("is-active");
    $(".drawer__icon__bar3").toggleClass("is-active");
    $(".drawer__content").toggleClass("is-active");
    $(".drawer__background").toggleClass("is-active");
  
    return false;
    // 上記はaタグクリックしてもリンク先に飛ばないようにする指定、return false;はなくても大丈夫だが古いブラウザだとこれがないとだめ
  });
  // セミコロン忘れない！

});

// swiper initialize

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.25, // 一度に表示する枚数
  breakpoints: {
    // スライドの表示枚数：500px以上の場合
    768: {
      slidesPerView: 2.5,
      spaceBetween: 40, // スライド間の距離
    },
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});
//

// qa-box
$('.qa__box__q__wrapper').on("click", function() {
  $(this).next().slideToggle();
  /* qa__box__qクラスがクリックされたら
  クリックされたクラスの、次にあたるクラスを、スライドさせて表示させるよという意味 */
  $(this).find('.qa__box__icon').toggleClass('is-open');
  
  });
  // 