//require for the inquirer npm
var inquirer = require("inquirer");

//require to use fs npm
var fs = require("fs");

// require fs to read the Word.js file
var Word = require("./Word.js");

//need an array of words to guess
var allWords = ["HIPPOPOTAMUS", "HYENA", "ELEPHANT", "OSTRICH", "WOLF", "GIRAFFE", "TIGER", "GOPHER", "MONKEY", "KANGAROO", "EAGLE", "SNAKE", "RACOON"];

//randomly select a word from teh array to guess, set that to the variable for newWord
var randomWord = allWords[Math.floor(Math.random() * allWords.length)]
console.log("the random word is: " + randomWord);

//create a new word object, using the randomword variable
var newWord = new Word(randomWord);

// empty array for letters guess
var lettersGuessed = [];
//variables for number of guesses left//start with 6
var guessesLeft = 6;

//need to use an inquirer prompt to start the game and load the word to guess
inquirer.prompt([
    {
        name: "startGame",
        type: "confirm",
        message: "Do you want to guess a word?"
    },
]).then(function(answer){
    //if true then load the word to guess as blanks
    if (answer === true){
        newWord.wordString();
    }
    // else {
    //     //if not exit out
    //     return
    // };
});

//need to use an inquirer prompt to have user guess letter
// inquirer.prompt([
//     {
//         name: "guess",
//         type: "input",
//         message: "Guess a letter"
//     },
// ]).then(function(answer) {
//     //convert letter to upper case to match the character from the array
//     var letter = answer.ToUpperCase();
//     console.log("This is the letter guessed: " + letter);
// });







//call the wordstring function to place the underscore for each character in the word
//newWord.wordString();

//call on function to show if letter is guessed in the console.
newWord.spellWord(letter);





//answer is then sent to the Letters object instead of process.argv
// var letter = process.argv[2];
// console.log("This is the letter guessed: " + letter);


//functions====================================================

//recursive function to allow user to guess the letters befor showing the full word?

//need to keep the word in console, and not replace the word each time a letter is guess (should be able to do with inquirer)

//function to determine number of guesses left/countdown

//function to move the letters guess to the letters guessed array

//function to determine a win or loss
    // if all letters in word are guessed correctly then win

    //if not then a loss and display the full word


