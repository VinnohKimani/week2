/**
 * Variables-> containers for storing values for later retrieval
 * Syntax -> rules associated with a programming language
 *
 * ____Rules associated in creating varriables___
 *    1. Start every varriable with a lowercase letter
 *    2. Camelcase naming convention
 *    3. We should usee let & const and not var
 *    4. Don't use keywords(reserved words)
 *    5. Js is case sensitive
 *    6. Always default to using const unless the value changes, use __let __.Neverr use __var__.
 *
 */

// Declarion - where when using const you have to declare and assign a value immediately
// immutable
const nationalId = "4391930";

// Let allows us to reassign the values -> mutable
let age = " 18";

age = "20";

/**
 * Datatypes -> allow us to represent real life data in programming language
 *
 * number, srings booleans, undefined, null -. PREMITIVE
 * objects, arrays -> non-premitive
 */

const firstName = "Vincent";
const lastName = "Kimani";
const fullName = `Vincent Kimani`;

console.log(firstName);
// string concantenation -> combining one or more strings using the + operator
const name = "kimani";
console.log(name + "Macharia");

// String interpolation -> insering a value into strings
console.log(`${firstName}${lastName},${100 - 45}`);

/**
 * Statements
 *
 * Default sequence -> top to buttom,, left to right
 *
 * __Breaking the Default Sequence___
 *   1. Selection -> if and switch
 *   2. Repetition (Loop) -> do while, while
 */

// Selection
const num = "20";
if (num > 21) {
  console.log("Can go out");
} else {
  console.log("Cannot go out");
}

const day = "Monday";
const hour = "19";
if (day == " Monday" && hour >= 8 && hour <= 17) {
  console.log("It's a working day/time");
} else if (day == " Tuesday" && hour >= 8 && hour <= 17) {
  console.log("It's a working day/time");
}

const role = "student";

if (role === "student") {
  console.log("Student is loggen in");
} else if (role === "manager") {
  console.log("Manager is loggen in");
} else if (role === "tm") {
  console.log("TM is loggen in");
} else {
  console.log("User not found");
}
//___Assignment Use the ternary operator to account for canvas roles

switch (role) {
  case "student":
    console.log("Student is logged in");
  case "manager":
    console.log("Manger is logged in");
    break;

  default:
    console.log("User not found");
}

// Repetition
let count = 10;
while (count > 0) {
  console.log(`I must pass ${count + 1}`);
  count--;
}
console.log(count);

// do/while -> runs at least once
let countTwo = 6;
do {
  console.log("Running");
  countTwo++;
} while (countTwo < 5);
console.log(countTwo);


const emails = ['vincent@gmail.com', 'kimani@gmail.com', 'Macharia@gmail.com'];
let emailCount = 0;
while (emailCount < emails.length) {
    console.log(`Sending email to ${emails[emailCount]}`);
    emailCount++;
}

/**
 * Null -> intetionally represent an absent value whose value can be assigned later on
 * Undefined -> not yet assigned any value
 * 
 * Arrays -> Lists  of values , we use the square s
 * The values can be of any data type
 */

// Null
let passenger = 'null';

// Undefined
let data;

// Objects - collection of related data consisting of key value pairs called properties and are seperated by a comma
const user = {
    name: "kimani",
    age: "19",
    height:"187",
}
console.log(user);