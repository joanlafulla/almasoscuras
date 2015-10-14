$(function(){

// *********************************************  //
// HERO//
// *********************************************  //

var GetHeightHero = function () {
	var self = this;
	this.init = function (){
		self.getUnits();
		self.applyHeight();
	};

	this.getUnits = function() {
		this.myWindow = $(window);
		this.myWindow_height = this.myWindow.height();
		this.myWindow_output = Math.round(this.myWindow_height/2);
		this.myWindow_output = this.myWindow_output + 80;
	};

	this.applyHeight = function() {
		$(".CoverImage").css("height", this.myWindow_output + "px");
	};
};

 	var myHero = new GetHeightHero();
 	myHero.init();

	$(window).on("resize", function (){
 		myHero.init();
	});

var getJsonHero = function() {
	var self = this;

	this.init = function(){
		self.getJson();
	};

	this.resizeBackground = function(img_big, img_medium, img_small) {
		if (window.matchMedia( '(min-width: 479px)' ).matches && window.matchMedia( '(max-width: 798px)' ).matches) {
				$(".CoverImage").css({
				"background-image" : "url('http://www.almasoscuras.com/img/hero/"+img_medium+"')"
				});
			} else if (window.matchMedia( '(min-width: 799px)' ).matches) { 
				$(".CoverImage").css({
				"background-image" : "url('http://www.almasoscuras.com/img/hero/"+img_big+"')"
				});
		} else {
				$(".CoverImage").css({
				"background-image" : "url('http://www.almasoscuras.com/img/hero/"+img_small+"')"
				});
		}
	}

	this.getJson = function() {
		
		//var jasonData = $.getJSON("hero.json", function(data) {
		var jasonData = $.getJSON("http://www.almasoscuras.com/hero.json", function(data) {
			var titulo = data.titulo,
				subtitulo = data.subtitulo,
				categoria = data.categoria,
				copybutton = data.copybutton,
				url = data.url;
				img_big = data.img_big;
				img_medium = data.img_medium;
				img_small = data.img_small;

				self.resizeBackground(img_big, img_medium, img_small);

			$(".CoverImage--title").text(titulo);
			$(".CoverImage--subtitle").text(subtitulo);
			$("#tag_hero").text(categoria);
			if(categoria==="reseña") {
				$("#tag_hero").addClass("tag_header_criticas");
			} else {
				$("#tag_hero").addClass("tag_header_" + categoria);
			}
			$(".infoblock-text-calltoaction a").text(copybutton);
			$(".infoblock-text-calltoaction a").attr("href", url);
		});
	};
		
};

var jsonHero = new getJsonHero();
 	jsonHero.init();
 	$(window).on("resize", function (){
 		jsonHero.getJson();
	});

// *********************************************  //
// VIDEOS DE YOUTUBE/VIMEO RESPONSIVE //
// *********************************************  //
$( "iframe, object" ).wrap( "<div class='video-post--content'></div>" );
	$(".video-post--content").fitVids();
	
}); //FIN JQUERY
