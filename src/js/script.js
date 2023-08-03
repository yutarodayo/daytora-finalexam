
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
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
//