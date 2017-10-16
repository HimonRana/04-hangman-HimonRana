// Globala variabler

var randomWord;
var wordList = ['RocketLeague', 'Himon', 'Bulle', 'ChasAcademy', 'Axel']; // Lista med spelets alla ord
var selectedWord; // Ett av orden valt av en slumpgenerator
var letterBoxes = document.getElementById('letterBoxes'); //Rutorna där bokstäverna ska stå
var hangmanImg; //Bild som kommer vid fel svar
var hangmanImgNr; // Vilken av bilderna som kommer upp beroende på hur många fel du gjort
var msgElem; // Ger meddelande när spelet är över
var startGameBtn = document.getElementById('startGameBtn'); // Knappen du startar spelet med
var letterButtons = document.getElementById('letterButtons'); // Knapparna för bokstäverna
var letterButton;
var startTime; // Mäter tiden

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd

// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {} // End init

window.onload = init; // Se till att init aktiveras då sidan är inladdad

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner

document.getElementById('startGameBtn').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);

// Funktion som slumpar fram ett ord

function selectedWord () {
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    return random;
    console.log(selectedWord());
}
 
// Funktionen som tar fram bokstävernas rutor, antal beror på vilket ord

function letterBoxes () {
    for (var i=0; i < selectedWord.length; i++) {
        box = document.createElement('li');
        
    }        
}
// Funktion som körs när du trycker på bokstäverna och gissar bokstav

// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av det

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på