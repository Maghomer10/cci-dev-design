	$(document).ready(function () {  
		TailleMax = $("#banniereMasqueCOVID").attr('Taille-Max');
		Lien = $("#banniereMasqueCOVID").attr('Lien');
				$("#banniereMasqueCOVID").load("https://thierryperrotin.github.io/cci-dev-design/presentation/corona/bannieremasque.html",
				function(){
					$("#MasqueCOVID").css("max-width", TailleMax);
					$("#MasqueCOVID").attr("href", Lien);
				});
	});