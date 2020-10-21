//* Navbar Search Code ########################################################
$("document").ready(function(){
    //* selector on event
    $(".catch-botton").click(function(){
        $(".search-display").toggle();
    })
});



//* Navbar with Scroll ########################################################
$(document).ready(function(){
    //* selector on event
    $(window).scroll(function(){
        //* Condition
        if($(window).scrollTop()){
           $(".navbar").addClass("after-scroll")
        }
        else{
            $(".navbar").removeClass("after-scroll")
        }
    });
});



//* Navbar click with hide ########################################################
$("document").ready(function () {
    //* selector on event
    $(".jquery-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });
});



//* Owl-carousel Slider Code ########################################################
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout: 6000,
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
             }
        }
    }) 
});


// isotope build plugin code start

//* document ready
$("document").ready(function () {
    //* init Isotope
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
});
// isotope code end

