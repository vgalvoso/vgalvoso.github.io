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

function showModal(number){
    $(".modal-bg").fadeIn();
    $(".modal").fadeIn();
    $("body").css("overflow","hidden");

    switch(number){
        case 1:
            showAM();
        break;
        case 2:
            showTimed();
        break;
        case 3:
            showTicketing();
        break;
    }
}

function showAM(){
    var project_title = "Activity Monitoring";
    var project_description = "Web application developed for a construction company as IT Programmer.";
    var project_img = "res/am.png";
    var project_story = "This system is used by all the employee to record their daily activities."
                        +"Since this is my first projet in the industry,"
                        +" I decided to use hardcoding, pure PHP. It's fun and the only challenge"
                        +" is working on ui because I'm using pure CSS."
                        +" Eventually, I managed to create animations and transitions using pure CSS.";
    var project_techs = "<li> - Visual Studio Code </li>"
                        +"<li> - MySql Database </li>"
                        +"<li> - PHP </li>"
                        +"<li> - HTML5 </li>"
                        +"<li> - CSS3 </li>"
                        +"<li> - Javacript </li>"
                        +"<li> - JQuery </li>"
                        +"<li> - Ajax </li>";
        $('#project_id').html("1");
        $("#project_title").html(project_title);
        $("#project_description").html(project_description);
        $("#project_img").attr("src",project_img);
        $("#project_story").html(project_story);
        $("#project_techs").html(project_techs);
}

function showTimed(){
    var project_title = "Timed";
    var project_description = "Web application developed for a construction company as IT Programmer.";
    var project_img = "res/timed2.png";
    var project_story = "This system is used by all of the employee. This serves as their communication"
                        +" from the endorsement of the project to the last phase. This project is the"
                        +" most challenging in all of my works, It has so many features like calendar for"
                        +" external and internal deadline, file attachment for requests, communication"
                        +" from user to user like a social network, and realtime notifications."
                        +" I also managed to make this system dynamic and lessen the need to reload page"
                        +" for update by using Jquery <em> AJAX. </em>"
                        +" And still all of this are made through pure PHP,CSS and Jquery.";
    var project_techs = "<li> - Visual Studio Code </li>"
                        +"<li> - MySql Database </li>"
                        +"<li> - PHP </li>"
                        +"<li> - HTML5 </li>"
                        +"<li> - CSS3 </li>"
                        +"<li> - Javacript </li>"
                        +"<li> - JQuery </li>"
                        +"<li> - Ajax </li>";
        $('#project_id').html("2");
        $("#project_title").html(project_title);
        $("#project_description").html(project_description);
        $("#project_img").attr("src",project_img);
        $("#project_story").html(project_story);
        $("#project_techs").html(project_techs);
}

function showTicketing(){
    var project_title = "Ticketing System";
    var project_description = "Web based Ticketing System.";
    var project_img = "res/ticketing.png";
    var project_story = "During my past 2 projects, I have created a set of rules for css and javascripts"
                        +" so I dont had any trouble in creating this system. Even hardcoded, I created"
                        +" this system in MVC pattern";
    var project_techs = "<li> - Visual Studio Code </li>"
                        +"<li> - MySql Database </li>"
                        +"<li> - PHP </li>"
                        +"<li> - HTML5 </li>"
                        +"<li> - CSS3 </li>"
                        +"<li> - Javacript </li>"
                        +"<li> - JQuery </li>"
                        +"<li> - Ajax </li>";
        $('#project_id').html("3");
        $("#project_title").html(project_title);
        $("#project_description").html(project_description);
        $("#project_img").attr("src",project_img);
        $("#project_story").html(project_story);
        $("#project_techs").html(project_techs);
}

function showPic(num){
    var project_id = $('#project_id').html();
    var project_img = [];
    switch(project_id){
        case "1":
            project_img = ["res/am/am.png",
                    "res/am/am.png",
                    "res/am/am.png",
                    "res/am/am.png"];
        break;
        case "2":
            project_img = ["res/timed/t1.png",
                        "res/timed/t2.png",
                        "res/timed/t3.png",
                        "res/timed/t4.png"];
        break;
        case "3":
            project_img = ["res/ticketing/adminaddtask.png",
                        "res/ticketing/admintasklist.png",
                        "res/ticketing/requestor.png",
                        "res/ticketing/tracking.png"];
        break;
    }
    $("#project_img").fadeOut("fast",function(){
        $("#project_img").attr("src",project_img[num])
    });
    $("#project_img").fadeIn();
}