$(document).ready(function(){

    // More about
    const aboutMe = $('.about-me');
    const contactMe = $('.contact');

    aboutMe.hover(()=>{
        $('.about-me .more-link').toggleClass('rectangle');
    });

    contactMe.hover(()=>{
        $('.contact .more-link').toggleClass('rectangle');
    });

    
    // alert
    $('.blocked').click(()=>{
        $('#customAlert').css('display', 'flex');
    });

    $('#closeAlert').click(()=>{
        $('#customAlert').css('display', 'none');
    });
});   
