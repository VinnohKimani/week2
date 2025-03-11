/**
 * Functions
 * DRY ---> Do Not Repeat Yourself
 *
 * To avoid repeating  the same code through out our code base
 *   we use a funtion to wrap that code  and reuse it.
 *
 * All the rules used when creating varriables should be applied
 * Creating Function names
 * Every function in js always returns undefined unless we explicitely
 *  specify a return value using the return key word
 */

function functionName(parameters) {
  // fundtion body
}

// Function without parameters
function morning() {
  console.log("Good Morning Kimani, It's on Tuesday");
}
morning();
// function with one parameter
function square(a) {
  // Return allows a function to give an output
  // We can only have one return keyword unless we are uding selection statements
  // the return kerword stops execution of a function
  return a ** 2;
}
console.log(square(4));
const output = square(3);
console.log(output);
console.log(typeof square);

// function with multiple parameters
function sum(a = 0, b = 0) {
  // Validation
  // console.log(typeof b);
  // console.log(typeof a);
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "A number must be Provided for both a and b";
  }
}
//The order in which arguments are passed should match the parameters
const num1 = 7;
const num2 = 5;
console.log(sum(num1, num2));
console.log(sum(5, 2));
console.log(sum(-1, -3));

function greeting(firstName, lastName) {
  return `Good morning ${firstName}, ${lastName} Have a nice day`;
}
console.log(greeting("Vincent", "Kimani"));

// Es6 allows us to write shorter functions using the arrow function

/**
 * functions in js are firstt class citizen meaning they
 *    can be treated like othe values
 *This is brought about by arrow functions & call back fuctions

 */

const ongeza = sum;
console.log(ongeza(10, 19));

const add = (a, b) => a + b;
console.log(add(8, 10));

const ongezab = (a, b)=>{
    return a + b;
}
console.log(ongezab(14, 16));


const greet = function (name) {
  return `Good Evenning ${name}`
};

console.log(greet("Kimani"));

