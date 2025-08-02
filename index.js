let randomNumber1  = Math.floor(Math.random() * 6 )+ 1;
console.log(randomNumber1);

let randomDiceImage1 = "dice" + randomNumber1 + ".png";

let randomImageSource1 = "images/" + randomDiceImage1;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

let randomNumber2  = Math.floor(Math.random() * 6)+ 1;
console.log(randomNumber2);

let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "images/" + randomDiceImage2;

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

const diceResult = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
diceResult.innerHTML = "🚩 Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
diceResult.innerHTML = "Player 2 Wins 🚩";
}else{
    diceResult.innerHTML ="Draw";
}
