var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var availableWords = ["ankle" , "skeleton", "teeth", "clavicle", "skull", "patella", "ulna"];
var attemptsRemaining = 10;
var wins = 0;
var word = [];
var currentWord = availableWords[Math.floor(Math.random() * availableWords.length)]; //gives random word
var wordBlanks = []; 
var resetLettersGuessed = " "






// var for ref to HTML
var currentWordText = document.getElementById("current-word");
// var letterGuessedText = document.getElementById("letter-guessed");
var attemptsRemainingText = document.getElementById("attempts-remaining");
var winsText = document.getElementById("wins");
var directionsText = document.getElementById("directions");
var lettersGuessedText = document.getElementById("letters-guessed");


for (i = 0; i < currentWord.length; i++) {
    console.log(currentWord);
    wordBlanks.push("__");
}

document.onkeyup = function(event) {
    var letter = event.key; //key user presses
    var lettersGuessed = letter.toLowerCase();
    directionsText.textContent = "" //takes directions away 

    var lettersToGuess = wordBlanks.pop(); //decreases the blanks as correct letters are guessed

    console.log(lettersToGuess);
    document.getElementById("current-word").innerHTML = ("Current Word: " + lettersToGuess);

    console.log(wordBlanks);
    console.log("You have typed: " + lettersGuessed);

    if (alphabet.includes(lettersGuessed)){ //starts game only if letter is pressed 
        function lettersRemaining (){ //should give us underscores for the letters not guessed
            var inWord = 0;
            for (i in word) {
                if (word[i] === "__") {
                    inWord++;
                }
                return inWord;
            }
        }
        
        function letterInWord(letter) { 
            var positions = new Array();
            for (i = 0 ; i < currentWord.length; i++) {
                if (currentWord[i] === letter)
                positions.push(i);
            }
            return positions;
        }
        
        var positions = letterInWord(lettersGuessed);

        if (positions.length) {
            console.log("User has pressed a letter from word: " + letter);

            for (i = 0 ; i < positions.length; i++) {
                word[positions[i]] = lettersGuessed;
            }
            document.getElementById("current-word").textContent = ("Current word: " + word);
        }

        if (lettersToGuess === 0){
            resetLettersGuessed;
            wins++;
            document.getElementById("wins").textContent = wins;
        }

    } else {
        return alert("Invalid key entered. Please try again!");
    }
}


    // for (var i = 0 ; i < availableWords.length; i++){ //should loop through word length
    //     if (wordChosen.includes("lettersGuessed")) { 
    //         var wordLength = currentWordText.length;

    //         currentWordText.textContent = ("Current Word: " + wordChosen[i] + (wordLength - 1));

        //     var letter = wordChosen[i];
        //     pastGuesses.push(lettersGuessed); //stores previous guesses 
        //     currentWordText.textContent = ("Current Word: " + lettersGuessed + " _ _ _ _");

        // } else if ((wordChosen[0] != lettersGuessed) && (wordChosen[1] === lettersGuessed)){
        //     currentWordText.textContent = ("Current Word: " + " _ " + lettersGuessed + " _ _ _");
        //     pastGuesses.push(lettersGuessed);
        // } else if ((wordChosen[0] != lettersGuessed) && (wordChosen[1] != lettersGuessed) && (wordChosen[2] === lettersGuessed)){
        //     currentWordText.textContent = ("Current Word: " + " _  _ " + lettersGuessed + " _ _ ");
        //     pastGuesses.push(lettersGuessed);
        // } else if ((wordChosen[0] != lettersGuessed) && (wordChosen[1] != lettersGuessed) && (wordChosen[2] != lettersGuessed) && (wordChosen[3] === lettersGuessed)){
        //     currentWordText.textContent = ("Current Word: " + " _  _  _ " + lettersGuessed + " _ ");
        //     pastGuesses.push(lettersGuessed);
        // } else if ((wordChosen[0] != lettersGuessed) && (wordChosen[1] != lettersGuessed) && (wordChosen[2] != lettersGuessed) && (wordChosen[3] != lettersGuessed) && (wordChosen[4] === lettersGuessed)){
        //     currentWordText.textContent = ("Current Word: " + " _  _  _  _ " + lettersGuessed);
        //     pastGuesses.push(lettersGuessed);
        // } else if ((wordChosen[0] === lettersGuessed) && (wordChosen[1] === lettersGuessed)){
        //     currentWordText.textContent = ("Current Word: " + pastGuesses + lettersGuessed + " _ _ _");
        //     pastGuesses.push(lettersGuessed);
     


        // || (wordChosen[1] === lettersGuessed) || (wordChosen[2] === lettersGuessed) || (wordChosen[3] === lettersGuessed) || (wordChosen[4] === lettersGuessed)

        // if (lettersGuessed.includes(alphabet)){
            
            
            
            
            // }
            
            //    else if ((wordChosen[0] === letterGuessed) && (wordChosen[1] === letterGuessed)){
                //        currentWordText.textContent = (letterGuessed + "_ _ _");
                //     }
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
        // lettersGuessedText.textContent = "Letters guessed: " + lettersGuessed;
        attemptsRemainingText.textContent = "Attempts remaining " + attemptsRemaining;
        winsText.textContent = "Wins: " + wins;