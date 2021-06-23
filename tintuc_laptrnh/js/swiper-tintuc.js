const nextIcon= '<i class="fas fa-chevron-right"></i>';
const prevIcon= '<i class="fas fa-chevron-left"></i> ';
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    navText:[
        nextIcon,
        prevIcon,

     ],
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        }
    }
})