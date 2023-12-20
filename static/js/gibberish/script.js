const inputs = document.querySelector(".inputs"),
    hintTag = document.querySelector(".hint span"),
    guessLeft = document.querySelector(".guess-left span"),
    wrongLetter = document.querySelector(".wrong-letter span"),
    resetBtn = document.querySelector(".reset-btn"),
    typingInput = document.querySelector(".typing-input");
//var slider_word = document.querySelector(".slider-word");
var score = 0;

let word, maxGuesses, incorrectLetters = [], correctLetters = [];
// const history = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
const history = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// const history = [0,1,2];
var distance;// Set the date we're counting down to
var countDownDate = new Date().getTime() + 15 * 60 * 1000;
// var countDownDate = new Date().getTime() + 10 * 1000;

// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();
  distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =  "<b>Timer-</b> " + minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Time's up";
    randomWord();
  }
}, 1000);

function randomWord() {
    if (history.length == 0 || distance < 0) {
        alert("Game Over!");

        // document.getElementById('gib-next').addEventListener('click',
        // (e) => {
        
        fetch("/gibberish-scores", {
            method: "POST",
            body: JSON.stringify({
                email: sessionStorage.getItem("email"),
                score: score
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                location.href = "/"
                alert(data.msg);
            });
        // }

        // )

    }
    let sel = Math.floor(Math.random() * history.length);
    let ranItem = wordList[history[sel]];
    history.splice(sel, 1);

    // let ranItem = wordList[Math.floor(Math.random() * wordList.length)];

    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();

function initGame(e) {
    let key = e.target.value.toLowerCase();
    if (key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

    setTimeout(() => {

        if (correctLetters.length === word.length) {
            alert(`Congrats! You guessed the gibberish ${word.toUpperCase()}`);
            score = score + 1;
            document.getElementById("score").innerHTML = score;
            return randomWord();
        } else if (maxGuesses < 1) {
            alert("You have exhausted all your guesses");
            for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
