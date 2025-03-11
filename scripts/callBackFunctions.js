// Call Back Functions
// First class, js allows us to treat functions like other values
const eveningGreeting = function (firstName) {
  return `Good Evenning, ${firstName} Have a nice Day`;
};
const randomName = "Irene";
console.log(eveningGreeting(randomName));

function greeting(name, fn) {
//   return fn(name);
  return `Do you know, ${name}`;
}
const name = "Kimani";
// console.log(greeting(name));
// console.log(greeting(name, eveningGreeting));
console.log(greeting(name));

const sum = function (a, b) {
    return a + b;
}
const firstName = "10";
console.log(greeting(firstName, sum));

// constant,  lookup, assignment

function myfunction(x, y) {
    console.log(x, y);
    return x + y;
}
const numberOne = 19;
const numberTwo = 22;
myfunction(20, numberTwo);