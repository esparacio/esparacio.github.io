// Hide Navbar Javascript
//
//
$(document).ready(function() {

  var myWindow = $(window);
  var myPosition = myWindow.scrollTop();
  var up = false;
  var newScroll;

  myWindow.scroll(function () {
      newScroll = myWindow.scrollTop();  
      if (newScroll > myPosition && !up) {
          $('.navbar').stop().fadeOut();
          up = !up;
      } 
      else if(newScroll < $('.navbar').height() && up) {
          $('.navbar').stop().fadeIn();
          up = !up;
      }
  myPosition = newScroll;
  });

});
