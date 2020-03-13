
    function mobileCompatible(){
        var TemplateX = 700;
        var TemplateY = 394;

        var x = document.body.offsetWidth;
        var X = x / TemplateX;
        var scaleX = 'scale(' + X + ')';

        var y = window.innerHeight;
        var Y = (x*TemplateY)/TemplateX;
        var navY = document.getElementById('pills-tab').offsetHeight;
        var ctaY = document.getElementById('telechargement').offsetHeight;
        var margeY = ctaY + navY;
        var calcY = 'calc(' + y + 'px - ' + margeY + 'px - ' + Y + 'px - 3vh)';
        var calcYfixe = 'calc(' + y + 'px - ' + margeY + 'px - ' + TemplateY + 'px - 3vh)';

        $('#screen').each(function(){
                if(x < TemplateX){
                  $(this).css( 'transform', scaleX );
                  $('#outils .tab-content').css( 'max-height', calcY );
                }
                else{
                  $(this).css( 'transform', 'scale(1)' );
                  $('#outils .tab-content').css( 'max-height', calcYfixe );
                }
        });
        return false;
    }
  
      $(document).ready(function(){
          $(document).ready(mobileCompatible);
          $(window).resize(mobileCompatible);
      });
  

      
      var shotit = function() {
          $('#screen').css( 'transform', 'scale(2)' );
          html2canvas(document.getElementById('screen'), 
                    ).then(function(canvas) {
            document.body.appendChild(canvas);
                            canvas.toBlob(function(blob) {
                              saveAs(blob, "template.png"); 
                            });
              });
          $('#screen').css( 'transform', 'scale(1)' );
          $(document).ready(mobileCompatible);
       }

       



       
// _____ Charger image  _____________________________________________________________


    
    function encodeImageFileAsURL(){

        var filesSelected = document.getElementById("inputFileToLoad").files;
        if (filesSelected.length > 0)
        {
            var fileToLoad = filesSelected[0];
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) {
                var srcData = fileLoadedEvent.target.result;
                $('#aremplacer #cursorImage').attr( 'src', srcData );
            }
            fileReader.readAsDataURL(fileToLoad);
        }
    }



// _____ Déplacer image  _____________________________________________________________

let gMouseDownX = 0;
let gMouseDownY = 0;
let gMouseDownOffsetX = 0;
let gMouseDownOffsetY = 0;

function addListeners() {
    document.getElementById('cursorImage').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp() {
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e) {
    gMouseDownX = e.clientX;
    gMouseDownY = e.clientY;

    var div = document.getElementById('cursorImage');

    //The following block gets the X offset (the difference between where it starts and where it was clicked)
    let leftPart = "";
    if(!div.style.left)
        leftPart+="0px";    //In case this was not defined as 0px explicitly.
    else
        leftPart = div.style.left;
    let leftPos = leftPart.indexOf("px");
    let leftNumString = leftPart.slice(0, leftPos); // Get the X value of the object.
    gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString,10);

    //The following block gets the Y offset (the difference between where it starts and where it was clicked)
    let topPart = "";
    if(!div.style.top)
        topPart+="0px";     //In case this was not defined as 0px explicitly.
    else
        topPart = div.style.top;
    let topPos = topPart.indexOf("px");
    let topNumString = topPart.slice(0, topPos);    // Get the Y value of the object.
    gMouseDownOffsetY = gMouseDownY - parseInt(topNumString,10);

    window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
    var div = document.getElementById('cursorImage');
    div.style.position = 'absolute';
    let topAmount = e.clientY - gMouseDownOffsetY;
    div.style.top = topAmount + 'px';
    let leftAmount = e.clientX - gMouseDownOffsetX;
    div.style.left = leftAmount + 'px';
}

addListeners();