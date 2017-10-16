// Globala variabler


var wordList = ['ROCKET', 'HIMON', 'BULLE', 'CHAS', 'CHAMPION']; // Lista med spelets alla ord
var selectedWord; // Ett av orden valt av en slumpgenerator
//var letterBoxes = document.getElementById('letterBoxes'); //Rutorna där bokstäverna ska stå

var hangmanImg; //Bild som kommer vid fel svar
var hangmanImgNr; // Vilken av bilderna som kommer upp beroende på hur många fel du gjort
var msgElem; // Ger meddelande när spelet är över
var startGameBtn = document.getElementById('startGameBtn'); // Knappen du startar spelet med
//var letterButtons = document.getElementById('letterButtons'); // Knapparna för bokstäverna
var startTime; // Mäter tiden 

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd

// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() { // End init
    var letterBoxesUl = document.getElementById('letterBoxesUl');



// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner

// document.getElementById('startGameBtn').onclick = function() {
//     selectedWord()
//     letterBoxes()

    

// Funktion som slumpar fram ett ord

function randomWord () {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
}
randomWord();
console.log(selectedWord);
 
// Funktionen som tar fram bokstävernas rutor, antal beror på vilket ord

function letterBoxes () {    
    for (var i=0; i < selectedWord.length; i++) {
        var box = document.createElement('li');
        box.innerHTML = '<input disabled id=lb' +i+ ' />'
        letterBoxesUl.appendChild(box);
    }    
}
letterBoxes();

// Funktion som körs när du trycker på bokstäverna och gissar bokstav

function checkGuess (event) {
    var guess = event.target.value;
    if (selectedWord.indexOf(guess) >= 0) {
        correctGuess(guess);
    }  else {
        wrongGuess();
    }
    console.log(guess);
}

function correctGuess(guess) {
    for (var j=0; j < selectedWord.length; j++) {
        if (selectedWord[j] == guess)
            document.getElementById('lb' + j).value = guess;
    }
}

function wrongGuess() {
    return "Hejsan";
}

var letterButtons = document.querySelectorAll('.alphabet-button');
    for (var j=0; j < letterButtons.length; j++) {
        //letterButtons[j].getAttribute('value');
        letterButtons[j].addEventListener('click', checkGuess)
    }

// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av det

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på.
}
window.onload = init; // Se till att init aktiveras då sidan är inladdad