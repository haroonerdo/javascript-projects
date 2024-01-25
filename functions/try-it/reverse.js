function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}
console.log(reverse("merhaba"));
str='hello people'
console.log(reverse(str));
str='hello flag'
console.log(reverse(str));
