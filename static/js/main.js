var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
          },
        500: {
          slidesPerView: 2,
          spaceBetween: -10,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: -10,
        },
    },
});

$('#owlcarousel').owlCarousel({
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


// $('#owlcarousel2').owlCarousel({
//     loop:true,
//     responsiveClass:true,
//     margin: -10,
//     nav: true,
//     navText: ["←", "→"],
//     dots: false,
//     autoplay:true,
//     autoplaySpeed: 2000,
//     autoplayTimeout:3000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1,
//         },
//         600:{
//             items:2,
//         },
//         1000:{
//             items:3,
//         }
//     }
// });

// $('#owlcarousel3').owlCarousel({
//     loop:true,
//     responsiveClass:true,
//     margin: 0,
//     nav: true,
//     navText: ["←", "→"],
//     dots: false,
//     autoplay:true,
//     autoplaySpeed: 2000,
//     autoplayTimeout:3000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1,
//         },
//         600:{
//             items:2,
//         },
//         1000:{
//             items:3,
//         }
//     }
// });


$('.owl-nav').contents().unwrap();


