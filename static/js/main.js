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
        500:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

$('.owl-nav').contents().unwrap();


$('.owl-carousel2').owlCarousel({
    loop:true,
    responsiveClass:true,
    margin: 0,
    nav: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
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
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

