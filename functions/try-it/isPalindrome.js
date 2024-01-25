function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}
str="merhaba"
console.log(isPalindrome(str));
str='ey edip adanada pide ye'
console.log(isPalindrome(str))