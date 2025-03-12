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

const ongezab = (a, b) => {
  return a + b;
};
console.log(ongezab(14, 16));

const greet = function (name) {
  return `Good Evenning ${name}`;
};

console.log(greet("Kimani"));

const weatherToday = "Rainy";

function exerciseDog(dogName, dogBreed) {
  if (weatherToday === "Rainy") {
    return `${dogName} did not exercise due to rain`;
  }
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `${dogName} is happy and tired!`;
}

const result = exerciseDog("Byron", "poodle");
console.log(result);

function functionName(ListOfParameters) {
  console.log(ListOfParameters);
  console.log("This is my first function");
  return 3 + 3;
}
functionName(false);

const outPut = functionName();

console.log(outPut);

function sum(a, b) {
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  return a + b;
}
console.log(sum(6, 9));
console.log(sum(15, 88));
console.log(sum(77, 54));
console.log(sum(78, 100));

function perimeterOfRectangle(l, w) {
  console.log(`l = ${l}`);
  console.log(`w= ${w}`);
  return `Perimeter = ${(2*l) + (2* w)}`;
}
console.log(perimeterOfRectangle(7, 5));

// functions are firstclass citizen meaning we can treat them like any other values
// since It's still a function the rules of functions still apply
// Now this becomes a function expresiion(function assigned to varriables)
// The function expression can work without function names i.e anonymous functions

// function expresiions don;\'t allow hoisting since the function is stored 
// inside a varriable

const perimeter = (l, w) => {
  return l * 2 + w * 2;
}

console.log(perimeter(4, 6));

const newVarriable = 9
console.log(newVarriable);

function calculator(z, a, c) {
  // console.log(c(7, 5));
  return c(z, a);
  // console.log(x);
  // At this point we are executing the function
  //  perimeter through the placeholder
  return z;
}

const z = 8;
const outPut1 = calculator(7, 5, perimeter);
console.log(outPut1);
