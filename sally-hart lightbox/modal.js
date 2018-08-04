// if we click an image, show the lightbox
// we want to grab the image that's just been clicked and show it inside the modal.
// when we click the close button, hide the modal.
// our link doesn't follow the default href
$('.photos a').on('click', function(){
//   this keyword uses the current element that's being clicked on
  var currentImg = $(this).html()
  $('.modal-content').html(currentImg)
  $('.modal').fadeIn(500)
//   fades over the course of 500 milliseconds
  return false
})

$('.modal-close, .modal-background').on('click', function(){
$('.modal').fadeOut(500)
return false
})


