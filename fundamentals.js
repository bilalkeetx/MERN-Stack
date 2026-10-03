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
function printNumbers(){
  for(let i=1;i<=100;i++){
    console.log(i);
  }
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
  for(i=0;i<arr.length -1;i++){
    if(arr[i]> max){
      max=arr[i];
    }
  }
  return max;
}