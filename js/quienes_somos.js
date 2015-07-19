$(function(){
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

// *********************************************  //
// FULL SCREEN//
// *********************************************  //

function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".content-b").each(function(i){
        if($(this).innerHeight() <= h){
            $(this).closest(".fullscreen").addClass("not-overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();

/* resize background images */
function backgroundResize(){
	console.log("fuuuuull");
    var windowH = $(window).height();
    $(".fullscreen_background").each(function(i){
        var path = $(this);
        // variables
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
        // overflowing difference
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
        // remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if(path.hasClass("parallax")){
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        // set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        // fix when too large
        if(contW > imgW){
            imgW = contW;
            imgH = imgW / ratio;
        }
        //
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
    });
}
$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();

}); //FIN JQUERY