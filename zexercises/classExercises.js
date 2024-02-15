// Define your Book class here:
const input = require('readline-sync');

class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       this.title = title;
       this.author = author;
       this.copyright = copyright;
       this.isbn = isbn;
       this.pages = pages;
       this.timesCheckedOut = timesCheckedOut;
       this.discarded = discarded;
    }
 
    // checkout(uses) {
    //    this.timesCheckedOut += uses;
       
    // }
    dispose(currentYear,uses) {
        //let currentYear=Number(input.question("enter the current year: "))
        if (currentYear<this.copyright){
            console.log(`${currentYear} is not valid year for ${this.title}. `);
            currentYear=Number(input.question(`Please, enter the valid year: `));
            
        }
        //let uses =Number(input.question(`How many time is  '${this.title}' uses: `));
        //let  uses=1;
        this.timesCheckedOut += uses;

        if (this.timesCheckedOut > 100 || currentYear - this.copyright > 5) {
            this.discarded = 'Yes';
            }
        return console.log(`Is '${this.title}' disposel:? :${this.discarded}`); 
    }
}

 
 // Define your Manual and Novel classes here:
 class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    
} 
 
 class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
}



// Declare the objects for exercises 2 and 3 here:
let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

let aNovel = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');
 

// Code exercises 4 & 5 here:

// console.log(makingTheShip);
// console.log(aNovel);

makingTheShip.dispose(2024,5);
aNovel.dispose(2024,1);

//console.log(makingTheShip);
//console.log(aNovel);
