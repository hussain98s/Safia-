// Scroll.js
// Work with Cookies

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

if(getCookie("cookiesAccepted")==""){
	$(".popup.hello_popup").show();
	setTimeout(function(){
		$(".popup.hello_popup").animate({opacity:1},300);				
	},1000);
}

$(".hello_popup .accept-btn, .close-btn").click(function(){
	setCookie("cookiesAccepted","true",365*10); 
	$(".popup.hello_popup").animate({opacity:0},300);
});

$(".hello_popup .open-cookie-popup").click(function(){
	$(".popup.hello_popup").animate({opacity:0},300);
	$(".cookie-popup-container").fadeIn(300); 		
});

$(".cookie-popup-container").find(".all-cookies, .off-cookies, .close-btn").click(function(){
	$(".cookie-popup-container").fadeOut(300);
	setCookie("cookiesAccepted","true",365*10); 
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
		if(target != ""){
			$('html, body').stop().animate({
				'scrollTop': $(target).offset().top
			}, 1000, 'swing', function () {
				window.location.hash = target;
			});
		}
	});

	// Navigation

	$(".hamburger").click(function(){
		$(".nav").addClass("opened");
	});

	$(".nav .close").click(function(){
		$(".nav").removeClass("opened");
	});

	// Popups
	var subscribePopupHidden = getCookie("subscribePopupHidden");
	$(window).scroll(function() {
		if(subscribePopupHidden!="true"){
			var hT = $('#scroll-to').offset().top,
				hH = $('#scroll-to').outerHeight(),
				wH = $(window).height(),
				wS = $(this).scrollTop();
			if (wS > (hT+hH-wH)){
				$("body.index").addClass("modal-open");		
				$(".subscribe-popup-container").fadeIn(300);
			}			
		}
	});

	$(".subscribe-popup-container .all-cookies, .off-cookies, .close-btn").click(function(){	
		$(".subscribe-popup-container").fadeOut(300); 		
		$("body.index").removeClass("modal-open"); 	
		setCookie("subscribePopupHidden","true",1);
		subscribePopupHidden = "true";
	});

	// Отправка заявки
		
	$(".ajax-form").submit(function(event){
		event.preventDefault();
	 
		var form = $(this),
			term = form.serialize(),
			url = form.attr("action");
	 
		var posting = $.post( url, term );
	 
		posting.done(function(data) {
			form.html('<div class="lead medium ajax-form-result">'+data+'</div>');
		});
	});

	// slick

	if($(".block-6 .slider-1").length>0){
		$(".block-6 .slider-1").each(function(index){
			$(this).slick({
				dots: false,
				arrows: false,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite:false,
				variableWidth:true,
				swipeToSlide:true,
			});
		});
	}

	$(".block-8 .slider-2").slick({
		dots: false,
		arrows:false,
	});
	
	$('.block-8 .slider-2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".block-8 .slider-2-menu a").removeClass("active");
		$(".block-8 .slider-2-menu a:eq("+nextSlide+")").addClass("active");  
	});

	$(".block-8 .slider-2-menu a").click(function(){
		$(".block-8 .slider-2-menu a").removeClass("active");
		$(this).addClass("active");  
		var slideNum = $(this).index();
		$('.block-8 .slider-2').slick('slickGoTo',slideNum);
	});		
	 
	if($(".slider-3").length>0){
		$(".slider-3").each(function(index){
			$(this).slick({
				dots: false,
				arrows: false,
				centerMode: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite:true,
				variableWidth:true,
				swipeToSlide:true,
				responsive: [
					{
					  breakpoint: 992,
					  settings: {
						variableWidth:false,

					  }
					}
				]				
			});
		});
	}
	
	$(".block-15 .slick-arrows .next").click(function(){
		$(".block-15 .slick-arrows .slick-arrow").removeClass("active");
		$(this).addClass("active");  
		var slideNum = $(this).index();
		$('.block-15 .slider-3').slick('slickNext',slideNum);
	});
	$(".block-15 .slick-arrows .prev").click(function(){
		$(".block-15 .slick-arrows .slick-arrow").removeClass("active");
		$(this).addClass("active");  
		var slideNum = $(this).index();
		$('.block-15 .slider-3').slick('slickPrev',slideNum);
	});	

	if($(".block-16 .slider-4").length>0){
		$(".block-16 .slider-4").each(function(index){
			$(this).slick({
				dots: false,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite:true,
				swipeToSlide:true,
			});
		});
	}

	$('.block-16 .slider-4').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".block-16 .slider-4-menu .slider-4-menu-item").removeClass("active");
		$(".block-16 .slider-4-menu .slider-4-menu-item:eq("+nextSlide+")").addClass("active");  
	});

	$(".block-16 .slider-4-menu .slider-4-menu-item").click(function(){
		$(".block-16 .slider-4-menu .slider-4-menu-item").removeClass("active");
		$(this).addClass("active");  
		var slideNum = $(this).index();
		$('.block-16 .slider-4').slick('slickGoTo',slideNum);
	});	
	
	$(".block-20 .slider-5").slick({
		dots: false,
		arrows:false,
		adaptiveHeight: true,
	});
	
	$('.block-20 .slider-5').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".block-20 .slider-5-menu .slider-5-menu-item").removeClass("active");
		$(".block-20 .slider-5-menu .slider-5-menu-item:eq("+nextSlide+")").addClass("active");  
	});

	$(".block-20 .slider-5-menu .slider-5-menu-item").click(function(){
		$(".block-20 .slider-5-menu .slider-5-menu-item").removeClass("active");
		$(this).addClass("active");   
		var slideNum = $(this).index();
		$('.block-20 .slider-5').slick('slickGoTo',slideNum);
	});		

	
	// Гугл карта
	// В HTML нужно воткнуть <script src="//maps.googleapis.com/maps/api/js?key=AIzaSyCwL1fgUC6AMz6et2ejriLjU2wVj11YAK8" type="text/javascript"></script>
	// или wp_enqueue_script("googlemap", 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCwL1fgUC6AMz6et2ejriLjU2wVj11YAK8', array("jquery"), $ver);

	if($("#map").length>0){

		var map, markers_data, markers, marker;
		markers_data = [];
		markers = [];
		
		$(".marker").each(function(){
			var coords = $(this).attr("data-coords").split(",");
			markers_data[markers_data.length] = {coordX:parseFloat(coords[0]),coordY:parseFloat(coords[1]),img:$(this).attr("data-placemark")}
		});

		// Подключаем карту
		var mapOptions = {
			zoom: 14,
			minZoom:3,
			maxZoom:18,
			mapTypeControl: false,
			streetViewControl: false,
			//fullscreenControl:false,
			//scaleControl:false,
			//zoomControl:false,
			
			center: new google.maps.LatLng(55.753282, 37.621816),
			styles: [	{"featureType":"all",		"stylers":[			{"saturation":0},			{"hue":"#e7ecf0"}		]	},	{"featureType":"road",		"stylers":[			{"saturation":-70}		]	},	{"featureType":"transit",		"stylers":[			{"visibility":"off"}		]	},	{"featureType":"poi",		"stylers":[			{"visibility":"off"}		]	},	{"featureType":"water",		"stylers":[			{"visibility":"simplified"},			{"saturation":-60}		]	}]
		};
		map = new google.maps.Map(document.getElementById('map'), mapOptions);
		
		//var bounds = new google.maps.LatLngBounds();
		
		function initMarkers(map, markers_data) {
			for(var i=0; i<markers_data.length; i++) {
				// create markers
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(markers_data[i].coordX,markers_data[i].coordY),
					map: map,
					icon: {
						url: markers_data[i].img, 
						size: new google.maps.Size(22, 33), // размер пикчи
						origin: new google.maps.Point(0,0), 
						anchor: new google.maps.Point(11, 33), // коррекция позиции: половина ширины, высота
						scaledSize: new google.maps.Size(22, 33)
					}
				});

				//bounds.extend(new google.maps.LatLng(markers_data[i].coordX,markers_data[i].coordY));
				
				markers.push(marker);		
			}
			return markers;
		}
		
		// Призываем маркеры на карту
		markers = initMarkers(map, markers_data);

		//map.fitBounds(bounds);
		
		// Приближение карты до маркера
		
		$(".js-zoom-to-marker").click(function(){
			var coords = $(this).attr("data-coords").split(",");
			map.setCenter(new google.maps.LatLng(parseFloat(coords[0]), parseFloat(coords[1])));
			map.setZoom(17);
		});

	}

});
