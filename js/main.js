$(function (){
    'use strict';
    
    /*adjust the slider to be equal the remain hieght */
    
    var windowH = $(window).height(),
        upperhieght = $('.upper-bar').innerHeight(),
        navHieght = $('.navbar').innerHeight();
        $('.slider .carousel-item' ).height(windowH-(upperhieght+navHieght));
        
});