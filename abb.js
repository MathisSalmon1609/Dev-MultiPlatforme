jQuery(document).ready(function(){
	$.getJSON("boutique.json" , function(data){
	var items = [];
	$.each(data.boutique , function (key , val){
		items.push( "<li  id='" + key + "'>" + "<a href='Page2.html'></a>" + val.nom + "</li>");
	});
 	 $( "<ul/>", { "class": "my-categories", html: items.join( "" ) }).appendTo( "body" );

	});
});
