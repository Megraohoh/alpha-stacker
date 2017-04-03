// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// The stackLetter function should accept the array as the sole argument
function stackLetters (array) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
    var output = "";

    for (var counter = 0; counter < array.length; counter ++){
    	//modulus logic goes before the output assignment 
    	if (counter % 3 === 0) {
    		output += " ";
    	}

    	output += array[counter];
    	// console.log(output);
    } 
}


// Invoke the function and pass in the array


stackLetters(alphabet)