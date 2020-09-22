$(document).ready(function(){
    $('.burgermenu').on('click', function(){
        $('.mob-nav').fadeToggle("");
    })

});

// $(document).ready(function(){
//     $('.chevron').on('click', function(){
//         $('.text-wrapcontainer').slideToggle("slow");
//     })

// });

// $(document).ready(function(){
//     $('.chevron').on('click', function(){
//         $('.container').animate({paddingTop: '-=215px'});
//     })

// });




$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
        $('.text-wrap').css({'opacity':( 300-scroll )/300});
});



