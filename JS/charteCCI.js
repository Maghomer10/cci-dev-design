function cardCciSize(){
    $('.card-cci').each(function(){
        if($(this).width() < 400){
            $(this).addClass('card-fine');
        }
        else{
            $(this).removeClass('card-fine');
        }
    });
    return false;
    }

    $(document).ready(function(){
        $(document).ready(cardCciSize);
        $(window).resize(cardCciSize);
    });
