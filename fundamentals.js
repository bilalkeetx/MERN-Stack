function checkNumber(i) {
  if(i>0) return "Positive"
  if(i<0) return "Negative"
  return "Zero"
}
function findLargest(a,b,c){
  if(a>=b && a>=c) return a;
  if(b>=a && b>=c) return b;
  return c
}
function printEven(j){
  for(let i=1;i<j;i++){
    if(i%2===0){
      console.log(i)
    }
  }
}
function calculateFactorial(k){
  let f=k;
for(let i=k-1;i>=1;i--){
  f*=i;
}
return f;
}
function reverseString(s){
  let reverseStr ="";
  for(let i=s.length -1;i>=0;i--){
    reverseStr += s[i];
  }
  return reverseStr;
}
function findArrayMax(arr){
  let max= arr[0];
  for(let i=0;i<arr.length -1;i++){
    if(arr[i]> max){
      max=arr[i];
    }
  }
  return max;
}
//function declaration
function add(a,b){
  return a+b;
}
//function expression
const add = function(a,b) {return a+b;}
//arrow function
const add = (a,b) => a+b;
//parameters vs arguments vs default parameters: 
//function add(a,b){
//  return a+b;
//}
//in this a,b are parameters 
//whereas in add(5,4) 5,4 are arguments
//whereas in 
//function add(a = 5 ,b = 4){
//  return a+b;
//}
//in this a,b are default parameters
//or in 
//function greet(a = "Friend"){
//  return $"Hello + {a}";
//}a is default parameter


// Scope Mechanics
// Global Scope: Accessible anywhere in the application. e.g => global
var global = 10;
// Function Scope: Variables declared with var inside a function are accessible anywhere in that function. e.g => name
function displayName(){
  var name = "Bilal";
  console.log(name);
}
// Block Scope: Variables declared with let and const inside {} blocks (like if statements or for loops) cannot be accessed outside those braces. e.g => i
function printNumbers(){
  for(let i=1;i<=100;i++){
    console.log(i);
  }
}


