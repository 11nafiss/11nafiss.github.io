$(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    autoplay: true,
    autoWidth: true,
    autoHeight: true,
    margin: 10,
    nav: true,
    navText: ["<button type='button' class='carousel_prev'><i class='bi bi-chevron-left'></i></button>", 
            "<button type='button' class='carousel_next'><i class='bi bi-chevron-right'></i></button>"],
    dots: false,
    responsive: {
    0: {
        items: 1
        },
    768: {
        items: 1,
        stagePadding: 50
        },
    },
});
