//Q.1  Write a JavaScript function that reverse a number.

function reverseNumber(num) {
  let numArray = num.toString().split("");
  numArray.reverse();
  let reversedNum = parseInt(numArray.join(""));
  return reversedNum;
}


// Q.2 Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
function isPrime(num) {

  if (num < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {

    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Q.3  Write a JavaScript function which accepts an argument and returns the type.
let myNum = 42;
let myString = "hello";
let myBool = true;

console.log(getType(myNum));
console.log(getType(myString)); 
console.log(getType(myBool)); 


// Q.4 Write a Javascript function which accepts string an argument and returns reverse string.

let myString1 = "hello";
let reversedString = reverseString(myString);
console.log(reversedString); 

// Q.5 The switch statement

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;