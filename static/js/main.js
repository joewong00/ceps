$('#owlcarousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav: true,
    navText: ["〈", "<span class='carousel-control-next-icon'></span>"],
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
})


$('#owlcarousel2').owlCarousel({
    loop:true,
    responsiveClass:true,
    margin: -10,
    nav: true,
    navText: ["←", "→"],
    dots: false,
    autoplay:true,
    autoplaySpeed: 2000,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        }
    }
});

$('#owlcarousel3').owlCarousel({
    loop:true,
    responsiveClass:true,
    margin: 0,
    nav: true,
    navText: ["←", "→"],
    dots: false,
    autoplay:true,
    autoplaySpeed: 2000,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        }
    }
});


$('.owl-nav').contents().unwrap();
