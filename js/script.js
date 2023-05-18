"use strict";

// js










//jquery
$(document).ready(function(){
    $('nav ul li a').click(function(){
        if($('nav ul li a').hasClass('active')){
            $('nav ul li a').removeClass('active')
            $(this).addClass('active')
        }
    })
    
    
    

    
    $({counter: 0}).animate({counter: 232 }, {
        duration:3000,
        step:function(){
            $('.number').text(Math.ceil(this.counter))
        }
    })


    $({counter: 0}).animate({counter: 521}, {
        duration:3000,
        step:function(){
            $('.number1').text(Math.ceil(this.counter))
        }
    })



    $({counter: 0}).animate({counter: 1463}, {
        duration:3000,
        step:function(){
            $('.number2').text(Math.ceil(this.counter))
        }
    })

    $({counter: 0}).animate({counter: 24}, {
        duration:3000,
        step:function(){
            $('.number3').text(Math.ceil(this.counter))
        }
    })

    $('.img-back').hide()
    $($('.div-img')).on("click" ,'.overlay' ,function(){
        var imageUrl = $(this).siblings('img').attr('src')
        $('.img-back img').attr('src', imageUrl)
        $('nav').hide()
        $('.img-back').fadeIn(200)
    })
    $('.img-back span').click(function(){
        $('.img-back').fadeOut(200)
        $('nav').show();
    })

  

});