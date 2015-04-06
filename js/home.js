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
	
}); //FIN JQUERY
