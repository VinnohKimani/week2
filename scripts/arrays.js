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

// Arrray methods
// --->Mutating array methods
//----(Push, Shift, Pop, Unshift)----

const colors = ["Red"];
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
