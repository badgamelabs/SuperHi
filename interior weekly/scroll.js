// when we scroll, we want to run a function. we want to figure out how far down the page we have scrolled & we want to display the number of pixels we've scrolled inside our progress div.

$(document).on('scroll', function() {
  var pixelsFromTop = $(document).scrollTop()
  //   scrollTop method tells us how far we are from the top

  if (pixelsFromTop > 50) {
    $('header').addClass('hidden')
  } else {
    $('header').removeClass('hidden')
  }

  if (pixelsFromTop < 600) {
    $('body').css('background-color', '#fff')
  } else if (pixelsFromTop < 1400) {
    $('body').css('background-color', '#a29c97')
  } else if (pixelsFromTop < 2200) {
    $('body').css('background-color', '#d9dfe4')
  } else if (pixelsFromTop < 3000) {
    $('body').css('background-color', '#fff0f0')
  } else {
    $('body').css('background-color', '#cdccc7')
  }
  
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  var difference = documentHeight - windowHeight
  var percentage = 100 * pixelsFromTop / difference
  $('.bar').css('width', percentage + '%')
})
