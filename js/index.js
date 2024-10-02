$(document).ready(function(){

    // Menu hamburger
    const hamburger = $(".hamburger");
    const navLinks = $(".nav-links");

    hamburger.click(()=>{
        navLinks.toggleClass('active');

        hamburger.toggleClass('rotate');
        hamburger.toggleClass('reverse-rotate');
    })

    $('.nav-links a').click(()=>{
        navLinks.removeClass('active');

        hamburger.toggleClass('rotate');
        hamburger.toggleClass('reverse-rotate');
    })

    $('.logo a').click(()=>{
        navLinks.removeClass('active')
    })


    // More about
    const aboutMe = $('.about-me')
    const contactMe = $('.contact')

    aboutMe.hover(()=>{
        $('.about-me .more-link').toggleClass('test');
    })

    contactMe.hover(()=>{
        $('.contact .more-link').toggleClass('test');
    })

    
    // alert
    $('.blocked').click(()=>{
        $('#customAlert').css('display', 'flex')
    })

    $('#closeAlert').click(()=>{
        $('#customAlert').css('display', 'none')
    })
})   
