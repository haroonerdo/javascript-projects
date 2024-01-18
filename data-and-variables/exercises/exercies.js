console.log(53);
console.log(typeof 53)
console.log('3.14')
console.log(typeof '3.14') //string
console.log("Bruce's beard") //Bruce's beard
console.log(42000);
console.log(42.000);
//console.log(42,000);
//console.log(42,001);
console.log(42,5,72);
console.log(Number("2345"));
console.log(typeof Number("2345"));
console.log("------------------------------1");
console.log(Boolean("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log("------------------------------2");
console.log(Boolean(''));//dosen't have any charecter in the single quate Boolean returned false
console.log(Boolean(' '));//has any charecter in the single quate Boolean returned true
console.log(Boolean(""));//dosen't have any charecter in the double quate Boolean returned false
console.log(Boolean(" "));//has any charecter in the single quate Boolean returned true
//If has any information in the paranthesis Boolean returned true
//If dosen't have  any information in the paranthesis Boolean returned false
console.log("------------------------------3");
console.log("LauncheCode");
console.log(5==5);//true
console.log(5===5);//true
console.log(5==6);//false
console.log(5===6);//false
console.log(true=='true');//false
console.log("------------------------------4");
console.log(7=="7");//true
console.log(0==false);//true
console.log(0=='');//true
console.log(Boolean(3==4));//false
console.log(Boolean(3+4));//true
console.log(Boolean(3+4==7));//true
console.log(Boolean(" false "));//true
console.log(Boolean("  "));//true
console.log(Boolean(""));//false
console.log("------------------------------5");
console.log(Boolean(7=='7'));
console.log(Boolean(0==false));
console.log(Boolean(0==''));
console.log(Boolean(7==='7'));
console.log(Boolean(0===false));
console.log(Boolean(0===''));
console.log("------------------------------6");
console.log(Boolean('0'==0));
console.log(Boolean(0==''));
console.log(Boolean('0'==''));
console.log("------------------------------7");
console.log(((5*3)>10)&&((4+6)===11));
console.log((2**2)**3);
console.log(2**2**3);
console.log(2**(2**3));
console.log("------------------------------8");
let bilHasBeenPaid=false;
if(!bilHasBeenPaid){
    console.log("your bill is due soon")
}
let num = 12;
let num2 = 11;
if(num%2===0 && num>num2){
    console.log(num,' is even');
    console.log(num, 'is greater than ',num2)
}else{
    console.log(num,' is even');
    console.log(num, 'is smaller than ',num2)
}

console.log("------------------------------9");
let x=8;
let y=8;
if (x>y){
    console.log('x is grater than y')
    console.log(x,' > ', y)
}else if (x<y){
    console.log('x is less than y')
    console.log(x,' < ', y)
}else{
    console.log('x is equel y')
    console.log(x,' = ', y)
}
console.log("------------------------------10");
let a=7;
if (a%2===1){
    console.log("Launch")
}else if(a>5){
    console.log("Code")
}else{
    console.log("LaunchCode")
}
console.log("------------------------------11");
 num=7;
 if (num%2===0){
    console.log(num, ' is even');
}
if (num>0){
    console.log(num, ' is Positive')
}

if (num%2===0){
    console.log(num, ' is even');

    if (num>0){
    console.log(num, ' is Positive')
    }
}

if (num%2!==0 && num>0){
    console.log(num, ' is even');
    console.log(num, ' is Positive')    
}

console.log("------------------------------12");
 num=7;
 if (num%2===0){
    if(num%2===1){
        console.log(num, ' is odd');
    }
    
}
/*
let firstName="Jack";
console.log (firstname);
//firtsname is undefined
*/
console.log("------------------------------13");

let name1 = "Julie";
//console.log("Hello, name1); //SyntaxError: Invalid or unexpected token
console.log("Hello, name1"); // Hello, name
console.log("Hello",name1); //Hello Julie
//console.log("Hello,name1);
//let name2=Abdullah;//ReferenceError ReferenceError: Abdullah is not defined (we need "")
