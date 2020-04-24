
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
                              saveAs(blob, "template.jpg"); 
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

/*!
  * jQuery UI Touch Punch 0.2.3
  *
  * Copyright 2011–2014, Dave Furfero
  * Dual licensed under the MIT or GPL Version 2 licenses.
  *
  * Depends:
  *  jquery.ui.widget.js
  *  jquery.ui.mouse.js
  */
 !function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);


 $( function() {
    $( "#cursorImage" ).draggable();
  } );

