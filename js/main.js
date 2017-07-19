
$(document).ready(function () {
	
//categories - content	
	$(".restaurant1").click(function () {
		$(".restaurantcontent").slideToggle();
	});
    
    $(".shop1").click(function () {
		$(".shopcontent").slideToggle();
	});

    $(".cafe1").click(function () {
		$(".cafecontent").slideToggle();
	});
    
    $(".education1").click(function () {
		$(".educationcontent").slideToggle();
	});
// numbers - content
    $(".counter1").click(function () {
		$(".restaurantcontent").slideToggle();
	});
    
     $(".counter2").click(function () {
		$(".shopcontent").slideToggle();
	});
    
     $(".counter3").click(function () {
		$(".cafecontent").slideToggle();
	});
    
     $(".counter4").click(function () {
		$(".educationcontent").slideToggle();
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
            
            var marker = new google.maps.Marker({
          position: myhouse,
          map: map
        });
    
    
      }