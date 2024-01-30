// function reverse(str) {
//     let lettersArray = str.split('');
//     let reversedLettersArray = lettersArray.reverse();
//     return reversedLettersArray.join('');
//  }console.log(reverse("LaunchCode"));
 
//  let logger = function(errorMsg) {
//     console.log("ERROR: " + errorMsg);
//  };
 
//  if (userInput < 0) {
//     return errorMsg("Invalid input");
//  }

 function decreasingSum(integer) {
    if (integer === 1){
       return integer;
    } else {
        return decreasingSum(integer-1);
       //call decreasingSum function again
    }
 }