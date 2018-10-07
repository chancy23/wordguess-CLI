// require fs to read the Letter.js file
var Letter = require("./Letters");

// *Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object 
//representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function 
//on each letter object (the first function defined in `Letter.js`) that displays the character 
//or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each 
//letter object (the second function defined in `Letter.js`)


//Create a word constructor function
var Word = function(){
    //create an array to hold the "new" Letter objects for the word
    this.wordCharacters = [];

    //method to return a string of the letters in the word
    this.wordString = function(){
        //call on the first method for the letters object to either display word as a concantenation of underscores or chars
        this.displayChar();
    };
    //a method that  
    this.spellWord = function(){
        //calls on the 2nd method from the letters file to determine if that letter is a hidden char and then to display 
        //it when guessed
        this.replaceChar(letter);
    };
};

//create a new word object, using the word zebra for now
var newWord = new Word("zebra");
//test the newWord variable, need to get zebra to display as characters in a sring
console.log("this is the new word: " + JSON.stringify(newWord, null, 2));

module.exports = Word;

    