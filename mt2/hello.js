// function greet(){
//     console.log("hello world");

// }
//  //arrow function
// let add=(a,b)=>{
//     return a+b;
//  }
// console.log(add(2,3));
//function declaration
// function multiply(a,b){
//     return a*b;
// }
// console.log(multiply(2,3));
// //function expression
// let multiply1=function(a,b){
//     return a*b;
// }
// console.log(multiply1(2,3));
// //arrow function
// let multiply2=(a,b)=>a*b;
// console.log(multiply2(2,3));

// const greetUser=()=>{
//     console.log("hello world");
// }
// greetUser();

let newArray=[1,2,3,4,5];

//map
let squaredArray=newArray.map((num)=>num*num);
console.log(squaredArray);
let sumArray=newArray.map((num)=>num+num);
console.log(sumArray);

//filter
let filteredEvenNumbers=newArray.filter(num=>num%2===0);
console.log(filteredEvenNumbers);

//reduce
let total=newArray.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(total);