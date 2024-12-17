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
    // Variables
    const $carouselImages = $('.carousel-inner .image'); // All carousel images
    const $indicators = $('.carousel-indicators .indicator'); // All indicators
    const $arrowBack = $('.arrow-back'); // Back arrow button
    const $arrowForward = $('.arrow-forward'); // Forward arrow button
    let currentIndex = $carouselImages.index($('.carousel-inner .image.active')); // Initial active index
    let autoSlideInterval; // Variable to store auto slide interval
    const slideDuration = 5000; // 5 seconds

    // Function to update active image and indicator
    function updateCarousel(newIndex) {
        // Remove 'active' class from current image and indicator
        $carouselImages.eq(currentIndex).removeClass('active');
        $indicators.eq(currentIndex).removeClass('active');

        // Update current index and add 'active' class to the new image and indicator
        currentIndex = newIndex;
        $carouselImages.eq(currentIndex).addClass('active');
        $indicators.eq(currentIndex).addClass('active');
    }

    // Function to move to the next image
    function moveToNextImage() {
        const newIndex = (currentIndex + 1) % $carouselImages.length; // Loop to the first image
        updateCarousel(newIndex);
    }

    // Function to move to the previous image
    function moveToPreviousImage() {
        const newIndex = (currentIndex - 1 + $carouselImages.length) % $carouselImages.length; // Loop to the last image
        updateCarousel(newIndex);
    }

    // Function to start automatic image sliding
    function startAutoSlide() {
        autoSlideInterval = setInterval(moveToNextImage, slideDuration);
    }

    // Function to reset auto slide
    function resetAutoSlide() {
        clearInterval(autoSlideInterval); // Clear current interval
        startAutoSlide(); // Restart interval
    }

    // Event listener for forward arrow button
    $arrowForward.on('click', function () {
        moveToNextImage();
        resetAutoSlide(); // Reset auto slide timer
    });

    // Event listener for back arrow button
    $arrowBack.on('click', function () {
        moveToPreviousImage();
        resetAutoSlide(); // Reset auto slide timer
    });

    // Event listener for indicator buttons
    $indicators.on('click', function () {
        const newIndex = $indicators.index(this); // Get index of clicked indicator
        if (newIndex !== currentIndex) {
            updateCarousel(newIndex);
            resetAutoSlide(); // Reset auto slide timer
        }
    });

    // Start auto slide when the page loads
    startAutoSlide();
    
});
