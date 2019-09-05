var letterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wordChoice = ["ankle", "knees", "joint"]
var attemptsRemaining = 10;
var wins = 0;





// var for ref to HTML
var currentWordText = document.getElementById("current-word");
// var letterGuessedText = document.getElementById("letter-guessed");
var attemptsRemainingText = document.getElementById("attempts-remaining");
var winsText = document.getElementById("wins");


document.onkeyup = function(event) {
    var letterGuessed = event.key; //key user presses
    var wordChoice = letterChoice[Math.floor(Math.random() * letterChoice.length)];
    // for (var i = 0; i < wordChoice.length;){
    //     var letter = wordChoice[i]
        if (letterChoice.includes(letterGuessed)){
            if ((letterGuessed === "a") ||
                (letterGuessed === "n") ||
                (letterGuessed === "k") ||
                (letterGuessed === "l") ||
                (letterGuessed === "e")) {
                alert("turtle") //wrong but will fix later
                }

        // } else {
        //     alert("booo")
        // }        

        }
        // directionsText.textContent = "";
        // currentWordText.textContent = "Current Word: " + wordChoice;
        // letterGuessedText.textContent = "Letters guessed: " + letterGuessed;
        // attemptsRemainingText.textContent = "Attempts remaining " + attemptsRemaining;
        // winsText.textContent = "Wins " + wins;
}
