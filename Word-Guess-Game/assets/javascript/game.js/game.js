// Global variables
function getItem() {
}
// ========================================= //
// Create an array of words
var LanaDelReyTopHits = ['WestCoast', 'NationalAnthem', 'BlueJeans', 'Ride'];
//Function is run whenever user presses a key//
var currentWord = LanaDelReyTopHits[Math.floor(Math.random() * LanaDelReyTopHits.lenght)];
document.getElementsByClassName("CurrentWord").innerHTML = LanaDelReyTopHits;

var Wins = LanaDelReyTopHits;
for (i = 0; i < LanaDelReyTopHits; i++) {
    wordLength = [currentWord.slice(0, i*2+1), ' ', wordLength.slice(i*2+1)].join('');
}

//Displays possible words blank spaces
var currentWord = "W E S T C O A S T";
var blankSpaces = "";
var wordLength = LanaDelReyTopHits.length;
var currentWord = LanaDelReyTopHits[i];
var underscores = [];
var Wins = [];
var WrongAnswer = [];



//This code captures the keypresses and prints it out on screen.
var GuessesRemaining = 10;
document.onkeypress = keyPressed || window.event,
charCode = keyPressed.keyCode || keyPressed.which, lettersAlreadyGuessed = String.fromCharCode(charCode);


//User and Computer Displays
 document.getElementsByClassName("LettersAlreadyGuessed").innerHTML += lettersAlreadyGuessed;
 document.getElementsByClassName("GuessesRemaining").innerHTML = GuessesRemaining;
 GuessesRemaining--;
 if (GuessesRemaining === -1) {
     alert("You Loose!");
 }


// Win/Loss Displays
var docUnderscores = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('Wins');
var docWrongGuess = document.getElementsByClassName('WrongAnswer');

// Main
// =======================================




//Get users guess//

document.addEventListener('click', function () {
    var keyword = String.fromCharCode(event.keyCode);



//Create underscores based on length of word
// If users guess is right

    if (currentWord.indexOf(keyword) > -1) {

        //Add to wins words array//

        Wins.push(keyword);



        //Replace underscore with Winner letter
        underscores[currentWord.indexOf(keyword)] = keyword;
        docUnderscores[0].innerHTML = underscores.join(' ');
        docRightGuess[0].innerHTML = Wins;

        if (underscores.join('') == currentWord) {
            alert("You Win");
        }




        //Checks to see if users word matches guesses

        else {
            WrongAnswer.push(keyword);
            wrongGuess[0].innerHTML = lettersAlreadyGuessed;
        }
    }
});
