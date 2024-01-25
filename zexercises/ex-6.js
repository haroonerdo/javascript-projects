
function calculateAreaOfCircle(radius) {
    let area = Math.PI * radius**2;
    return area;
}
console.log(calculateAreaOfCircle(2));

function reverse(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}
console.log(reverse("Hello, LaunchCode"))

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
}
console.log(reverse("hello world 1"))

function reverse(str) {
    return str.split('').reverse().join('');
}
function isPalindrome(str) {
    return reverse(str) === str;
}
console.log(reverse("hello world 2"))

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return reversed === str;
}
console.log(reverse("hello world 3"))

function isPalindrome(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed === str;
}
console.log(reverse("hello world 4"))

function reverse(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

function isPalindrome(str) {
    return reverse(str) === str;
}



