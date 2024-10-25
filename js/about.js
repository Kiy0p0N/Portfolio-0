$(document).ready(function(){

    // Skill section
    $('.skills-card').click(function(){
        // Closes any card that is already open
        $('.skills-card').not(this).find('.card-content').slideUp();

        // Toggles the content of the clicked card
        $(this).find('.card-content').slideToggle();
    });

    // Formations section
    $('.course').click(function(){
        $('.course').not(this).find('.card-content').slideUp();

        $(this).find('.card-content').slideToggle();
    });

    // Moments section
    $('.image').click(function(){
        $('.image').not(this).find('.card-content').slideUp();

        $(this).find('.card-content').slideToggle();
    });
});
