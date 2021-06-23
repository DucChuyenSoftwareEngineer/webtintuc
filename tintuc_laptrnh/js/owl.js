const nextIcon= '<i class="fas fa-chevron-right"></i>';
const prevIcon= '<i class="fas fa-chevron-left"></i> ';
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
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
        500:{
            items:2

        },
          650:{
            items:3
        },
        1000:{
            items:4
        }
    }
})