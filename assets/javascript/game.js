var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var availableWords = ["ankle"];
var currentWord = ["_" , "_" , "_","_", "_"]
var attemptsRemaining = 10;
var wins = 0;





// var for ref to HTML
var currentWordText = document.getElementById("current-word");
// var letterGuessedText = document.getElementById("letter-guessed");
var attemptsRemainingText = document.getElementById("attempts-remaining");
var winsText = document.getElementById("wins");


document.onkeyup = function(event) {
    var wordChosen = availableWords[Math.floor(Math.random() * availableWords.length)]; //gives random word
    var letterGuessed = event.key; //key user presses

    var letter = availableWords[0].charAt[0]  ///Gives us a!! 
        if (wordChosen[0] === letterGuessed){ 
            currentWordText.textContent = (letterGuessed + "_ _ _ _");
        
    }
}





    //     if (letterGuessed.includes(alphabet)){ //starts game
    //         if (letterGuessed === availableWords[i]) {
    //             currentWordText.textContent = "Current Word: " + wordChosen[i]; {
    //                 document.write("oh snap")
    //             }} 
    //         } console.log(availableWords[i]);
    // }

    //             
    //         }
    //      }   
    //     }

                // (letterGuessed === "n") ||
                // (letterGuessed === "k") ||
                // (letterGuessed === "l") ||
                // (letterGuessed === "e")) {
             //wrong but will fix later
                

        // } else {
        //     alert("booo")
        // }        


        // directionsText.textContent = "";
        // currentWordText.textContent = "Current Word: " + wordChoice;
        // letterGuessedText.textContent = "Letters guessed: " + letterGuessed;
        // attemptsRemainingText.textContent = "Attempts remaining " + attemptsRemaining;
        // winsText.textContent = "Wins " + wins;


        //I don't know how much of this is a fever dream...