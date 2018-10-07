//variable to hold the input from the CLI (this may need to be moved to the index file, with the inquirer npm after built)
var letter = process.argv[2];
console.log("This is the letter guessed: " + letter);

//create a constructor function for Letter
var Letter = function(char){
    //create an empty string variable to store the character for the letter
    this.char = char;
    //create a boolean value to say true if letter is guess or false if not
    this.isLetter = false;
    //create a method to display the character when guessed
    this.displayChar = function(){
        if (this.isLetter){
            //display the char (hidden letter) if the isLetter var is set to true
            console.log("That is the char " + this.char);
        }
        //or an underscore if not
        else {
            // console.log("That isn't the character");
            console.log("_ ");
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
        //then call the displayChar function to determine if they need to show the char or an underscore
        this.displayChar();
    };
};

var newLetter = new Letter("r");
//call the replaceChar function on the new letter object to determine if input (letter) is equal to its char ("r" in this example)
newLetter.replaceChar(letter);
//console.log the object for testing
console.log("this is the new letter: " + JSON.stringify(newLetter));

//export this constructor to the word.js file to be used for the word to guess
module.exports = Letter;