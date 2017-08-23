
$(document).ready(function () {
	
//categories - content	
	$(".restaurant1").click(function () {
		$(".restaurantcontent").slideToggle();
	});

    $(".cafe1").click(function () {
		$(".cafecontent").slideToggle();
	});
    
    $(".others1").click(function () {
		$(".otherscontent").slideToggle();
	});
// numbers - content
    $(".counter1").click(function () {
		$(".restaurantcontent").slideToggle();
	});
    
     $(".counter3").click(function () {
		$(".cafecontent").slideToggle();
	});
    
     $(".counter4").click(function () {
		$(".ohterscontent").slideToggle();
	});
});


//counting numbers 
    
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});

//Google Maps

function initMap() {
        var codestreet = {lat: 51.5238594, lng: -0.0762969};
        var dishoomkings = {lat: 51.536229, lng: -0.1255803};
        var dishoomc = {lat: 51.5129948, lng: -0.139732};
        var myhouse = {lat: 51.47295219999999, lng: -0.171048};    
    
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: codestreet
        });
    
        var marker = new google.maps.Marker({
          position: codestreet,
          map: map
        });
    
         var marker = new google.maps.Marker({
          position: dishoomkings,
          map: map
        });
    
          var marker = new google.maps.Marker({
          position: dishoomc,
          map: map
        });
            
        var message = ['45 Shuttleworth road, SW11 3DH'];
    for (var i = 0; i < message.length; ++i){
          var marker = new google.maps.Marker({
          position: myhouse,
          map: map
        });
        attachmessage(marker, message[i]);
    }
}

function attachmessage(marker, message) {
  var infowindow = new google.maps.InfoWindow({
    content: message
  });

  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);
  });
}


// NAV

(function($) {          
    $(document).ready(function(){ 

        var $win = $(window);
        var winH = $win.height(); // Get the window height.
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > winH) {
                $('#navbar').fadeIn(500);
            } else {
                $('#navbar').fadeOut(500);
            }
        }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
       });

    });
})(jQuery);

//$(".navbar-toggle").click(function () {
//        $(".javanav").slideToggle();
//    });
