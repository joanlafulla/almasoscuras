$(function(){

// *********************************************  //
// ADD PLACEHOLDER AL COMMENTS FORM //
// *********************************************  //

function addPlaceholder (myFormItem, textPlaceholder) {
	myFormItem = myFormItem;
	$('#'+ myFormItem).attr("placeholder", textPlaceholder);
};

addPlaceholder('name', 'campo obligatorio');
addPlaceholder('email', 'no aparecerá publicado');

// *********************************************  //
// LAZY LOAD//
// *********************************************  //

jQuery("img.lazy").lazy({ 
	effect: "fadeIn",
	effectTime: 1500
});

// *********************************************  //
// VIDEOS DE YOUTUBE/VIMEO RESPONSIVE //
// *********************************************  //
$( "iframe, object" ).wrap( "<div class='video-post--content'></div>" );
	$(".video-post--content").fitVids();
	
}); //FIN JQUERY
