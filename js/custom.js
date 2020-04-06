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
  $('.js-big-tabs-btn').click(function (e) {
    e.preventDefault();
    var tabName = $(this).attr('href');
    $('.js-big-tabs-btn').removeClass('tabs-btn_active');
    $(this).addClass('tabs-btn_active');
    $('.big-tabs-tab').removeClass('big-tabs-tab_active');
    $('.big-tabs-tab'+tabName).addClass('big-tabs-tab_active');
  });
//  Categories
  if($('.categories__items').length > 0){
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
  }
//  Install Banner
  $('.install-app__close').click(function () {
    $('.install-app').remove();
  });
//  Modals
  $('.js-modal').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('body').addClass('ovh');
    $('.modal').show();
    $('.modal-window').removeClass('modal-window_opened');
    $('.modal-window'+target).addClass('modal-window_opened');
  });
  $('.js-modal-close').click(function () {
    $('.modal').hide();
    $('body').removeClass('ovh');
  });
  $(document).click(function(e){
    if ($('.modal').is(e.target)){
      $('.modal').hide();
      $('body').removeClass('ovh');
    }
  });
//  Header menu
  $('.header-btn-menu').click(function (e) {
    e.preventDefault();
    $('.header-menu').toggleClass('header-menu_opened');
  });
//  Card stash meny
  $('.js-card-stash-menu').click(function () {
    $(this).toggleClass('card-stash__dd_opened');
    $(this).closest('.card').toggleClass('card_focused');
    $('.card-stash-menu').toggle();
  });
  $(document).click(function(e){
    if (!$('.card').is(e.target) && $('.card').has(e.target).length === 0){
      $('.card').removeClass('card_focused');
      $('.card-stash__dd').removeClass('card-stash__dd_opened');
      $('.card-stash-menu').hide();
    }
  });
  $('.js-card-stash-create').click(function () {
    $(this).closest('.card-stash-menu').find('.card-stash-menu__content').hide();
    $(this).closest('.card-stash-menu').find('.card-stash-create').show();
  });
//  Card options
  $('.options__dots').click(function () {
    $(this).parent().addClass('options_opened');
  });
  $('.js-opt-cancel').click(function (e) {
    e.preventDefault();
    $(this).closest('.options').removeClass('options_opened');
  });
//  Profile
  $('.js-dots-menu').click(function () {
    $(this).parent().toggleClass('dots_opened');
  });

});