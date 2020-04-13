$( document ).ready(function() {
//  HEADER
  $('.header-groups__body').click(function () {
    $(this).parent().toggleClass('header-groups_opened');
  });
  $('.js-toggle-header-notif').click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('header-notifications_opened');
  });
//  Cards Layout
  if($('.grid').length > 0){
    $('.grid').imagesLoaded()
      .done( function( instance ) {
        $('.grid').masonry({
          itemSelector: '.grid-item'
        });
      });
  }
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
//Stash
  $('.js-stash-edit, .js-opt-delete').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('body').addClass('ovh');
    $('.modal').show();
    $('.modal-window').removeClass('modal-window_opened');
    $('.modal-window'+target).addClass('modal-window_opened');
  });
//  Notifications
  $('.js-notif-toggle').click(function () {
    $(this).parent().toggleClass('notifications-select_opened');
  });
  $('.js-check-all-notif').click(function () {
    var checkedStatus = $(this).find('.inp-notifications-select')[0].checked;
    $(this).closest('form').find('.inp-notifications-select').each(function () {
      $(this).prop('checked', checkedStatus);
    });
  });
//  Groups
  if($('.groups__items').length > 0){
    $('.groups__items').each(function () {
      var sliderGroup = $(this);
      sliderGroup.slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: sliderGroup.parent().find('.groups__arrow-prev'),
        nextArrow: sliderGroup.parent().find('.groups__arrow-next'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      sliderGroup.parent().find('.groups__arrow-prev').hide();
      sliderGroup.parent().find('.groups__arrow').click(function () {
        var currentSlide = sliderGroup.parent().find('.groups__items').slick('slickCurrentSlide');
        console.log(currentSlide);
        if(currentSlide > 0){
          sliderGroup.parent().find('.groups__arrow-prev').show();
        }else {
          sliderGroup.parent().find('.groups__arrow-prev').hide();
        }
      });
    });
  }


});