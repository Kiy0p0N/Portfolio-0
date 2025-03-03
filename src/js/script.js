$(document).ready(function(){
    const hamburger = $('#hamburger');
    const navMenu = $('nav ul');

    hamburger.click(function() {
        navMenu.toggleClass('active');
    });

    $('nav ul li a').click(function() {
        if ($(window).width() <= 1000) {
            navMenu.removeClass('active');
        }
    });

    $('h1 a').click(function() {
        if ($(window).width() <= 1000) {
            navMenu.removeClass('active');
        }
    });
});
