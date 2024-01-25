function makeLine(size){
    let line='';
    for (i=1; i<=size; i++){
        line+="#";
    }
    return line;
}
console.log(makeLine(8));


function makeSquare(a){
    let square=''; 
    for (let i=1; i<=a; i++){
        square += (makeLine(a)+'\n');
    }
    return square;
}
console.log(makeSquare(3));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 1; i <=height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle;
  }
  console.log(makeRectangle(7,4))

  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  }
  console.log(makeDownwardStairs(4))

  function makeSpaceLine(numSpaces, numChars){
    let spaceLine='';
    let str = "#"; 
    let space = '_';
    spaceLine += space.repeat(numSpaces) + str.repeat(numChars)+space.repeat(numSpaces);
    return spaceLine
  }
  console.log(makeSpaceLine(3,5));

//triangel
  let n=5; 
  for (let i = 1; i <= n; i++) { 
    let str = "#"; 
    let space = ' '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
  } 

//diamond

n = 5; 
for (let i = 1; i <= n; i++) { 
    let str = "#"; 
    let space = ' '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
} 
for (let i = n - 1; i >= 1; i--) { 
    let str = "#"; 
    let space = ' '; 
    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1));
}