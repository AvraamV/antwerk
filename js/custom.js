jQuery(document).ready(function ($) {

  function appendLang(){
    if($(window).width() < 769){
      $('.lang-switch').appendTo('.contacts-header-wrapper .social-bar-footer');
    }
    else
    if($(window).width() > 769){
      $('.lang-switch').appendTo('.side-fixed-block');
    }
  }
  appendLang();
  $(window).resize(function(){appendLang();});

  $('.menu-list > li').hover(
    function(){
      $(this).addClass('current-li');
      $(this).find('.submenu').fadeIn();
      $('.menu-list > li').addClass('font-opacity')
    }, function(){
      $(this).find('.submenu').fadeOut();
      $(this).removeClass('current-li');
      $('.menu-list > li').removeClass('font-opacity')
    });

  $('#menu-open').on('click', function(){
    $('.main-menu-wrapper').fadeIn();
    $('body').addClass('scroll-hidden');
  });
  $('#menu-close').on('click', function(){
    $('.main-menu-wrapper').fadeOut();
    $('body').removeClass('scroll-hidden');
  });

  $('.service-overview').hover(
      function() {
        $(this).find('.service-overview-content').addClass('show-more');
      }, function() {
        $(this).find('.service-overview-content').removeClass('show-more');
      }
    );

  $('.type-weight-service-img').hover(
      function() {
        $(this).find('.type-weight-content').addClass('show-type');
      }, function() {
        $(this).find('.type-weight-content').removeClass('show-type');
      }
    );

  $('.solution-overview').hover(
      function() {
        $(this).addClass('hover-style');
      }, function() {
        $(this).removeClass('hover-style');
      }
    );

  var swiper = new Swiper('.main-slider-container', {
      pagination: {
        el: '.main-slider-progress',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.main-slider-next-btn',
        prevEl: '.main-slider-prev-btn',
      },
    });

  //Button switch (should place buttons in one place)

  $(window).scroll(function(){
    if($(this).scrollTop() >= 500){
      $('.back').css('display','block');
      $('.next').css('display','none');
    } else {
      $('.back').css('display','none');
      $('.next').css('display','block');
    } 
  });

  //Scroll to anchor(section)

  $('.next').on('click',function(event){
    event.preventDefault();
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
    var target_offset = $("#"+trgt).offset();
    var target_top = target_offset.top;
    $('html, body').animate({scrollTop:target_top}, 500);
  })

  //Scroll to top

  $('.back').on('click',function(event){
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

//
  $('.job-title').on('click',function(){
    if($(this).siblings('.job-text').css('display') == 'none'){
      $('.job-title').removeClass('job-detail');
      $('.job-text').slideUp();
      $(this).addClass('job-detail');
      $(this).siblings('.job-text').slideDown();}
    else  
    if($(this).siblings('.job-text').css('display') == 'block'){
      $('.job-title').removeClass('job-detail');
      $('.job-text').slideUp();
    }});

  $(".file-btn input[type=file]").change(function(){
     var filename = $(this).val().replace(/.*\\/, "");
     $("#filename").val(filename);
  });

  $(function(){
    $('.features-box').height($('.features-box').width()*0.825);
    $(window).resize(function(){
      $('.features-box').height($('.features-box').width()*0.825);
    });
  });

//this code must be last
  $('.slider-count').text(swiper.slides.length);
  swiper.on('slideChange', function () {
    $('.slider-current').text(swiper.activeIndex + 1);
  });  

});