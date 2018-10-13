// require fs to read the Letter.js file
var Letter = require("./Letters.js");

//Create a word constructor function
var Word = function(word){
    //place to put the word that is selected/created
    this.word = word;
    //create an array to hold the "new" Letter objects for the word
    this.wordCharacters = [];

    this.outputArr = [];

     //split the word into individual characters and push the the Letters object
     for (var i = 0; i < this.word.length; i++) {
        //push the letters into the Letter object and put in the wordCharacter array
        this.wordCharacters.push(new Letter(this.word[i]));
    };
    
    //method to return a string of the letters in the word
    this.wordSplit = function(){
        //loop through the wordCharacters array and put each letter as an output based on the call to the Letter's displayChar function
        for (var j = 0; j < this.wordCharacters.length; j++){
            var outputLetter = this.wordCharacters[j].displayChar();
            //push the output to the output Array to display in the conosole.
            this.outputArr.push(outputLetter)
        };
        //this is the last string that is showing, not sure how to to get the incremenntal strings in front of it to not be there
        console.log("This is the word to guess: " + this.outputArr.join(" "));
    };
    //a method that  
    this.spellWord = function(letter){
        //for loop to go through each letter object in the array
        for (var k = 0; k < this.wordCharacters.length; k++) {
            //calls on the 2nd method from the letters file to determine if that letter is a hidden char 
            //and then to display it when guessed
            this.wordCharacters[k].replaceChar(letter);
        };
    };
};

module.exports = Word;  