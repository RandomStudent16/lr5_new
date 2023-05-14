var jquery = require("jquery");
window.$ = window.jQuery = jquery;
import 'bootstrap/dist/css/bootstrap.css';
var $ = require('jquery');
window.$ = $;
require('bootstrap');

$(document).ready(function() {
    // не работает правая
    $('.right').click(function() { 
        var currentImage = $('.img.active')
        var currentImageIND = $('.img.active').index();
        var nextImageIND = currentImageIND +1; 
        var nextImg = $('.img').eq(nextImageIND);
        
        currentImage.fadeOut(1000);
        currentImage.removeClass('active'); 

        if (nextImageIND == ($('.img:last').index() + 1)) {
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('active');
        }
        else {
            nextImg.fadeIn(1000); 
            nextImg.addClass('active');
        }
    })

    $('.left').click(function () {
        var currentImage = $('.img.active')
        var currentImageIND = $('.img.active').index();
        var LnextImageIND = currentImageIND - 1; 
        var nextImgL = $('.img').eq(LnextImageIND);

        currentImage.fadeOut(1000); 
        currentImage.removeClass('active'); 
        nextImgL.fadeIn(1000);
        nextImgL.addClass('active')
    })

    $(".open").on("click", function () {
        $(".overlay-for-modal").addClass("active");
    });

    $(".close, .popup").on("click", function () {
        $(".overlay-for-modal").removeClass("active");
    });
});