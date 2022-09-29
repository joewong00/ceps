// const multiItemCarousel = document.querySelector('#carouselExampleInterval');

// if(window.matchMedia("(min-width:576px)").matches){

//     const carousel = new bootstrap.Carousel(multiItemCarousel, {
//         interval: false
//     })

//     var carouselWidth = $('.carousel-inner')[0].scrollWidth;
//     var cardWidth = $('.carousel-item').width();

//     var scrollPosition = 0;

//     $('.carousel-control-next').on('click', function(){
//         if(scrollPosition > (carouselWidth - (cardWidth * 4))){
//             console.log('next');
//             scrollPosition = scrollPosition + cardWidth;
//             $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
//         }
//     });

//     $('.carousel-control-prev').on('click', function(){
//         if(scrollPosition > 0){
//             console.log('prev');
//             scrollPosition = scrollPosition - cardWidth;
//             $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
//         }
//     });

// }else{
//     $(multiItemCarousel).addClass('slide');
// }


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav: true,
    navText: ["<span class='carousel-control-prev-icon'></span>", "<span class='carousel-control-next-icon'></span>"],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:4,
//     loop:true,
//     responsiveClass:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:3000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:2,
//             nav:false
//         },
//         1000:{
//             items:3,
//             nav:true,
//         }
//     }
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })
