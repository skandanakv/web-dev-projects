var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
var RandomNumber2 = Math.floor(Math.random() * 6) + 1;

var RandomImage1 ="images/dice" + RandomNumber1 + ".png";
var RandomImage2 ="images/dice" + RandomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",RandomImage1);
document.querySelectorAll("img")[1].setAttribute("src",RandomImage2);

var heading =document.querySelector("h1");
if(RandomNumber1>RandomNumber2){
    heading.innerHTML="Player 1 Wins!!"
}else if(RandomNumber1<RandomNumber2){
    heading.innerHTML="Player 2 Wins!!"
}else{
    heading.innerHTML="Draw!"
}

 