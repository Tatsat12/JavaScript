//  Question.1
// Create an object to hold information about you.

const Myinfo = {
    name: "Tatsat",
    age: 2,
    gender: "N/A", 
    hobbies: ["Gaming", "Cricket", "Travelling", "Reading"]
  };


// Question.2
//Write a function to get an array of sampleObject keys.

function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  

  const sampleObject = { a: 'test', b: 12, c: true };
  const keys = getObjectKeys(sampleObject);
  console.log(keys); 



//   To get an array of sampleObject values.
function getObjectValues(obj) {
    return Object.values(obj);
  }
  
  const sampleObject1 = { a: 'test', b: 12, c: true };
  const values = getObjectValues(sampleObject1);
  console.log(values); 


//   To get an array of sampleObject key-value pairs.

function getObjectEntries(obj) {
    return Object.entries(obj);
  }

  const sampleObject2 = { a: 'test', b: 12, c: true };
  const entries = getObjectEntries(sampleObject2);
  console.log(entries); 




//   Question.3 
// . Write a function to check if given property exists in an object.

console.log(Myinfo.hasOwnProperty("Age"));
console.log(Myinfo.hasOwnProperty("My name"));


// Question.4
//  Write a function to check if an object is empty.

function emptyObject(SampleObject4){
  return Object.keys(SampleObject4).length===0
};

const emptyObj ={}

console.log(emptyObject(Myinfo));
console.log(emptyObject(emptyObj));



// Question.5
// Write a program to demonstrate Explicit Type Conversion (Type Casting).

let myString = "42";
console.log(typeof myString); // "string"

let myNumber = Number(myString);
console.log(typeof myNumber); // "number"

let myBoolean = Boolean(myNumber);
console.log(typeof myBoolean); // "boolean"

let myString2 = String(myBoolean);
console.log(typeof myString2); // "string"

console.log(myNumber); // 42
console.log(myBoolean); // true
console.log(myString2); // "true"
