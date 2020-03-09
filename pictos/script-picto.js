// Style
	
	var couleurs = {
	  "bleu": [],
	  "cyan": [],
	  "turquoise": [],
	  "vert": [],
	  "chartreuse": [],
	  "jaune": [],
	  "orange": [],
	  "rouge": [],
	  "rose": [],
	  "violet": [],
	  "brun": [],
	}
	var styleneutre = ".clair .picto-x-1, .clair .picto-x-1 path, .clair .picto-x-1 ellipse, .clair .picto-x-1 rect, .clair .picto-x-1 line, .clair .picto-x-1 rect, .clair .picto-x-1 g{fill: #6877ff;} .clair .picto-x-2, .clair .picto-x-2 path, .clair .picto-x-2 ellipse, .clair .picto-x-2 rect, .clair .picto-x-2 line, .clair .picto-x-2 rect, .clair .picto-x-2 g {fill: #0000CC !important;} .clair .picto-ligne, .clair .picto-ligne path, .clair .picto-ligne ellipse, .clair .picto-ligne rect, .clair .picto-ligne line, .clair .picto-ligne rect, .clair .picto-ligne g {fill: none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 4px;} .sombre .picto-x-1, .sombre .picto-x-1 path, .sombre .picto-x-1 ellipse, .sombre .picto-x-1 rect, .sombre .picto-x-1 line, .sombre .picto-x-1 rect, .sombre .picto-x-1 g{fill: #373CF5 !important;} .sombre .picto-x-2, .sombre .picto-x-2 path, .sombre .picto-x-2 ellipse, .sombre .picto-x-2 rect, .sombre .picto-x-2 line, .sombre .picto-x-2 rect, .sombre .picto-x-2 g {fill: #6877ff !important;} .sombre .picto-ligne, .sombre .picto-ligne path, .sombre .picto-ligne ellipse, .sombre .picto-ligne rect, .sombre .picto-ligne line, .sombre .picto-ligne rect, .sombre .picto-ligne g {fill: none; stroke: #222222; stroke-linecap: round; stroke-linejoin: round; stroke-width: 4px;}";
	$('head').append('<style></style>');
	$('head style').last().append(styleneutre);
	jQuery.each(couleurs, function (nom) {
	  var c = nom;
	  var cn = "." + nom;
	  var cc = ".clair." + nom;
	  var cs = ".sombre." + nom;
	  var style = cn + ' .picto-x-1, ' + cn + ' .picto-x-1 path, ' + cn + ' .picto-x-1 ellipse, ' + cn + ' .picto-x-1 rect, ' + cn + ' .picto-x-1 line, ' + cn + ' .picto-x-1 rect, ' + cn + ' .picto-x-1 g{ fill: var(--' + c + ') !important;}' + cn + ' .picto-x-2, ' + cn + ' .picto-x-2 path, ' + cn + ' .picto-x-2 ellipse, ' + cn + ' .picto-x-2 rect, ' + cn + ' .picto-x-2 line, ' + cn + ' .picto-x-2 rect, ' + cn + ' .picto-x-2 g { fill: var(--' + c + '-l1) !important;}' + cs + ' .picto-x-1, ' + cs + ' .picto-x-1 path, ' + cs + ' .picto-x-1 ellipse, ' + cs + ' .picto-x-1 rect, ' + cs + ' .picto-x-1 line, ' + cs + ' .picto-x-1 rect, ' + cs + ' .picto-x-1 g{ fill: var(--' + c + ') !important;}' + cs + ' .picto-x-2, ' + cs + ' .picto-x-2 path, ' + cs + ' .picto-x-2 ellipse, ' + cs + ' .picto-x-2 rect, ' + cs + ' .picto-x-2 line, ' + cs + ' .picto-x-2 rect, ' + cs + ' .picto-x-2 g { fill: var(--' + c + '-f1) !important;}' + cc + ' .picto-x-1, ' + cc + ' .picto-x-1 path, ' + cc + ' .picto-x-1 ellipse, ' + cc + ' .picto-x-1 rect, ' + cc + ' .picto-x-1 line, ' + cc + ' .picto-x-1 rect, ' + cc + ' .picto-x-1 g{ fill: var(--' + c + '-l1) !important;}' + cc + ' .picto-x-2, ' + cc + ' .picto-x-2 path, ' + cc + ' .picto-x-2 ellipse, ' + cc + ' .picto-x-2 rect, ' + cc + ' .picto-x-2 line, ' + cc + ' .picto-x-2 rect, ' + cc + ' .picto-x-2 g { fill: var(--' + c + '-f2) !important;} ';
	  $('head style').last().append(style);
	});

// script d'appel du picto

	$(document).ready(function () {
		$("i[picto]").each(function () {
		  var picto = $(this).attr("picto");
		  var pictoURL = "https://thierryperrotin.github.io/cci-dev-design/pictos/pictos/" + picto + ".svg";
		  $(this).load(pictoURL);
		});
	  });





// ____________________________________________________ TEST //

$(document).ready(function () {
	$("code").load("https://thierryperrotin.github.io/cci-dev-design/pictos/pictos/contrat.svg");
  });



        
  setInterval(function(){

	var string = $('code').html();
	$("#stock").text(string);
	
	var matcher = new RegExp('"', 'g');
	$('#stock').each(function () {
	  var $this = $(this);
	  if (!$this.children().length)
		 $this.text($this.text().replace(matcher, "'"));
	});
	
	var matchers = new RegExp('\n', 'g');
	$('#stock').each(function () {
	  var $this = $(this);
	  if (!$this.children().length)
		 $this.text($this.text().replace(matchers, ""));
	});
	
	var matcherss = new RegExp('\t', 'g');
	$('#stock').each(function () {
	  var $this = $(this);
	  if (!$this.children().length)
		 $this.text($this.text().replace(matcherss, ""));
	});
	
	var matchersss = new RegExp('\r', 'g');
	$('#stock').each(function () {
	  var $this = $(this);
	  if (!$this.children().length)
		 $this.text($this.text().replace(matchersss, ""));
	});
	
	var matcherssss = new RegExp('&nbsp;', 'g');
	$('#stock').each(function () {
	  var $this = $(this);
	  if (!$this.children().length)
		 $this.text($this.text().replace(matcherssss, ""));
	});
	
	
	  var srctxt = $("#stock").text();
	
	  console.log(srctxt);
	
	  var src = '<img src="data:image/svg+xml;charset=UTF-8,' + srctxt + '">';
	
	  
	  $('body').last().append(src);
	
	
	
	
	}, 2000);







// Liste Picto

	var ListePictos = {
	  "accord": [],
	  "arbre": [],
	  "bateau": [],
	  "cloud-telechargement": [],
	  "commerce": [],
	  "contrat": [],
	  "engagement": [],
	  "engrenage": [],
	  "engrenage-2": [],
	  "expertise": [],
	  "filtre": [],
	  "humains": [],
	  "ordi-portable": [],
	  "piece": [],
	  "presentation": [],
	  "securite": [],
	  "securite-1": [],
	  "securite-profil": [],
	  "sonnette": [],
	  "usine": [],
	  "virus": [],
	}






