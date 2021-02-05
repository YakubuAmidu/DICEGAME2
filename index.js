var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomimageSource = "img/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimageSource);
