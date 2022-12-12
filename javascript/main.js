$(window).scroll(()=>{
    if($(window).scrollTop()> $(".aboutus").offset().top - $("nav").outerHeight()){
        $('nav').css("background-color","#0D6EFD")
    }
   else{
    $('nav').css("background-color","transparent")
   }
})
