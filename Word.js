// require fs to read the Letter.js file
var Letter = require("./Letters.js");

//Create a word constructor function
var Word = function(word){
    //place to put the word that is selected/created
    this.word = word;
    //create an array to hold the "new" Letter objects for the word
    this.wordCharacters = [];
    
    //method to return a string of the letters in the word
    this.wordString = function(){
        //split the this.word into letters and save to a new variable 
        var letters = this.word.split("");
        //letters.toString();
        
        //console.log("this is the word split into letters: " + letters);

        //for loop through the object to push each letter in the wordCharacters array as part of the Letters object
        for (var i = 0; i < letters.length; i++) {
            console.log(letters[i]);
            //push the letters into the Letter object and put in the wordCharacter array
            this.wordCharacters.push(new Letter(letters[i]));
        };
        
        //console.log(this.wordCharacters)
        //for each char need to run the displayChar method and display underscore in console.log
        for (var j = 0; j < this.wordCharacters.length; j++){
            // call the displayChar method on each character in the word and return the word as a series of blanks (need to get on same line vs in sep lins)
            this.wordCharacters[j].displayChar();
        };
    };
    //a method that  
    this.spellWord = function(letter){
        
        //for loop to go through each letter object in the array
        for (var k = 0; k < this.wordCharacters.length; k++) {
            //console.log("this is word characters in spell word: " + JSON.stringify(this.wordCharacters[k], null, 2));
            //calls on the 2nd method from the letters file to determine if that letter is a hidden char and then to display it when guessed
            this.wordCharacters[k].replaceChar(letter);
        };
    };
};

//create a new word object, using the word zebra for now
// var newWord = new Word("zebra");

//call the wordstring function to place the underscore for each character in the word
//newWord.wordString();

// call the spell word function to see if the letter input matches in the current word
//newWord.spellWord(letter);

module.exports = Word;

    