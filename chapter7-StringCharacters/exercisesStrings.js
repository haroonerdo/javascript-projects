//Part One
let num=1001;
console.log(num);
let numLength=num.length;
console.log("num: "+num+" Length is "+numLength); //undefined


let num1=123.45;
console.log(num1);
let num1Length=num1.length;
console.log("num1: "+num1+" Length is "+num1Length); //undefined
console.log("------------------------------------------")
console.log("num: "+num+" Length is "+String(num).length);
console.log("------------------------------------------")

console.log(num1 +" include a "+ "'.'"+" dot.");
console.log("num1: "+num1+" Length is "+String(num1).length+" with '.' ."); //it include dot
console.log("------------------------------------------")

if(String(num1).includes('.')){
    //console.log(num1 +" include a "+ "'.'"+" dot."); 
    num1Length=String(num1).length-1;
    console.log("num1: "+num1+" Length is "+num1Length+" without '.' .");
}else{
    console.log("num1: "+num1+" Length is "+String(num1).length);
}
console.log("------------------------------------------")



//Part Two
console.log("\n************************1");
let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT ";
let newDna=dna.trim();
console.log(newDna);
console.log("************************");
let upperNewDna=newDna.toUpperCase();
console.log(upperNewDna);
console.log("\n************************2");
if(upperNewDna.includes('GCT')){
    upperNewDna=upperNewDna.replace('GCT', 'AGG');
    console.log(upperNewDna)
}else{
    console.log("Not found 'GCT' ." );
}
console.log("************************");
if(upperNewDna.includes('CAT')){
    console.log("CAT found." );
    console.log("CAT has start index "+upperNewDna.indexOf('CAT')+" in the dna's string");
}else{
    console.log("CAT NOT found." );
}
console.log("************************");
let dnaArr=[];
dnaArr=upperNewDna.split("-");
console.log(dnaArr)
console.log("CAT has start index "+dnaArr.indexOf('CAT')+" in the dna's array");

console.log("************************");
let codonNum=5;
let startCodon=((codonNum-1)*4);
console.log(upperNewDna.slice(startCodon,(startCodon)+3)+" is fifth codon in the DNA strand.");
//console.log(upperNewDna.slice(16,19));
console.log("************************");
//let dnaArr=[];
dnaArr=upperNewDna.split("-");
console.log(dnaArr)
let dnaChar=dnaArr.length*3;
console.log("The DNA strand has "+dnaArr.length+" codons.")
console.log("The DNA strand has "+dnaChar+" characters.")


//Part Three
console.log("\n************************");
let strJS='JavaScript';
let initials="";
initials+=strJS.charAt(0);
initials+=strJS.charAt(4);
console.log(initials);
console.log("The abbreviation for 'JavaScript' is "+initials+".");
console.log("\n************************");

let arrJS=[];
arrJS=strJS.split('');
console.log(arrJS);
let i;
let j=arrJS.length;
let str="";
for(i=0; i<j;i++){
if(arrJS[i]=="J"){
    str+="J";
//console.log(str)
}
if(arrJS[i]=="S"){
    str+="S";
//console.log(str)
}
}console.log(str)

console.log("\n************************");
let title =strJS.toUpperCase();
console.log("Full upper case "+title+" .");

title=title.toLowerCase();
console.log("Full lower case "+title+" .");

word=title.charAt(0).toUpperCase()
console.log(word+" is first word for title.");

title=title.replace(title.charAt(0),word);
console.log("Title is "+title+" .");





