var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var availableWords = ["ankle"];
var currentWord = [];
var attemptsRemaining = 10;
var wins = 0;
var lettersGuessed = 0;






// var for ref to HTML
var currentWordText = document.getElementById("current-word");
// var letterGuessedText = document.getElementById("letter-guessed");
var attemptsRemainingText = document.getElementById("attempts-remaining");
var winsText = document.getElementById("wins");
var directionsText = document.getElementById("directions");
var lettersGuessedText = document.getElementById("letters-guessed");


document.onkeyup = function(event) {
    var wordChosen = availableWords[Math.floor(Math.random() * availableWords.length)]; //gives random word
    var lettersGuessed = event.key; //key user presses
    directionsText.textContent = ""
    var pastGuesses = [];
    
    for (var i = 0 ; i < availableWords.length; i++){ //should loop through word length
        if (wordChosen.includes("lettersGuessed")) { 
            var letter = wordChosen[i];
            pastGuesses.push(lettersGuessed); //stores previous guesses 
            currentWordText.textContent = ("Current Word: " + lettersGuessed + " _ _ _ _");

        } else if ((wordChosen[0] != lettersGuessed) && (wordChosen[1] === lettersGuessed)){
            currentWordText.textContent = ("Current Word: " + " _ " + lettersGuessed + " _ _ _");
            pastGuesses.push(lettersGuessed);
        } else if ((wordChosen[0] != lettersGuessed) && (wordChosen[1] != lettersGuessed) && (wordChosen[2] === lettersGuessed)){
            currentWordText.textContent = ("Current Word: " + " _  _ " + lettersGuessed + " _ _ ");
            pastGuesses.push(lettersGuessed);
        } else if ((wordChosen[0] != lettersGuessed) && (wordChosen[1] != lettersGuessed) && (wordChosen[2] != lettersGuessed) && (wordChosen[3] === lettersGuessed)){
            currentWordText.textContent = ("Current Word: " + " _  _  _ " + lettersGuessed + " _ ");
            pastGuesses.push(lettersGuessed);
        } else if ((wordChosen[0] != lettersGuessed) && (wordChosen[1] != lettersGuessed) && (wordChosen[2] != lettersGuessed) && (wordChosen[3] != lettersGuessed) && (wordChosen[4] === lettersGuessed)){
            currentWordText.textContent = ("Current Word: " + " _  _  _  _ " + lettersGuessed);
            pastGuesses.push(lettersGuessed);
        } else if ((wordChosen[0] === lettersGuessed) && (wordChosen[1] === lettersGuessed)){
            currentWordText.textContent = ("Current Word: " + pastGuesses + lettersGuessed + " _ _ _");
            pastGuesses.push(lettersGuessed);
     
    }
            
            
            
        }
    }

        // || (wordChosen[1] === lettersGuessed) || (wordChosen[2] === lettersGuessed) || (wordChosen[3] === lettersGuessed) || (wordChosen[4] === lettersGuessed)

        // if (lettersGuessed.includes(alphabet)){
            
            
            
            
            // }
            
            //    else if ((wordChosen[0] === letterGuessed) && (wordChosen[1] === letterGuessed)){
                //        currentWordText.textContent = (letterGuessed + "_ _ _");
                //     }
                // }
                
                
                // switch(keyPressed){ 
                    //     case "a": 
                    
                    //         break;
                    //     case "b":
                    
                    //         break;
                    //     case "c":
                    
                    //         break;
                    //     case "d":
                    
                    //         break;
                    //     case "e": 
                    
                    //         break;
    //     case "f":
            
    //         break;
    //     case "g":
            
    //         break;
    //     case "h":
            
    //         break;
    //     case "i": 
            
    //         break;
    //     case "j":
            
    //         break;
    //     case "k":
            
    //         break;
    //     case "l":

    //         break;
    //     case "m": 
        
    //         break;
    //     case "n":
            
    //         break;
    //     case "o":
            
    //         break;
    //     case "p":
            
    //         break;
    //     case "q": 
            
    //         break;
    //     case "r":
            
    //         break;
    //     case "s":
            
    //         break;
    //     case "t":
            
    //         break;
    //     case "u": 
        
    //         break;
    //     case "v":
            
    //         break;
    //     case "w":
            
    //         break;
    //     case "x":
            
    //         break;
    //     case "y": 
            
    //         break;
    //     case "z":
            
    //         break;
    //     default:
    //        return alert("Invalid Key try again!");

    // }





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
                

        // } else {
        //     alert("booo")
        // }        


        directionsText.textContent = "Press any key to get started!";
        currentWordText.textContent = "Current Word: ";
        lettersGuessedText.textContent = "Letters guessed: " + lettersGuessed;
        attemptsRemainingText.textContent = "Attempts remaining " + attemptsRemaining;
        winsText.textContent = "Wins: " + wins;