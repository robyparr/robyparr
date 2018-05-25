$(document).ready(function() {
  // Scroll to top
  $('.scroll-fab').on('click', function () {
    $('html, body').animate({scrollTop: '0px'}, 300);
  });

  // Change my name and title text colour on scroll
  // to stand out on the background.
  $(window).on('scroll', function() {
    if (this.scrollY >= 70) { 
      $(".identity h5, .identity h6").addClass('black-text');
    } else {
      $(".identity h5, .identity h6").removeClass('black-text');
    }
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-fab').show();
    } else {
      $('.scroll-fab').hide();
    }
  });
});