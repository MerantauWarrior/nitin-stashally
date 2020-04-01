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
//  Install Banner
  $('.install-app__close').click(function () {
    $('.install-app').remove();
  })
});