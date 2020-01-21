$(document).ready(function() {
	var currentCategory = sessionStorage.currentCategory;

	$("h1").append(currentCategory);

	$("#itemList").empty();

	$.getJSON("boutique/" + currentCategory + "/" + currentCategory + ".json", function(data) {
		$.each(data.articles, function(key, val) {
			var itemDiv = "<a href=\"viewArticle.html\"><div class=\"itemDisplayer\" onclick=\"sessionStorage.setItem('currentArticle', '" + val.id + "')\">";
			itemDiv += "<img src=\"boutique/" + currentCategory + "/" + val.image + "\" width=\"100\">";
			itemDiv += "<span>" + val.nom + "</span>";
			itemDiv += "</div></a>";

			$("#itemList").append(itemDiv);
		});
	});

});