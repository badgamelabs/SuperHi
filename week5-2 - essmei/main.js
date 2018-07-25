$('.show-filters').on('click', function() {
//   when our navigation is visible we want to collapse it
//   change the text of our filters to say show filters 
//   otherwise if the nav is collapsed, expand it 
//   change the text to say "hide filters"
  
  if($('.filters-list').is(':visible')){
    $('.filters-list').slideUp()
    $('.show-filters').text('Show filters')
  }
  else{
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide filters')
  }
  
  return false 
//   block the default href behavior of jumping to the top of the page
     })

$('.filters-list a').on('click', function() {
  var filter = $(this).attr('data-filter')
  $('.product').hide()
   $(filter).show()
  
//   first we remove all the active selected classes from our filters and then we add a class name back on to the one we just clicked on
  $('.filters-list a').removeClass('selected')
  $(this).addClass('selected')
  
  
//   hide the products
//   show the products with particular filter
  
  
  
  
  
  
  return false
//   this blocks the link from performing the default action
})









