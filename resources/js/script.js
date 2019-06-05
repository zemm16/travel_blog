/*global $*/

/* eslint-env jquery */


$('document').ready(function() {
    
    /* For the sticky navigation */
    $('.js--section-intro').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
}, {
        offset: '10px;'
    });
    
    /* Animations on scroll */

    $('.js--wp-1').waypoint(function () {
            $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset:'50%'

    });
    
    $('.js--wp-2').waypoint(function () {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset:'50%'

    });

/* Mobile nav */
    
     $('.js--nav-icon').click(function(){
           var nav = $('.js--main-nav');
           var icon = $('.js--nav-icon i');
           nav.slideToggle(200);
            
           if(icon.hasClass('hide')){
              icon.toggleClass('hide')
           } 
            
            
        });
function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";

for (var i = 0; i < 25; i++) {
  var width = getRandomSize(200, 400);
  var height =  getRandomSize(200, 400);
  allImages += '<img src="https://placekitten.com/'+width+'/'+height+'" alt="pretty kitty">';
}

$('#photos').append(allImages);    
    
});