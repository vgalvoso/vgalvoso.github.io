//filter table
$(document).ready(function(){
    $("#search_box").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myskill_table tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

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

    $('.dot').on('click',function(){
        $('.dot').removeClass("dot-active")
        $(this).addClass("dot-active");
    });
});

//for hamburger menu and sidenav
function menuClicked(x) {
    x.classList.toggle("change");
}

function goTo(id){
    document.getElementById(id).scrollIntoView(false);
}

function closeModal(){
    $(".modal-bg").fadeOut();
    $(".modal").fadeOut();
    $("body").css("overflow","auto");
}

function showModal(){
    $(".modal-bg").fadeIn();
    $(".modal").fadeIn();
    $("body").css("overflow","hidden");
}

function populateProj1(){
    $('.')
}