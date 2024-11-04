$(document).ready(function() {
    $('#carousel-products').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        autoplay: true, 
        autoplayTimeout: 3000, 
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    // Inicialización para el carrusel de categorías
    $('#carousel-categories').owlCarousel({
        loop: false,
        margin: 15,
        nav: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('#carousel-information').owlCarousel({
        loop: false,
        margin: 15,
        nav: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});
