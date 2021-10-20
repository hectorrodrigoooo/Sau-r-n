$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        },); //duracion del deslizamiento para arriba
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 700){ //px que tiene que desplazar el scroll para que se active
            $('.ir-arriba').slideDown(400); //duración para que se muestre el objeto
        }else{
            $('.ir-arriba').slideUp(400); //duración para que se oculte el objeto
        }
    });
});