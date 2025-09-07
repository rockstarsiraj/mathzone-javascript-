let firstnumberElement = document.getElementById("firstNumber");
let secondnumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");
let successMessage = "congratulations! you are genius 🧠🎉";
let tryAgainMessage = "please! Try Again you can do it 🔁🤔";




function restartGame() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    console.log(firstRandomNumber);
    console.log(secondRandomNumber);
    firstnumberElement.textContent = Math.ceil(firstRandomNumber);
    secondnumberElement.textContent = Math.ceil(secondRandomNumber);
    gameResultElement.textContent = "";
    userInputElement.value = "";
}
restartGame();

function checkResult() {
    let firstRandomInteger = parseInt(firstnumberElement.textContent);
    let secondRandomInteger = parseInt(secondnumberElement.textContent);
    let userEnteredSum = parseInt(userInputElement.value);
    let sum = firstRandomInteger + secondRandomInteger;
    console.log(firstRandomInteger);
    console.log(secondRandomInteger);
    console.log(sum);
    if (isNaN(userEnteredSum)) {
        gameResultElement.textContent = "provide valid input don't be over smart ⚠️";
        gameResultElement.style.backgroundColor = "red";

    } else if (userEnteredSum === sum) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.backgroundColor = "#1e217c";
    }

}
