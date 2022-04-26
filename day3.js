

console.log(myAge); // Not Defined- Any Variable which we try to access but not declared will throw us a referencw
//Error : variable not defined

// let myHobbies;
// console.log(myHobbies);
// myHobbies = "Skating";
// console.log(myHobbies);                    
// undefined - If a variable is declared but not assigned any value yet, but if we try to access that variable then we will get the errror as undefined.
let myHobbies;
console.log(myHobbies);
myHobbies = "Skating";
console.log(myHobbies);

// null - Its a default value assigned by a user to the variable as long as th variable  has not been assigned its original /updated value

let amIadult = null;
console.log(amIadult)//null
amIadult = true;
console.log(amIadult)//true


{
let fname = "Hari";
const lname ="bajaj";
var age = 29;
console.log(fname,lname,age);
}
//in globl scope generally we are not able to access block scope variables, 
//as long as let/const keywords so it will give us a 
//RefereceError : Variable not defined.
//but for var we can access them even on globel scope space.

// console.log(fname);
// console.log(lname);
console.log(age);


//----------------------------------------------------------------------!
// Hoisting

//Hoising - Its only supported with that of var keywords and with the function. let and
//const keyword do not support hoisting.

//let keyword variables cannot acceseed before declaration/initialization
let game = "cricket";
//consol.log(game1);//ReferenceError: Cannot access 'game' before initiallization
let game1 = "cricket";

console.log(game2);
var game2;
game2 = "Badminton";
console.log(game2);//Badminton
//Note - for var keyword variables , if we try to access them before assigning
//value to the will give us undefines but the moment we declare 
//a value to it, it will give us the assigned value.

//--------------------------------------------------------------------------

//hoisting is funcction

//function are hoisted because of which we can call tec function before declaring 
//the fuction.

add(3,4);
function add(a,b){
let result = a+b;
console.log(result);
//consol.log("hello add function");
}

//---------------------------------------------------------------------------------------
// comparism operater
// == / != only check the value and not the data types but === checks both the values and the
// datatypes

// < , > , <= , >= , == , ===
//console.log(2<3); //true
//console.log(2>3); //false
//console.log(2>=3); //false
//console.log(2<=3); //true

console.log(2==2); //true
console.log(2===2); //true
console.log(2=="2"); //true
console.log(2==="3"); //False

//--------------------------------------------------------

//Logical operator
// || , &&, !

console.log(2||3);//2
console.log(0||3);//3
console.log(0||0);//0

console.log(2 && 3);//3 - print the last number
console.log(0 && 3);//0
console.log(1 && 0);//0

console.log(!0);//true
console.log(!1);//false
console.log(!2);//false

// Increment Decrement operators

let a = 1;
a++;//a = a+1
console.log(a);//2
a--;// a = a-1
console.log(a); //1
//a = 1;
console.log(a++);//1//i will first print the value of a, and then 
//increment its value with 1 which will be reflected/shown in next line,not on the same line
//similarly for --
console.log(a);//2

//-----------

let b = 2;
b*=2; // b= b*3;
b/=3; // b= b/3;
b-=3; // b= b-3;
b+=4; // b= b+4;