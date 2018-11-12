
/*===============================================
                   SERVCES
    https://github.com/matthieua/WOW 
================================================*/
//short form for document.ready method
$(function(){
    //animate on scroll
    new WOW().init();
});


/*===============================================
                   WORK   
    http://dimsemenov.com/plugins/magnific-popup/
================================================*/
$(function(){
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{ enabled:true}
    })
});

/*===============================================
                   TEAM 
    https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
================================================*/
$(function(){
    $("#team-members").owlCarousel({
        items:3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause:true,

        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
               items: 2
            },
            // breakpoint from 768 up
            768 : {
              items: 3
            }
        }
    });
});

/*===============================================
                   TESTIMONIALS 
    https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
================================================*/
$(function(){
    $("#customers-testimonials").owlCarousel({
        items:1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause:true
    });
});

/*===============================================
                   COUNTER-UP with waypoints.js
    https://github.com/ciromattia/jquery.counterup
    http://imakewebthings.com/waypoints/
================================================*/
$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
/*===============================================
                   CLIENTS 
    https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
================================================*/
$(function(){
    $("#clients-list").owlCarousel({
        items:6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause:true,

        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
               items: 3
            },
            // breakpoint from 768 up
            768 : {
              items: 5
            },
            // breakpoint from 992 up
            992 : {
                items: 6
            }
        }
    });
});
/*===============================================
                   NAVIGATION
    Show/Hide transparent black navigation
================================================*/
$(function(){
    $(window).scroll(function(){
        // if scroll top lower than 50px we wwant to hide Nav bar
        if($(this).scrollTop()<50){
            //hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        }
        else{
            //show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    })
});
//Smooth scrolling
$(function(){
    $("a.smooth-scrolling").click(function(event){
        //stop open link url
        event.preventDefault(); 
        //this = a
        //get/return id like #about, #work, #team and etc, if clicked 
        var section = $(this).attr("href");
        
        //animate
        $('html, body').animate({
            scrollTop: $(section).offset().top-64
        }, 1250,"easeInOutExpo"); //how long animation will run 1.25sec

    });
});

//Close mobile menu on click : click menu == click toggle button to close
$(function(){
        //class name for a tag in li
    $(".navbar-collapse ul li a").on("click touch",function(){
        //class name of toggle button
        $(".navbar-toggle").click();
    });

});