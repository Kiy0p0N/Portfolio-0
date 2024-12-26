$(document).ready(function(){

    // Skill section
    const skillDescriptions = {
        html: "Eu me considero em nível avançado em HTML5. Tenho um ótimo domínio dos principais elementos e atributos, incluindo a criação de formulários, uso semântico de elementos e recursos modernos. Esse conhecimento sólido me permite criar páginas web acessíveis, estruturadas e funcionais, mostrando que estou pronto para lidar com projetos desafiadores. 🚀",

        css: "CSS3 possibilita a estilização avançada de páginas web, incluindo animações, layouts responsivos e design visual aprimorado.",

        js: "JavaScript é uma linguagem de programação essencial para criar páginas web interativas e dinâmicas.",

        node: "Node.js é um ambiente de execução para JavaScript que permite desenvolver aplicações do lado servidor.",

        express: "Express.js é um framework minimalista para Node.js, usado para construir APIs e aplicações web de forma rápida e eficiente.",

        npm: "NPM é o gerenciador de pacotes do Node.js, usado para instalar, atualizar e gerenciar dependências de projetos.",

        python: "Python é uma linguagem de programação versátil, usada em desenvolvimento web, automação, ciência de dados e muito mais.",
        
        mysql: "MySQL é um sistema de gerenciamento de banco de dados relacional, amplamente utilizado em aplicações web."
    };
    
    $(".technology img").hover(
        function () {
            const skillId = $(this).attr("id");
            const skillDescription = skillDescriptions[skillId];
            $("#skill-title").text($(this).attr("title"));
            $("#skill-text").text(skillDescription);
            $(".skill-description").fadeIn(0);
        },
        function () {
            $(".skill-description").fadeOut(0);
        }
    );


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
