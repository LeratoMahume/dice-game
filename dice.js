var randomNum = Math.random();
randomNum = randomNum * 6;
randomNum = Math.floor(randomNum) + 1;

var randomImage = "images/dice" + randomNum + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var secRandomNum = Math.random();
secRandomNum = secRandomNum * 6;
secRandomNum = Math.floor(secRandomNum) + 1;
console.log(secRandomNum);

var randomImage2 = "images/dice" + secRandomNum + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNum > secRandomNum) {
  document.querySelector("h1").innerHTML = "Player 1 Won";
} else if (randomNum < secRandomNum) {
  document.querySelector("h1").innerHTML = "Player 2 Won";
} else if (randomNum === secRandomNum) {
  document.querySelector("h1").innerHTML = "It's Tie.";
} else {
  document.querySelector("h1").innerHTML = "Refresh me To start Playing";
}
