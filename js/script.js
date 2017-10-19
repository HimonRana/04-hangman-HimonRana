// Globala variabler
function init() { // End init

var wordList = ['ROCKET', 'HIMON', 'BULLE', 'CHAS', 'CHAMPION']; // Lista med spelets alla ord
var selectedWord; // Ett av orden valt av en slumpgenerator
//var letterBoxes = document.getElementById('letterBoxes'); //Rutorna där bokstäverna ska stå

//var hangmanImg = document.getElementById('hangman'); //Bild som kommer vid fel svar
var hangmanImgNr = 0; // Vilken av bilderna som kommer upp beroende på hur många fel du gjort
var msgElem; // Ger meddelande när spelet är över
var startGameBtn = document.getElementById('startGameBtn'); // Knappen du startar spelet med
var letterButtons = document.getElementById('letterButtons'); // Knapparna för bokstäverna
var startTime; // Mäter tiden 
//var letterBoxesUl = document.getElementById('letterBoxesUl');
var restartGameBtn = document.getElementById('restartGameBtn');
// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd

// Initiering av globala variabler samt koppling av funktioner till knapparna.


// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner

startGameBtn.addEventListener('click', function(event) {
    // disable event.target until reset is clicked
    event.target.setAttribute('disabled', 'disabled');
    randomWord();
    letterBoxes();
});


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
        box.innerHTML = '<input disabled id=lb' +i+ ' />'
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
          if (selectedWord[j] == guess)
              document.getElementById('lb' + j).value = guess;
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
    }
          
      
  }

  var alphabetButtons = document.querySelectorAll('.btn');
      for (var j = 0; j < alphabetButtons.length; j++) {
          //letterButtons[j].getAttribute('value');
          alphabetButtons[j].addEventListener('click', checkGuess)
          alphabetButtons[j].addEventListener('click', function(event) {
              event.target.setAttribute('disabled', 'disabled')
          });
      }
// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av det

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på.
}
window.onload = init; // Se till att init aktiveras då sidan är inladdad