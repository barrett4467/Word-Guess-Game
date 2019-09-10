var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var availableWords = ["ankle" , "skeleton", "teeth", "clavicle", "skull", "patella", "ulna"];
var attemptsRemaining = 10;
var wins = 0;
var word = [];
var currentWord = availableWords[Math.floor(Math.random() * availableWords.length)]; //gives random word
var wordBlanks = []; 
var pastGuesses = [];
var lettersGuessed = " "; 





// var for ref to HTML
var directionsText = document.getElementById("directions");
var currentWordText = document.getElementById("current-word");
var attemptsRemainingText = document.getElementById("attempts-remaining");
var pastGuessesText = document.getElementById("past-guesses");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");

function empty(){
    pastGuesses.length = 0;
}

function reset (){
    alert("Next Round!!");
    attemptsRemaining = 10;
    document.getElementById("current-word").textContent = "";
    empty();
    currentWord = alphabet[Math.floor(Math.random() * alphabet.length)];
}

for (i = 0; i < currentWord.length; i++) {
    console.log(currentWord);
    wordBlanks.push("__");  //this is what takes the letter count of each word and creates an underscore 
}


document.onkeyup = function(event) {
    var letter = event.key; //key user presses
    var letterGuessed = letter.toLowerCase();

    directionsText.textContent = "" //takes directions away 
    
    
    document.getElementById("current-word").innerHTML = ("Current Word: " + wordBlanks);
    // console.log(wordBlanks);
    
    // console.log("You have typed: " + letterGuessed);
    
    
    if (letterGuessed === "a" || letterGuessed === "b" || letterGuessed === "c" || letterGuessed === "d" || letterGuessed === "e" || letterGuessed === "f" || letterGuessed === "g" || letterGuessed === "h" || letterGuessed === "i" || letterGuessed === "j" || letterGuessed === "k" || letterGuessed === "l" || letterGuessed === "m" || letterGuessed === "n" || letterGuessed === "o" || letterGuessed === "p" || letterGuessed === "q" || letterGuessed === "r" || letterGuessed === "s" || letterGuessed === "t" || letterGuessed === "u" || letterGuessed === "v" || letterGuessed === "w" || letterGuessed === "x" || letterGuessed === "y" || letterGuessed ==="z"){ //starts game only if letter is pressed 
        
        
        // document.getElementById("current-word").textContent = wordBlanks; 
        
        
        function letterInWord(letter) { 
            var positions = new Array();
            for (i = 0 ; i < currentWord.length; i++) {
                if (currentWord[i] === letter){
                    
                    var letterToGuess = wordBlanks.pop(); //decreases the blanks as correct letters are guessed
                    positions.push(i);
                    // console.log(positions);
                }
            }
            return positions + word;
        }
        
        function lettersRemaining (){
            var toGuess = 0;
            for (i in word) {
                if (word[i] === "__") {
                    toGuess++;
                }
            }
        }

        var positions = letterInWord(letterGuessed);

        console.log(positions);
        
        if (positions.length) {
            // console.log(positions.length);
        
            // console.log("User has pressed a letter from word: " + letter);
            
            for (i = 0 ; i < positions.length; i++) {
                word[positions[i]] = letterGuessed;
            }
            document.getElementById("current-word").textContent = ("Current word: " + word);
        }
        if (letterInWord === letterGuessed){
            alert("HEYYYYYY!!");

        }
       

        if (lettersRemaining === 0){
            document.getElementById("wins").textContent = wins++;

            reset();
        }
    }
    
    else {
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
        pastGuessesText.textContent = "Letters guessed: " + lettersGuessed;
        attemptsRemainingText.textContent = "Attempts remaining " + attemptsRemaining;
        winsText.textContent = "Wins: " + wins;