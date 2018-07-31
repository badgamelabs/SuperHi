// when we click the hamburger we run a function. inside the funciton we're going to add, remove the class of open. we're going to make sure our link doesn't jump the page to the top

$('.menu-toggle').on('click', function() {
$('.menu').toggleClass('open')
return false
              
})