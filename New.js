
//Variable//
let='my name is riad'
console.log(let);
var Dhorlam ="hey guys"
console.log(Dhorlam);
const pi= 35
console.log(pi);

//Array
var familyAge=[14,54,67,23]
console.log(familyAge);


//Array Push
familyAge.push(20);
familyAge.push(18);
console.log(familyAge);

//Pop
familyAge.pop();
console.log(familyAge);
//To remove the specific elements
var familyAge = [14, 54, 67, 23];

// Remove elements 54 and 67 by their index
var familyAge = [14, 54, 67, 23];
familyAge.splice(1,2); // Starting at index 1, remove 2 elements

console.log(familyAge); // Output: [14, 23]


//Data Types(string, number, boolean, array, object, null, undefined)//
//string//
let greeting = "Hello, World!";

//Number//
let quotient = 10 / 2;  // 5

//Boolean//
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}

//function
function SayGoodBye (){
  console.log("Hey What'sup");
}
SayGoodBye ();

//function  Parameter
function doubleIt (num){
  var result = num*2
  console.log(result);
}
doubleIt(5)

function doubleIt(num){
  var result =num*2
  console.log(result);
}
doubleIt(10);

var first = doubleIt(5);
var second = doubleIt(50);
console.log(first,second);

function add (num1,num2){
  var result = num1+num2;
  return result;
}
var sum = add(10,10);
console.log(sum);

//object

var student ={id:101,phone:19398,name:"Abir"};
var student2={id:2424,phone:7565,name:"Rafi"};
console.log(student);

//loop
//while loop:
var num=0;
while(num<2){
  console.log(num);
  num++;
}



//for loop:


for (var i=0;i<10;i++){
  console.log(i);
}

for(var i=0; i<6;i++){
  console.log(i);
}

