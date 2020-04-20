	var js3Jquery = jQuery.noConflict(true);
	
	js3Jquery(document).ready(function () {  
		TailleMax = js3Jquery("#banniereMasqueCOVID").attr('Taille-Max');
		Lien = js3Jquery("#banniereMasqueCOVID").attr('Lien');
		js3Jquery("#banniereMasqueCOVID").load("https://thierryperrotin.github.io/cci-dev-design/presentation/corona/bannieremasque.html",
				function(){
					js3Jquery("#MasqueCOVID").css("max-width", TailleMax);
					js3Jquery("#MasqueCOVID").attr("href", Lien);
				});
	});