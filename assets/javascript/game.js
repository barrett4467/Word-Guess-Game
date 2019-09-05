var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var availableWords = ["ankle"]
var attemptsRemaining = 10;
var wins = 0;





// var for ref to HTML
var currentWordText = document.getElementById("current-word");
// var letterGuessedText = document.getElementById("letter-guessed");
var attemptsRemainingText = document.getElementById("attempts-remaining");
var winsText = document.getElementById("wins");


document.onkeyup = function(event) {
    var wordChosen = availableWords[Math.floor(Math.random() * availableWords.length)];
    for (var i = 0; i < availableWords.length; i++){
        var letterGuessed = event.key; //key user presses
         
        

        if (availableWords[0] === "a" || availableWords[1] === "n"){ 
            console.log(animal + " a or n")
        }
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