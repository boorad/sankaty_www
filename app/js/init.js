$(document).ready(function(){
   // cache the window object
   $window = $(window);

   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);

      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards
        var yPos = -($window.scrollTop() / $scroll.data('speed'));

        // background position
        var coords = '50% '+ yPos + 'px';

        // move the background
        $scroll.css({ backgroundPosition: coords });
      }); // end window scroll
   });  // end section function

    $('a').click(function(){
        var section =  $.attr(this, 'href').replace("#","");
        if( section == "" ) section = "home";
        $("#sgi-navbar-collapse-1 li").removeClass("active");
        $("#s_" + section).addClass("active");

        $('html, body').animate({
            scrollTop: $( "#" + section ).offset().top
        }, 500);
        return false;
    });

});

/* Create HTML5 element for IE */
document.createElement("section");

/*
*/
