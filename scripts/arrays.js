/**
 * Array iteration --> running a statement once for each element
 *
 */
let count = 0;
const days = ["Mon", "Tue", "Wed", "Thur", "Fri"];
console.log(days.length);
console.log(days[2]);
console.log(days[count]);

while (count < days.length) {
  console.log(count);
  console.log(days[count]);
  count++;
}

console.log(count);
console.log("  ");

//  For loop
for (let count = 0; count < days.length; count++) {
  console.log(count);
  console.log(days[count]);
}
console.log(" ");
const user = {
  age: 30,
  lastName: "Kimani",
};

for (const key in user) console.log(user[key]);
console.log(" ");
// this one can not give  the index of the array
for (const day of days) {
  console.log(day);
}
console.log(" ");

// 1. Index(of)-->finds the position(index) of a given element
//       or returns -1 if not found
const positionOfThur = days.indexOf("Thur");
console.log(positionOfThur);
console.log(" ");

// 2.find() --> returns the first element is an array that meets a given conditon
const day = days.find(function (day, index) {
  if (index == 2) {
    return day;
  }
});
console.log(day);
console.log(" ");

const scores = [34, 59, 63, 87, 54];
const scoreAbove60 = scores.find((score) => {
  if (score > 60) {
    return score;
  }
});
console.log(scoreAbove60);
console.log(" ");

function filterScoreAbove80(score) {
  if (score > 80) {
    return score;
  }
}
const scoreAbove80 = scores.find(filterScoreAbove80);
console.log(scoreAbove80);

console.log(" ");

// 3. filter() --> find and returns a list of elements that meet a given condition
const scoresAbove60 = scores.filter((score) => {
  if (score > 60) {
    return score;
  }
});
console.log(scores);
console.log(scoresAbove60);

console.log(" ");

// .map(), .reduce(),

// .map()--> allows us to iterate over the array while running a modifying function
//  and returns the modified array.

const students = ["ian", "daud", "eugene"];

const modifiedStudents = students.map((students) => students.toUpperCase());
console.log(modifiedStudents);
console.log(students.map(capitalizeName));

console.log(" ");

const name = "vincent";
function capitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
  return name.replace(name.charAt(0), name.charAt.toUpperCase);
}
console.log(capitalizeName("vincent"));
console.log(capitalizeName("eugene"));

console.log(" ");

const newStudents = [
  { id: 1, name: "sharon" },
  { id: 2, name: "vincent" },
  { id: 3, name: "john" },
];
const modifiedNewStudents = newStudents.map((student) => {
  return {
    ...student,
    name: student.name.toUpperCase(),
  };
});

console.log(modifiedNewStudents);
console.log(" ");

const modifiedNewStudents1 = newStudents.map((student) => {
  return {
    ...student,
    name: student.name.charAt(0).toUpperCase() + name.slice(1),
  };
});

console.log(modifiedNewStudents1);

console.log(" ");

const modifiedNewStudents2 = newStudents.map((student) => {
  return {
    ...student,
    name: capitalizeName(student.name),
  };
});
console.log(modifiedNewStudents2);

console.log(" ");

// .reduce--- allows us to  create an agregate
const numbers = [1, 2, 3, 4, 5, 34, 53, 3, 44, 23];
const sumOfNumbers = numbers.reduce((prev, curr) => {
  console.log(prev);
  console.log(curr);
  return prev + curr;
});
console.log(" ");
const largestNum = numbers.reduce(
  (prev, curr) => (prev > curr ? prev : curr),
  0
);
console.log(largestNum);
console.log(" ");
console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

console.log(sumOfNumbers);

// forEach-iterates 
students.forEach((student, index) => {
  console.log(index)
  console.log(student)
})

// sort, split + join
console.log(Array.isArray(students))