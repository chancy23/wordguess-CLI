
//create a constructor function for Letter
var Letter = function(char){
    //create an empty string variable to store the character for the letter
    this.char = char
    //create a boolean value to say true if letter is guess or false if not
    this.isLetter = false;
    //create a method to display the character when guessed
    this.displayChar = function(){
        if (this.isLetter === true){
            //display the char (hidden letter) if the isLetter var is set to true
            // console.log(this.char);
            return this.char;
        }
        //or an underscore if not
        else {
            // console.log("That isn't the character");
            var underscore = "_";
            return underscore;
        };
    };
    //create a method that takes the character/letter as an arguement and checks it against the "hidden" letter,
    this.replaceChar = function(letter){
        //if it is then replace the underscore with the letter guessed.
        if (this.char === letter) {
            //if the hidden char matches the letter input then set the isLetter to true
            this.isLetter = true;
        }
        else {
            //if it isn't then set to be false
            this.isLetter = false;
        };
        //console.log("the replaceChar function ran");
    };
};

//export this constructor to the word.js file to be used for the word to guess
module.exports = Letter;