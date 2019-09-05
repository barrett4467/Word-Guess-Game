var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var availableWords = ["ankle"];
var currentWord = [];
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
    var pastGuesses = [];

    // var letter = availableWords[0].charAt[0]  ///Gives us first letter!! 

    var letter = wordChosen[0];

    if (wordChosen[0] === letterGuessed) { 
        currentWordText.textContent = (letterGuessed);
        console.log(letterGuessed);

        pastGuesses.push(letterGuessed);
        console.log(pastGuesses);

    } else if ((wordChosen[0] != letterGuessed) && (wordChosen[1] === letterGuessed)){
                currentWordText.textContent = (pastGuesses[1] + letterGuessed);

                pastGuesses.push(letterGuessed);
                console.log(pastGuesses)
            }
    }

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


        // directionsText.textContent = "";
        // currentWordText.textContent = "Current Word: " + wordChoice;
        // letterGuessedText.textContent = "Letters guessed: " + letterGuessed;
        // attemptsRemainingText.textContent = "Attempts remaining " + attemptsRemaining;
        // winsText.textContent = "Wins " + wins;