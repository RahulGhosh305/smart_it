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