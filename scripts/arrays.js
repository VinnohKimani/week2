const user = {
  name: "Vincnent Kimani",
  address: {
    county: "Kiambu",
    subCounty: "Juja",
  },
};
console.log(user.address.county);
console.log(user[`address`][`subCounty`]);

user[`age`] = 19;
console.log(user);

const students = [
  `Paul`,
  `Anna`,
  `Sharon`,
  `James`,
  [`red`, `green`, { colorName: `blue` }],
];
console.log(students);

console.log(students[4][2][`colorName`]);
students[4] = "Nelson";
students.splice(2, 0, "Bildad", "Denise", "George");
// students.splice(2, 1);

// Arrray methods
// --->Mutating array methods
//----(Push, Shift, Pop, Unshift)----

const colors = ["Red", "Green", "Blue"];
/**
 * Adding elements
 */
// 1. Push method ---> elements at the end of an array
console.log(colors);
colors.push(`Green`, `yellow`);
console.log(colors);

// 2. .unshift --. one or to elements at the beginning of an array
colors.unshift(`White`, `Purple`);
console.log(colors);
/**
 * Removing elements
 */

// 1. .pop---> Removes the last element at the end of an array
colors.pop();
console.log(colors);

const deletedColor = colors.pop();
console.log(deletedColor);
// .shift --> Removes elements at the begining of an array
colors.shift();
console.log(colors);
const deletedColor2 = colors.shift();
console.log(deletedColor2);

/**
 * Slice and splice
 */
// Slice --non-destructive method (Does not mutate the original array)
// Allows us to make a copy of an array
// Delete elements in an array

const copyOfColors = colors.slice();
console.log(copyOfColors);
// Spread Operator(...)-> Makes a copy too
const secondCopyOfColors = [...copyOfColors];

const deletedColor3 = colors.slice(0);
console.log(deletedColor);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const deletedNumbers = numbers.slice(-5, -2);
console.log(deletedNumbers);
console.log(numbers);

// Splice  Method --->Destructive method(mutates the original array)
// Allows us to delete the elements
// Allows us to add new elements
//     The second arguement should always be 0
// Allows us to delete elements
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", " Fri", "Sat"];
console.log(days);
const deletedDays = days.splice(3, 3);
console.log(deletedDays);
console.log(days);

console.log(students);

const months = ["Jan", "Feb", "March"];
console.log(months);
months.splice(3, 0, "April", "May", "June");
console.log(months);
console.log(months.length);

console.log(months.splice(2, 2, "March16th"));
console.log(months);
