$(document).ready(()=>{

    
    // Menu hamburger
    const hamburger = $(".hamburger");
    const navLinks = $(".nav-links");

    hamburger.click(()=>{
        navLinks.toggleClass('active');

        hamburger.toggleClass('rotate');
        hamburger.toggleClass('reverse-rotate');
    });

    $('.nav-links a').click(()=>{
        navLinks.removeClass('active');

        hamburger.toggleClass('rotate');
        hamburger.toggleClass('reverse-rotate');
    });

    $('.logo a').click(()=>{
        navLinks.removeClass('active');
    });


});