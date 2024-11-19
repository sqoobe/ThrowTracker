// document.getElementById("count").innerText = 5;

// let count = 0;

// console.log(count);

/*
// document.getElementById("count").innerText = 5

let count = 5
count = count + 1
console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50

console.log(bonusPoints)
// Decrease it down to 25, and then finally increase it to 70

bonusPoints = bonusPoints - 75

console.log(bonusPoints)

bonusPoints = bonusPoints + 45

console.log(bonusPoints)
// Console.log the value after each step


*/

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//   console.log("button was clicked");
// }

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function myLogger(){
//     console.log(42)
// }

// myLogger()

// LAP INCREMENT
// let lapsCompleted = 0

//  Create a function that increments the lapsCompleted variable with one
//  Run it three times

// function lapCompleted(){
//     lapsCompleted = lapsCompleted +1

// }
// lapCompleted()
// lapCompleted()
// lapCompleted()
// console.log(lapsCompleted)

// change the count-el in the HTML to reflect the new count
/*
let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
  console.log(count);
}
*/
// grab the count-el element, store it in a countEl variable
// let countEl = document.getElementById("count-el");
// let count = 0;

// function increment() {
//   count = count + 1;

//   // set countEl's innerText to the count
//   countEl.innerText = count;
// }

// let countEl = document.getElementById("count-el");
// let count = 0;

// function increment() {
//   count = count + 1;
//   countEl.innerText = count;
// }

// // 1. Create a function, save(), which logs out the count when it's called

// function save() {
//   console.log(count);
// }

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contains the two strings
// Log myGreeting to the console

// let name = "Jacob H"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name

// console.log(myGreeting)

let saveEl = document.querySelector("#save-el");
let countEl = document.querySelector("#count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
