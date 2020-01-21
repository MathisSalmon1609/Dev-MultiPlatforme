$(document).ready(function() {
	//alert(sessionStorage.currentArticle);
	var currentArticle = sessionStorage.currentArticle;
	var currentCategory = sessionStorage.currentCategory;

	var article;

	$.getJSON("boutique/" + currentCategory + "/" + currentCategory + ".json", function(data) {
		$.each(data.articles, function(key, val) {
			if(val.id == currentArticle) {
				article = val;

				$("img").attr("src","boutique/" + currentCategory + "/" + val.image);
				$("#articleTitle").html(val.nom);
				$("#articleBrand").html(val.marque);
				$("#articleDescription").html(val.detail);
				$("#articleInfo").html(val.info);
				$("#articleDelivery").html(val.livraison);

				$.each(val.tailles_modele, function(i, item) {
					var tabLine = "<th>";
					tabLine += item;
					tabLine += "</th>";
					$("#articleSizeHeader").append(tabLine);

					tabLine = "<td>";
					tabLine += val.prix[i];
					tabLine += "</td>";
					$("#articleSizeContent").append(tabLine);
				})
			}
		});
	});

	$("#articleButtonPlus").on("click", function() {
		var currentValue = parseInt($("#articleQuantity").val());
		$("#articleQuantity").val(currentValue + 1);
	});

	$("#articleButtonMinus").on("click", function() {
		var currentValue = parseInt($("#articleQuantity").val());
		if(currentValue > 0)
			$("#articleQuantity").val(currentValue - 1);
	});

	$("#articleButtonCommand").on("click", function() {
		var quantity = parseInt($("#articleQuantity").val());
		var price = parseInt(article.prix[0]);
		alert("Nom de l'article : " + article.nom + "\nPrix unitaire : " + price + "\nQuantité commandée : " + quantity + "\nPrix à payer : " + quantity*price);
	});
});