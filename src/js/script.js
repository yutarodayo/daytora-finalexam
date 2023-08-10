
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

  // スムーススクロール
  jQuery('a[href^="#"]').on("click", function () {
    var header = jQuery(".header").innerHeight();
    var id = jQuery(this).attr("href");
    var position = 0;
    if (id != "#") {
      position = jQuery(id).offset().top - header;
    }
    jQuery("html,body").animate(
      {
        scrollTop: position,
      },
      200
    );
  });

  // to_top
  $(function(){
    var topBtn=$('#page_top');
    topBtn.hide();
   
    //ボタンの表示設定
    $(window).scroll(function(){
      if($(this).scrollTop()>500){
        //---- 画面を500pxスクロールしたら、ボタンを表示する
        topBtn.fadeIn();
      }else{
        //---- 画面が500pxより上なら、ボタンを表示しない
        topBtn.fadeOut();
      } 
    });
   
    //ボタンをクリックしたら、おそらく200msでスクロールして上に戻る
    topBtn.click(function(){
      $('body,html').animate({
      scrollTop: 0},200);
      return false;
    });
  });

// form 項目すべて入力でボタンON
$(document).ready(function() {
  const $submitBtn = $('#js-submit');

  function checkFormInputs() {
    if (
      $('#form #select').val() !== "" &&
      $('#form #kana').val() !== "" &&
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').prop('checked') === true
    ) {
      $submitBtn.addClass('js-active').prop('disabled', false); // enabling button
    } else {
      $submitBtn.removeClass('js-active').prop('disabled', true); // disabling button
    }
  }

  $('#form input,#form textarea,#form select').on('change input', checkFormInputs);
});
