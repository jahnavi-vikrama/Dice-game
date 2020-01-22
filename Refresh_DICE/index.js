var randomNumber1= Math.floor(Math.random()*6)+1;
var ranImaName= "dice" + randomNumber1 + ".png";
var ranImaName1 = "images/" + ranImaName;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",ranImaName1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var ranImaName2= "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",ranImaName2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}

else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML="DRAW!";
}
