$(document).ready(function() {
  $('.header').height($(window).height() * 0.8);
})

$(document).ready(function() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 400px, adds/removes solid class
    if($(this).scrollTop() > 400) {
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
  })
})
