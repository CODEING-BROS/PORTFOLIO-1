$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
            
    });

    // slide up script
    $('.scroll-up-btn').click(function(){
        $(`html`).animate({scrollTop: 0})
    });

    $('.menu-btn').click(function() {
        $('.menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});

// typing animation  script
var typed = new Typed(".typing",{
    strings: ["Web Developer","Influencer","Freelancer"],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true
})
var typed = new Typed(".typing-2",{
    strings: ["Web Developer","Influencer","Freelancer"],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true
})
var typed = new Typed(".typing-3",{
    strings: ["Skills","Expriences"],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true
})


function toggleMenu() {
        const links = document.getElementById('links');
        links.classList.toggle('active');
    }