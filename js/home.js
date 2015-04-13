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

	this.getJson = function() {
		var jasonData = $.getJSON("hero.json", function(data) {
			var titulo = data.titulo,
				subtitulo = data.subtitulo,
				categoria = data.categoria,
				copybutton = data.copybutton,
				url = data.url;

			console.log("content: " + titulo);
			$(".CoverImage--title").text(titulo);
			$(".CoverImage--subtitle").text(subtitulo);
			$(".tag--vod").text(categoria);
			$(".infoblock-text-calltoaction a").text(copybutton);
			$(".infoblock-text-calltoaction a").attr("href", url);
		});
	};
		
};

var jsonHero = new getJsonHero();
 	jsonHero.init();

// *********************************************  //
// VIDEOS DE YOUTUBE/VIMEO RESPONSIVE //
// *********************************************  //
$( "iframe" ).wrap( "<div class='video-post--content'></div>" );
	$(".video-post--content").fitVids();
	
}); //FIN JQUERY
