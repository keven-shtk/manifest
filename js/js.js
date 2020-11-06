$(document).ready(function(){
    $('.musica').fadeToggle('show');

    $('#btn-1-5em').click(function(){
        $('p').removeClass('font-2-0');
        $('p').removeClass('font-2-5');
        $('p').addClass('font-1-5');
    });
    $('#btn-2-0em').click(function(){
        $('p').removeClass('font-1-5');
        $('p').removeClass('font-2-5');
        $('p').addClass('font-2-0');
    });
    $('#btn-2-5em').click(function(){
        $('p').removeClass('font-2-5');
        $('p').removeClass('font-2-0');
        $('p').addClass('font-2-5');
    });

    $('#btn-e').click(function(){
        $('.imagem').fadeOut(2500);
        $('.menu').fadeToggle('slow');
    });
    $('#btn-m').click(function(){
        $('.imagem').fadeIn(2500);
        $('.menu').fadeToggle('slow');
    });

    $('.menu').hide();

    $('.nav-bar').click(function(){
        $('.menu').fadeToggle('slow');
    });

    $('#btn-s').click(function() {
        $('body').addClass('img2'); 
        $('p').removeClass('font-1-5');
        $('p').removeClass('font-2-0');
        $('p').removeClass('font-2-5');
        $('.nav-bar').fadeOut(100);
        $('.extra').fadeOut(100);
        $('.imagem').fadeOut(100);
        $('p').fadeOut(100);
        $('.imagem').fadeOut(2500);
        $('.musica').fadeIn(100);
  
     
        $('.imagem2').fadeIn(10000);
        $('.imagem2').fadeOut(1000);
        $('.imagem2').fadeIn(10000);
        $('.imagem2').fadeOut(1000);
        $('.imagem2').fadeIn(10000);
        $('.imagem2').fadeOut(1000);
        $('.imagem2').fadeIn(10000);
        $('.imagem2').fadeOut(1000);
        $('.imagem2').fadeIn(10000);
        $('.imagem2').fadeOut(1000);
        $('.imagem2').fadeIn(10000);
        $('.imagem2').fadeIn(10000);
        $('.imagem2').fadeOut(1000);
        $('.imagem2').fadeIn(10000);
        $('.imagem2').fadeOut(1000);
        $('.imagem2').fadeIn(10000);

        $('.imagem3').fadeIn(1000);
        $('.imagem3').fadeOut(10000);
        $('.imagem3').fadeIn(1000);
        $('.imagem3').fadeOut(10000);
        $('.imagem3').fadeIn(10000);
        $('.imagem3').fadeOut(1000);
        $('.imagem3').fadeIn(1000);
        $('.imagem3').fadeOut(10000);
        $('.imagem3').fadeIn(1000);
        $('.imagem3').fadeOut(10000);
        $('.imagem3').fadeIn(1000);
        $('.imagem3').fadeIn(1000);
        $('.imagem3').fadeOut(10000);
        $('.imagem3').fadeIn(1000);
        $('.imagem3').fadeOut(10000);
        $('.imagem3').fadeIn(10000);
        
     });
});