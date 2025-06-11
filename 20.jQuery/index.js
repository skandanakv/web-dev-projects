$("h1").addClass("titleClass");
$("h1").text("bye");
$("*").css("background-color","pink");
$("button").addClass("buttonClass"); 

$(document).keydown(function(event){
    $("h1").text(event.key);
});

$("h1").before("<button>new</button>");

$("button").on("click",function(){
    $("h1").toggle();  //appears and disappers ..only on click
})

$("button").on("click",function(){
    $("h2").slideUp().slideDown().animate({opacity:0.5});   //to add more than one animations 
})