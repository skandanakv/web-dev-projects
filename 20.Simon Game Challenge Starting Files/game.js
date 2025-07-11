var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];

var level=0;
var started=false;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text(" Level " + level);
        nextSequence();
        started=true;
    }

    
});


$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});





function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      // So far correct
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
          nextSequence(); // go to next level
        }, 1000);
      }
    } else {
      // Wrong answer
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");
  
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
  
      startOver(); // Reset all data
    }
  }
  
  function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("level "+ level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" +randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    },100);
}

function playSound(name){
    var audio=new Audio("sounds/" +name + ".mp3");
    audio.play();
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
  