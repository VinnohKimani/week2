/**
 * Scope -> Mostly comes into  play when dealing with variables
 * Global scope & Local scope
 *
 */

let firstName = "James";

// In this function, a local scope is created where we are able
//  to even reuse varriable names that are already in use in the
//   global scope
function lunch() {
  // We are dealing with parameters, js auto assigns them the let keyword
  // which means we can reassign but not redeclare the same variables inside the function

  // const firstName = "Kimani";
  console.log(firstName);
  firstName = "kimani";
  if (true) {
    // var doesn't respect the scope principle which means 
    // it exposes local varriables to the outer scope
    let lastName = "Macharia";
    console.log(lastName);
  }
  // Variables inside the local scope are usually prioritized before
  //    global scope
  // We can be able to access global varriables inside local scopes
  console.log(`${firstName} is prepairing some Lunch`);
}
console.log(firstName);

lunch();

console.log(firstName);

