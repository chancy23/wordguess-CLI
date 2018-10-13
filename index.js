//require for the inquirer npm
var inquirer = require("inquirer");

//require to use fs npm
var fs = require("fs");

// require fs to read the Word.js file
var Word = require("./Word.js");

//need an array of words to guess
var allWords = ["HIPPOPOTAMUS", "HYENA", "ELEPHANT", "OSTRICH", "WOLF", "GIRAFFE", "TIGER", "GOPHER", "MONKEY", "KANGAROO", "EAGLE", "SNAKE", "RACOON"];

var newWord = "";

// empty list for letters guessed incorrectly
var lettersGuessedWrong = "";

//empty string to hold both incorrect and wrong letters guess to check if letter input was already entered.
var allLettersGuessed = [];

//variables for number of guesses left//start with 6
var guessesLeft = 6;

//letter variable to get the input from the user from the guess letter function
var letter= "";

//to keep track of the letters that have replaced underscores
var numBlanksFilled = 0;

var userGuessedCorrectly = false;

function confirmStart(){
    //run inquirer to prompt user if they want to play a new game
    inquirer.prompt([
        {
            name: "startGame",
            type: "confirm",
            message: "Do you want to guess a word?"
        },
    ]).then(function(answer){
        //if true then load the word to guess as blanks
        if (answer.startGame === true){
            console.log("OK let's play!");
            startGame()
        }
        else {
            //if not exit out
            console.log("Bye-bye then!");
            return;
        };
    });
};

//need to use an inquirer prompt to start the game and load the word to guess
function startGame(){
    //clear letters guessed array
    allLettersGuessed = [];
    //clear letters guess wrong list
    lettersGuessedWrong = "";

    //reset guesses left
    guessesLeft = 6;
    //reset numBlanks back to zero
    numBlanksFilled = 0;
    //get a random word to guess
    generateWord();
};

//ask user if they want to play and starts the game
confirmStart()

function generateWord(){
    //randomly select a word from the array to guess, set that to the variable for newWord
    var randomWord = allWords[Math.floor(Math.random() * allWords.length)]
    console.log("the random word is: " + randomWord);

    //create a new word object, using the randomword variable
    newWord = new Word(randomWord);

    //call the functions from the word constructor to split the word and generate the letters
    newWord.wordSplit();
    newWord.spellWord(letter);
    
    //allow the user to start input letters to guess
    guessLetter();
};

//create function for guessing the letter
function guessLetter(){
    //Keep prompting user to enter a letter if there are slots/underscores that still need to be filled in
	//OR if there are still guesses remaining.
	if (numBlanksFilled < newWord.wordCharacters.length && guessesLeft > 0) {
        //Use an inquirer prompt to have user guess letter
        inquirer.prompt([
            {
                name: "guess",
                type: "input",
                message: "Guess a letter"
            },
        ]).then(function(answer) {
            //convert letter/user input to upper case to match the character from the words array
            letter = answer.guess.toUpperCase();

            //console.log("This is the letter guessed: " + letter);

            //Assume guess to be false at this point
            userGuessedCorrectly = false;

            //need to determine if letter guessed was already guessed
            //if it was then console log to guess again, and run Guessletter function
            if (allLettersGuessed.indexOf(letter) > -1){
                console.log("You've already guessed that letter, guess another!");
                guessLetter();
            }
            else if (allLettersGuessed.indexOf(letter) === -1){
                //add letter to the all letters guessed array
                allLettersGuessed.push(letter);
                //if it is replace the underscore in the output Array with it and re-console log the output array with the letter in it
                for (i = 0; i < newWord.wordCharacters.length; i++) {
                    //If the user guess equals one of the characters in the word and letterGuessedCorrectly is equal to false for that letter...
                    if (letter === newWord.wordCharacters[i].char && newWord.wordCharacters[i].isLetter === false) {
                        //Set isLetter property for that letter equal to true 
                        newWord.wordCharacters[i].isLetter = true;
                        //Set userGuessedCorrectly to true (to determine how to proceed).
                        userGuessedCorrectly = true;
                
                        //change the blank in the output array to the letter
                        newWord.outputArr[i] = letter;
                        
                        //Increment the number of slots/underscores filled in with letters by 1.
                        numBlanksFilled++;
                        //console.log("Number of slots filled " + numBlanksFilled);
                    };
                };

                //if user guessed correctly
                if (userGuessedCorrectly){
                    console.log("That is correct!");
                    //show the remaining guesses (should stay the same as before if correct letter)
                    console.log("Remaining Guesses: " + guessesLeft);
                }
                //if not then add the letter guessed to the letters guess array and display it
                else {
                    //push the letter to the lettes guessed array
                    lettersGuessedWrong = lettersGuessedWrong.concat(" " + letter);
                    //reduce the number of guesses Left by 1
                    guessesLeft--;
                    console.log("that is not a correct letter.");
                    console.log("These are the guessed letters: " + lettersGuessedWrong);
                    console.log("Remaining Guesses: " + guessesLeft);
                };
                //call the functions from teh word constructor to continue to spell out the word
                newWord.wordSplit();
                newWord.spellWord(letter); 
                //check if win or loss to continue
                checkWinLoss();
            };  
        });
    };
};

//function to determine a win or loss
function checkWinLoss(){
    // if all letters in word are guessed correctly then win
    if (guessesLeft === 0) {
        console.log("Uh oh it looks like you didn't guess the word.");
        //display the full word
        console.log("This was the word: " + newWord.word);
        console.log("===========================================\n")
        //ask if they want to play again
        playAgain();
        
    }
    else if (numBlanksFilled === newWord.word.length){
        console.log("Congrats you've guessed the word correctly!");
        //ask if they want to play again
        playAgain();
    }
    else {
        //keep guessing the letter
        guessLetter();
    };
};

//prompt if they want to play again
function playAgain(){
    inquirer.prompt([
        {
            name: "restartConfirm",
            type: "confirm",
            message: "Do you want to try another word?"
        }
    ]).then(function(answer){
        if (answer.restartConfirm) {
            startGame();
        }
        else {
            console.log("Ok then, come back anytime!");
            return;
        };
    });
};