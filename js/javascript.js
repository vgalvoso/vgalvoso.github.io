function showProj(element,div){
    var text = $(element).find(".text").html();
    if(text == "Show more")
    {
        $(element).find(".text").html("Show less");
        $(element).find("img").attr("src","res/upbtn.png");
    }
    else{
        $(element).find(".text").html("Show more");
        $(element).find("img").attr("src","res/downbtn.png");
    }
    $(div).slideToggle();
}

$(document).ready(function(){
    $('.nav_btn').on('click',function(){
        $('.nav_btn').removeClass('active');
        $(this).addClass('active');
        $('.side-drawer').slideUp();
        $('.hamburger-menu').removeClass("change");
    });
});


//index.html
$(document).ready(function(){
    $('.hamburger-menu').on('click',function(){
        $('.side-drawer').slideToggle();
    });
});

//for hamburger menu and sidenav
function menuClicked(x) {
    x.classList.toggle("change");
}