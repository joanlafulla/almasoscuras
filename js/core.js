$(function(){

// *********************************************  //
// UP //
// *********************************************  //
	$(window).on("scroll", function() {
		var scrollTop = $(window).scrollTop();
		var limit = $(".hero").height();
	  	if ( scrollTop > limit ) { 
	    	$("#up, #go_comments").css({
				"opacity": 1		
			});
		} else if (scrollTop < limit) {
			$("#up, #go_comments").css({
				"opacity" : 0			
			});
		}
	});

    function smk_jump_to_it( _selector, _speed ){
        _speed = parseInt(_speed, 10) === _speed ? _speed : 300;
        $( _selector ).on('click', function(event){
            event.preventDefault();
            var url = $(this).attr('href'); //cache the url.
 
            // Animate the jump
            $("html, body").animate({ 
                scrollTop: parseInt( $(url).offset().top ) - 50
            }, _speed);
        });
    }

    smk_jump_to_it( '.up_link', 500);

// *********************************************  //
// COMPONENTE ULTIMOS COMENTARIOS //
// *********************************************  //

var comments = {
			lc_count : 0,
			lc_Wrapper : $("#last-comments--wrapper"),
			lc_newer : $("#newer"),
			lc_older : $("#older"),
			lc_lastComments : $("#last-comments"),
			lc_amount_to_move__down : 0,
			lc_amount_to_move__up : 0,
			lc_count_height_item : 0,

		add_controlls : function () {
			this.lc_newer.addClass("last-comments--controllers--off");
			this.lc_newer.find("i").addClass("last-comments--controllers--off");
		},

		actual_state : function() {
			var lc_actualItems = $("#last-comments li").slice (0,4);
			var lc_height_item = 0;
			lc_actualItems.each(function(){
				lc_height_item = lc_actualItems.outerHeight();
				comments.lc_count_height_item = comments.lc_count_height_item + lc_height_item;
				});
				this.lc_Wrapper.css('height', this.lc_count_height_item);
		},

		lc_amount_to_move__down : function () {
			var lc_amount_to_move__down = this.lc_count_height_item;
		},

		lc_my_top : function() {
			var lc_position = $("#last-comments").position();
			var lc_position_top = lc_position.top;
			return lc_position_top;
		},

		lc_my_count_actualHeight_item : function(lc_actualItems) {
			var lc_count_actualHeight_item = 0;
			var lc_actualHeight = lc_actualItems.each(function(){
			var lc_actualHeight_item = $(this).outerHeight();
			lc_count_actualHeight_item = lc_count_actualHeight_item + lc_actualHeight_item;
			});
			return lc_count_actualHeight_item;
		},

		lc_my_count_nextHeight_item : function(lc_nextItems) {
			var lc_count_nextHeight_item = 0;
			var lc_nextHeight = lc_nextItems.each(function(){
			var lc_nextHeight_item = $(this).outerHeight();
			lc_count_nextHeight_item = lc_count_nextHeight_item + lc_nextHeight_item;
			});
			return lc_count_nextHeight_item;
		},

		lc_action_older : function(x,y,z,d) {
			var lc_actualItems = $("#last-comments li").slice (x,y),
				lc_nextItems = $("#last-comments li").slice (z,d),
				lc_position_top = this.lc_my_top(),
				lc_count_actualHeight_item = this.lc_my_count_actualHeight_item(lc_actualItems),
				lc_count_nextHeight_item = this.lc_my_count_nextHeight_item(lc_nextItems) - 10;

			this.lc_Wrapper.css('height', lc_count_nextHeight_item);
			this.lc_amount_to_move__up = lc_position_top - lc_count_actualHeight_item;
			this.lc_lastComments.animate ({
				"top" : this.lc_amount_to_move__up + "px"
				}, 300);
		},

		lc_action_newer : function(x,y,z,d) {
			var lc_actualItems = $("#last-comments li").slice (x,y),
				lc_position_top = this.lc_my_top(),
				lc_count_actualHeight_item = (this.lc_my_count_actualHeight_item(lc_actualItems)) - 10;

			this.lc_Wrapper.css('height', lc_count_actualHeight_item);
			this.lc_amount_to_move__down = (lc_position_top + lc_count_actualHeight_item) + 10;
			this.lc_lastComments.animate ({
				"top" : this.lc_amount_to_move__down + "px"
				}, 300);
		},

		bindevents : function (){
			this.lc_older.on("click", function(e){
			e.preventDefault();
				switch (comments.lc_count) {
		    		case 0:
		    		$("#newer").removeClass("last-comments--controllers--off");
			        	comments.lc_action_older (0,4,4,8);
			        	comments.lc_count = comments.lc_count + 1;
			        break;
		    		
		    		case 1:
		        		comments.lc_action_older (4,8,8,12);
		        		comments.lc_count = comments.lc_count + 1;
		        	break;
		        
		        	case 2:
		        		comments.lc_action_older (8,12,12,16);
						comments.lc_count = comments.lc_count + 1;
						$("#older").addClass("last-comments--controllers--off");
						$("#older").find("i").addClass("last-comments--controllers--off");
		        	break;
		        }	
			});

			this.lc_newer.on("click", function(e){
			e.preventDefault();
				switch (comments.lc_count) {
		    		case 1:
		        		comments.lc_action_newer (0,4,4,8);
		        		comments.lc_count = comments.lc_count - 1;
						$("#newer").addClass("last-comments--controllers--off");
						$("#newer").find("i").addClass("last-comments--controllers--off");
		        	break;
		        
		        	case 2:
		        		comments.lc_action_newer (4,8,8,12);
		        		comments.lc_count = comments.lc_count - 1;
		        	break;

		        	case 3:
		        		comments.lc_action_newer (8,12,12,16);
		        		comments.lc_count = comments.lc_count - 1;
						$("#older").removeClass("last-comments--controllers--off");
		        	break;
        		}	
			});
		},

		init : function () {
			this.actual_state();
			this.add_controlls();
			this.lc_amount_to_move__down();
			this.bindevents();
		}
	};

	comments.init();

// *********************************************  //
// DESPLEGAR DADES OPTATIVES //
// *********************************************  //

$(document).on("click", ".button-secondary", function(e) {
	e.preventDefault();
	$(".dades").find(".dades-optatives").removeClass("dades-optatives--off");
	$(this).hide();
});

// *********************************************  //
// CONTAR ESTRELLAS //
// *********************************************  //

var ContarEstrellas = function () {
	var self = this;
	this.escoreStar = "";
	this.star = "";
	this.halfStar = "";
	this.scoreNumber = "";
	this.scoreStar = "";
	this.cuantasEstrellasOK = "";

	this.init = function() {
		self.setStarsVariables();
	};

	this.getStars = function(starColour) {
		self.star.css("color", starColour);
		self.halfStar.css("color", starColour);
		self.scoreNumber.css("background-color", starColour);
		self.scoreStar.css("border", "1px solid " + starColour);
	};

	this.setStarsVariables = function () {
		$(".total-score--stars").each(function(){
			self.star = $(this).find(".al-icon-star3");
			self.halfStar = $(this).find(".al-icon-star2");
			self.scoreNumber = $(this).prev(".total-score--numbers");
			self.scoreStar = $(this);
			self.cuantasEstrellasOK = $(this).find(".al-icon-star3").length;

			self.adjustStars();
		});
	};
		
	this.adjustStars = function() {
		switch (self.cuantasEstrellasOK) {
	    		case 1:
	    			this.getStars("#3498db");
		        break;

		        case 2:
	    			this.getStars("#2980b9");
		        break;

		        case 3:
	    			this.getStars("#f1c40f");
		        break;

		        case 4:
	    			this.getStars("#e67e22");
		        break;

		        case 5:
	    			this.getStars("#e74c3c");
		        break;
			}	
	};		
}

var setStars = new ContarEstrellas();
setStars.init();



// *********************************************  //
// GENERADOR DEL RATE                             //
// *********************************************  //
var rateWrappers = $(".rating");
$.each(rateWrappers, function(e) {
	var rate = $(this).find("td.rate").data("rate");
	var rateRest = 5 - rate;
	for (var i = 1; i <= rate; i++) {
		var rateStarsWrapper = $(this).find("td.rate-stars");
		var iconStar = $("<i></i>").addClass("termometro--value termometro--value--" + rate).appendTo(rateStarsWrapper);
	}
	for (var x = 1; x <= rateRest; x++) {
		rateStarsWrapper = $(this).find("td.rate-stars");
		var iconWithouStar = $("<i></i>").addClass("termometro--value").appendTo(rateStarsWrapper);
	}
});

// *********************************************  //
// GENERADOR DE LAS STARS                         //
// *********************************************  //
var lastReviewsPosition = $("#last-reviews").offset();
var lastReviewsHeight = $(".last-reviews").height();
var lastReviewsY = Math.round(lastReviewsPosition.top);

var rateStars = $(".last-reviews--starts");

$(document).on("scroll", function (){

	if ($(document).scrollTop() >= (lastReviewsY - 200)) {

		$.each(rateStars, function(e) {
			var hot_bar = $(this).find("td.last-reviews--score").data("rate");
			for (var i = 1; i <= 5; i++) {
				$(this).find("span").addClass("last-reviews--" + hot_bar);
			}
			var start_item = $(this).find("td.last-reviews--scoreStar").data("rate");
	var starRest = 5 - start_item;

	for (var i = 1; i <= start_item; i++) {
		if (start_item % 1 !== 0) {
		var hasDecimals = true;
		start_item = Math.floor(start_item);	
		}
		var rateStars = $(this).find(".stars-wrapper");
		var iconStar2 = $("<i></i>").addClass("al-icon-star3").appendTo(rateStars);
		if (i==start_item) {
			if (hasDecimals) {
				var iconStar3 = $("<i></i>").addClass("al-icon-star2").appendTo(rateStars);
				hasDecimals = false;
			}

			for (var x = 1; x <= starRest; x++)	{
				var iconStar4 = $("<i></i>").addClass("al-icon-star").appendTo(rateStars);
			}
		}

		setTimeout(function(){ $(".stars-wrapper .al-icon-star, .stars-wrapper .al-icon-star2, .stars-wrapper .al-icon-star3").css('opacity','1'); },100);	
	}
		});
		$(document).off("scroll");
	}
});

// *********************************************  //
// DESPLEGAR MENÚ PRINCIPAL //
// *********************************************  //
var Desplegar = function () {
	var self = this;
	this.estadoDesplegado = false;
	this.viewportWidth = $(window).width();
	this.desplegado = $(".menuDesplegable");
	this.desplegar = function (desplegadoContent, desplegadoContentOut, desplegadoClass, data, desplegadoHeight) {
		this.desplegado.css({
			"max-height" : desplegadoHeight
  		});

  		desplegadoContent.css({
  			"display" : "block",
			"opacity" : 1
  		});

  		desplegadoContentOut.css({
  			"display" : "none"
  		});

  		this.estadoDesplegado = true;
  		$("#buscador--main").focus();
	};
	this.plegar = function (desplegadoContent, desplegadoContentOut) {
			this.desplegado.css({
				"max-height" : 0
			});

	  		desplegadoContent.css({
				"opacity" : 0
	  		});

	  		desplegadoContentOut.css({
	  			"display" : "none"
	  		});


		this.estadoDesplegado = false;
	};
	this.desplegarAction = function () {
		$("#nav-main").find("a").on("click", function () {
			var data = $(this).data("desplegar");
			switch (data) {
    			case "menu":
       			var desplegadoContent = $(".menuDesplegable--content"),
       			desplegadoContentOut = $(".searchDesplegable--content"),
       			desplegadoClass = "al-icon-menu",
       			desplegadoHeight = "999px";
       			break;
    			case "search":
       			var desplegadoContent = $(".searchDesplegable--content"),
       			desplegadoContentOut = $(".menuDesplegable--content"),
       			desplegadoClass = "al-icon-search",
       			desplegadoHeight = "300px";
       			break;
			}

			if (self.estadoDesplegado) {
				if (desplegadoContentOut.css("display") === "block") {
					desplegadoContentOut.css ({
						"display" : "none"
					});
					$(this).find("i").addClass("xClose no-before");
					$(this).css({
					"background-color" : "#5A524C"
					});
					if (data === "search") {
						$("a[data-desplegar='menu']").find("i").removeClass("xClose no-before");
						$("a[data-desplegar='menu']").data("desplegar", "menu").css({
							"background-color" : "transparent"
						});
					 } else if (data === "menu") {
						$("a[data-desplegar='search']").find("i").removeClass("xClose no-before");
						$("a[data-desplegar='search']").css({
							"background-color" : "transparent"
						});
					}
					self.desplegar(desplegadoContent, desplegadoContentOut, desplegadoClass, data, desplegadoHeight);
				} else {
					self.plegar(desplegadoContent, desplegadoContentOut, desplegadoClass, data);
					$(this).find("i").removeClass("xClose no-before");
					$(this).css({
						"background-color" : "transparent"
					});
				}
			}else {
				self.desplegar(desplegadoContent, desplegadoContentOut, desplegadoClass, data, desplegadoHeight);
				$(this).find("i").addClass("xClose no-before");
				$(this).css({
					"background-color" : "#5A524C"
				});
			}
		});
	};	
};

var desplegarMenu = new Desplegar();
desplegarMenu.desplegarAction();

}); //FIN JQUERY