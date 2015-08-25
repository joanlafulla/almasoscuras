$(function(){

	// *********************************************  //
// UP //
// *********************************************  //
	$(window).on("scroll", function() {
		var scrollTop = $(window).scrollTop();
		var limit = $(".hero").height();
	  	if ( scrollTop > limit ) { 
	    	$("#up").css({
				"opacity": 1		
			});
		} else if (scrollTop < limit) {
			$("#up").css({
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

var GetHeightHero = function () {
	var self = this;
	this.init = function (){
		self.getUnits();
		self.applyHeight();
	};

	this.getUnits = function() {
		this.myWindow = $(window);
		this.myWindow_height = this.myWindow.height();
		this.myWindow_output = Math.round(this.myWindow_height/3);
		this.myWindow_output_ok = this.myWindow_height - this.myWindow_output;
	};

	this.applyHeight = function() {
		$(".CoverImage--who").css("height", this.myWindow_output_ok + "px");
	};
};

 	var myHero = new GetHeightHero();
 	myHero.init();

}); //FIN JQUERY