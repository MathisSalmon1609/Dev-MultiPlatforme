$(document).ready(function() {
	// Charger le fichier boutique.json
	$.getJSON("boutique/boutique.json", function(data) {
		// On vide la liste à afficher
		$("#categoryList").empty();
		// Parcourir le tableau boutique récupéré
		$.each(data.boutique, function(key, val) {
			// Créer le lien vers le détail d'une catégorie. On stocke l'id de la catégorie dans le sessionStorage pour le récupérer ensuite
			var itemDiv = "<a href=\"viewItems.html\"><div class=\"itemDisplayer\" onclick=\"sessionStorage.setItem('currentCategory', '" + val.id + "')\">";
			// Accès à l'image de la catégorie
			itemDiv += "<img src=\"boutique/images/" + val.id + ".png\" width=\"100\"/>";
			// Accès au nom de la catégorie
			itemDiv += "<span>" + val.nom + "</span>";
			// Accès au stock
			itemDiv += "<span class=\"stockDisplayer\"> (" + val.stock + ")</span>";
			itemDiv += "</div></a>";
			// Greffer à la liste, la catégorie créée
			$("#categoryList").append(itemDiv);
		})
	});
});