    $(document).ready(function() {
            $('a[href*="#"]:not([href="#"])').click(function(e) {
                e.preventDefault();
                var target = $(this).attr('href');
                var leSticky = $('nav').height();

                if (target.length) {    
                    $('html, body').animate({scrollTop: $(target).offset().top - leSticky}, 500, 'swing');
                }       
            });
        });