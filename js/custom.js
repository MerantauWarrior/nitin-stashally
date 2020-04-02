$( document ).ready(function() {
//  HEADER
  $('.header-groups__body').click(function () {
    $(this).parent().toggleClass('header-groups_opened');
  });
//  Cards Layout
  $('.grid').imagesLoaded()
    .done( function( instance ) {
      $('.grid').masonry({
        itemSelector: '.grid-item'
      });
    });
//  Big Tabs
  $('.big-tabs-btn').click(function (e) {
    e.preventDefault();
    var tabName = $(this).attr('href');
    $('.big-tabs-btn').removeClass('big-tabs-btn_active');
    $(this).addClass('big-tabs-btn_active');
    $('.big-tabs-tab').removeClass('big-tabs-tab_active');
    $('.big-tabs-tab'+tabName).addClass('big-tabs-tab_active');
  });
//  Categories
  $('.categories__items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: $('.categories__arrow-prev'),
    nextArrow: $('.categories__arrow-next')
  });
  $('.categories__arrow-prev').hide();
  $('.categories__arrow').click(function () {
    var currentSlide = $('.categories__items').slick('slickCurrentSlide');
    console.log(currentSlide);
    if(currentSlide > 0){
      $('.categories__arrow-prev').show();
    }else {
      $('.categories__arrow-prev').hide();
    }
  });
//  Install Banner
  $('.install-app__close').click(function () {
    $('.install-app').remove();
  });
//  Modals
  $('.js-modal-close').click(function () {
    $('.modal').hide();
    $('body').removeClass('ovh');
  });
//  Header menu
  $('.header-btn-menu').click(function (e) {
    e.preventDefault();
    $('.header-menu').toggleClass('header-menu_opened');
  });
});