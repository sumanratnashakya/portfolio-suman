$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            
        }else{
            $('.navbar').removeClass("sticky");
            
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
        if(this.scrollY > 200){
            $('.social').addClass('show');
        }else{
            $('.social').removeClass('show');}
    });

    // loader animation with gsap
    const tl = gsap.timeline({defaults:{ ease: "power1.out" }}); 
    tl.to('.text',{y:'0%', duration: 1});
    tl.to('.slider',{y:'-100%',duration:1, delay:0.5 });
    tl.to('.intro',{y:'-100%', duration: 1}, '-=1'); /* -=1 means start 1 second earlier, same time as above code of slider */
    tl.fromTo('nav',{opacity: 0},{opacity: 1, duration: 1.2});
    tl.fromTo('.home-content',{opacity: 0},{opacity: 1, duration: 1.2}, '-=1');

   

    // slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })

    //toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    })

    //typing animation script 
    var typed = new Typed('.typing',{
        strings: ['Freelancer', 'Web Developer', 'CV Designer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed('.typing-2',{
        strings: ['Freelancer', 'Web Developer', 'CV Designer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //owl carousel 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: true,
        autoPlayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                item: 2,
                nav: false
            },
            800:{
                item: 2,
                nav: false
            },
            1000:{
                items: 2,
                nav: false
            }
        }
    });
});
