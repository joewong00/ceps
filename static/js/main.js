$('#owl-carousel-1').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    nav: true,
    navText: ["←", "→"],
    responsive:{
        0:{
            items:1,
        },
        500:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});


$('#owl-carousel-2').owlCarousel({
    loop:true,
    responsiveClass:true,
    margin: -20,
    nav: true,
    navText: ["←", "→"],
    dots: false,
    autoplay:true,
    autoplaySpeed: 2000,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
        },
        500:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

$('#owl-carousel-3').owlCarousel({
    loop:true,
    responsiveClass:true,
    margin: -20,
    nav: true,
    navText: ["←", "→"],
    dots: false,
    autoplay:true,
    autoplaySpeed: 2000,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
        },
        500:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});


$('.owl-nav').contents().unwrap();


