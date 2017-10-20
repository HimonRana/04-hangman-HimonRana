// Globala variabler


var wordList = ['ROCKET', 'HANGMAN', 'HUSSEÄRENÅSNA', 'CHAS']; // Lista med spelets alla ord
var selectedWord; // Ett av orden valt av en slumpgenerator
//var letterBoxes = document.getElementById('letterBoxes'); //Rutorna där bokstäverna ska stå
var correctGuessNr = 0;
//var hangmanImg = document.getElementById('hangman'); //Bild som kommer vid fel svar
var hangmanImgNr = 0; // Vilken av bilderna som kommer upp beroende på hur många fel du gjort
var msgElem; // Ger meddelande när spelet är över
 // Knappen du startar spelet med
 // Knapparna för bokstäverna
var startTime; // Mäter tiden 
//var letterBoxesUl = document.getElementById('letterBoxesUl');


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd

// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() { // End init

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
var startGameBtn = document.getElementById('startGameBtn');
var restartGameBtn = document.getElementById('restartGameBtn');
var letterButtons = document.getElementById('letterButtons');
var alphabetButtons = document.querySelectorAll('.btn');

startGameBtn.addEventListener('click', startGame) 

function startGame(event) {
    for (var i = 0; i < alphabetButtons.length; i++) {
        alphabetButtons[i].removeAttribute('disabled', 'disabled'); 
    }
    randomWord();
    letterBoxes();
    event.target.setAttribute('disabled', 'disabled');
};


restartGameBtn.addEventListener('click', function() {
    location.reload(false);
});

// event listener för reset
// sätter startgamebtn till enabled igen
// och restartar spelet


// Funktion som slumpar fram ett ord

function randomWord () {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
}

 
// Funktionen som tar fram bokstävernas rutor, antal beror på vilket ord

function letterBoxes () {
    for (var i=0; i < selectedWord.length; i++) {
        var box = document.createElement('li');
        box.innerHTML = '<input disabled id=boxList' +i+ '>'
        letterBoxesUl.appendChild(box);
    }    
}


// Funktion som körs när du trycker på bokstäverna och gissar bokstav

  function checkGuess (event) {
      var guess = event.target.value; 
      if (selectedWord.indexOf(guess) >= 0) {
          correctGuess(guess);
      }  else {
          wrongGuess();
      }
  }
  
function correctGuess(guess) {
    for (var j=0; j < selectedWord.length; j++) {
        if (selectedWord[j] == guess) {
        document.getElementById('boxList' + j).value = guess;
        correctGuessNr++;
        if (correctGuessNr === selectedWord.length) {
            setTimeout(function() {
            alert("CONGRATULATION!");
            }, 200);
        }
        }
    }
}


  function wrongGuess() {
      hangmanImgNr++;
      var hangmanImg = document.getElementById('hangman');
      hangmanImg.src = "images/h"+ hangmanImgNr +".png";
      if (hangmanImgNr === 6) {
      for (var a = 0; a < alphabetButtons.length; a++) {
          alphabetButtons[a].setAttribute('disabled', 'disabled');
        }
        alert('GAME OVER');
    }         
  }

      for (var j = 0; j < alphabetButtons.length; j++) {
          alphabetButtons[j].addEventListener('click', checkGuess)
          alphabetButtons[j].addEventListener('click', function(event) {
              event.target.setAttribute('disabled', 'disabled')
          });
      }
// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av det

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på.
}
window.onload = init; // Se till att init aktiveras då sidan är inladdad