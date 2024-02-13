function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];
    
    try{
      let result = lab.runLab(3);
    
      console.log(`${lab.student}'s code worked: ${result === 27}`);
    }
    catch(err){
      console.log(`${lab.student}'s code didn't work!`);
      console.log('We caught an TypeError, but our program continues to run!')
    }
  }  
}


let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return (num * num);
      
    }
  },
  {
    student: 'Adam',
    multiple: function (num) {
        return Math.pow(num, num);
      
    }
  },
  {
    student: 'Mary',
    runLab: function (num) {
        return (num * num * num);
      
    }
  }
];

let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];


gradeLabs(studentLabs);
gradeLabs(studentLabs2);
