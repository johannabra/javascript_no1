//1
// A const is a variable which cannot be re-assigned. Below you have a `const`
// variable called `fruit` which is assigned the value "Apple".
//
// Your task is to re-assign the `fruit` variable to "Orange" by re-assigning
// the fruit variable a new value (so first it should be set to "Apple", and
// then on another line, it should be assigned "Orange").

//const fruit = "Apple"
let fruit = "Apple";

fruit = "Orange";

// To complete this task, you should see "The fruit is Orange" in the console.
console.log("The fruit is", fruit);

//2
// JavaScript supports the following math operators:
//
//   Add: +
//   Subtract: -
//   Multiply: *
//   Divide: /
//
// For each task below, add a line beneath the task with your answer.

// Task 1: Inside of a console.log(), add 3.5 to your age:

const age = 36;
console.log("min ålder plus 3: ", age + 3.5);
// Task 2: Inside of a console.log(), take the current year and subtract 1969:
const yearNow = 2023;

console.log("detta år minus 1969: ", yearNow - 1969);
// Task 3: Inside of a  console.log(), divide 65 by 240:
const num = 65 / 240;
console.log("dividering ", num);
// Task 4: Inside of a  console.log(), multiply 0.2708 by 100:
console.log("multiplikation ", num * 100);

//3
// JavaScript includes many built-in methods which provide
// functionality on the core types we've been using so far.
//
// You can invoke these methods by using a . and then the method name
// followed by parenthesis. For example, to make a string uppercase,
// you could use .toUpperCase() like this:
console.log("Hello world!".toUpperCase()); // prints "HELLO WORLD!"

// Task 1: Use console.log to print your name in uppercase
const myName = "Johanna";
console.log(myName.toUpperCase());
// Task 2: Find a function from the JavaScript string documentation (link below)
//         to remove the whitespace around the string in the console.log() below.
//
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

const removeW = "    Remove whitespace   ";
console.log("    Remove whitespace   ");
console.log("tar bort :", removeW.trim());

// Task 3: Find a function in the documentation to count the number of characters in a
//         string and update the console.log() below to print the number instead of the string:
const howLongString = "How many characters long is this string?";

console.log("How many characters long is this string?");
console.log("hur lång string?", howLongString.length, "characters");

//4
// Programming is all about writing commands which computers can understand
// in a human-readable way. One of the most comman tasks we are faced with is
// decision making and that decision making often becomes the core of a program.
//
// In JavaScript, and most other programming languages, the if-statement is meant
// to be readable in a natural-language way. For example, you might say "If I'm tired,
// make coffee". This can easily be written in JavaScript in an if-statement following
// similar wording:
//
//   const developerIsTired = true
//
//   if (developerIsTired) {
//     console.log("Make coffee!")
//   }
//
// You could also handle the "developer isn't tired" case using the keyword `else`:
//
//   if (developerIsTired) {
//     console.log("Make coffee!")
//   } else {
//     console.log("Make tea!")
//   }

// Task: Below is a variable which stores the speed a car is travelling. Write an if statement
// below the varaible which prints "Slow down!" if the car is travelling above 100, or
// prints "Carry on" if it's travelling below 100.
//
// Take a look at this page on number comparison operators to see how to check if number is
// greater than or less than another number: https://www.w3schools.com/js/js_comparisons.asp

const carSpeed = 85;

if (carSpeed < 100) {
  console.log("Carry on");
} else {
  console.log("Slow Down!");
}

//5
// Conditional statements require an assertion inside the parenthesis to determine
// whether the code block (between { and }) should be run. If the assertion equates to
// `true`, then the code is run. Otherwise it is not, and if the conditional statement has
// an `else` clause, then that block of code is run instead.
//
// Take a look at the comparisons operators documentation again: https://www.w3schools.com/js/js_comparisons.asp
// and consider the "returns" column of each example. That's the key to which way the if-statement
// will go.
//
// This task requires you to use examples from that documentation to write if statements
// which either use a boolean value in the assertion, or compare two values to return
// either true or false.

// Task 1: Below is a variable which stores the word count of a blog post I'm writing.
//         Write an if-statement which logs (console.log) "Get writing!" if the number is 0.
const wordCount = 0;

if (wordCount == 0) {
  console.log("Get Writing!");
} else {
  console.log("You are amazing!");
}

// Task 2: Use the "and" logical operator (&&) to chain two assertions together. Below are two
//         variables; one which stores the current temperature, and one which stores whether
//         someone has gone for a run today. Write an if-statement which prints "Go for a run!"
//         if the current temperature is greater than 10, and the goneForARun is false.
const currentTemperature = 15;
const goneForARun = false;

if (currentTemperature > 10 && !goneForARun) {
  console.log("Go for a run!");
} else if (currentTemperature > 15 && goneForARun)
  console.log("Go eat Ice-cream!");
else {
  console.log("To cold stay home");
}

// Task 3: Using .length() to get the length of a string and the `name` variable below,
//         write an "else if" statement which prints the following:
//         * "You have a long name!" if the length of the name is greater than 10 characters long
//         * "You have a short name!" if the length of the name is less than 5 characters long
//         * "You have a medium length name!" if neither of the other two assertions is true
//
// Documentation: https://www.w3schools.com/js/js_if_else.asp
const fName = "Johannananananas";

if (fName.length < 5) {
  console.log("You have a short name!");
} else if (fName.length > 10) {
  console.log("You have a long name!");
} else {
  console.log("You have a medium lenght name!");
}

//6
// Functions are a way to store a re-usable snippet of code in a block which can
// be run later. For example, this function would print the current time when invoked:
const printCurrentTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString();
};

// Task 1: Invoke the printCurrentTime function inside a console.log():
console.log("The time is now ", printCurrentTime());
// Task 2: Write a function which, when invoked, prints your name. Then invoke it twice.

function myFirstName() {
  console.log("Johanna");
}
myFirstName(), myFirstName();

const mySecondName = () => {
  console.log("Madeleine");
};
mySecondName();

// Task 3: Write a function called `printGreeting`. When invoked using the examplesm
// below, it should print "Hello Bob" or "Hello Sue":
//
// printGreeting("Bob") // This should print "Hello Bob"
// printGreeting("Sue") // This should print "Hello Sue"

function printGreeting(word) {
  console.log("Hello " + word);
}
printGreeting("BOB");
printGreeting("SUE");

// Task 4: Write a function called `multiply` which multiplies two numbers together and returns the value
// so that it can be stored in a variable. See the example below to see how it should work.

function multiply(num1, num2) {
  return num1 * num2;
}
// const first = multiply(2, 2)

// console.log(first) // this should print "4"
//
const first = multiply(2, 2);
console.log(first);
// const second = multiply(100, 4)
// console.log(second) // this should print "400"
const second = multiply(100, 4);
console.log(second);

// Task 5: Write a function called `warmEnough` which takes the current temperature as an argument and returns
// `true` if it is greater than 10 and false otherwise. Comment out the code below to invoke the
// function. It should print "Go for a run!"
//
// if (warmEnough(15)) {
//   console.log("Go for a run!")
// }

const warmEnough = (param) => {
  if (param > 10) {
    return true;
  }
};

if (warmEnough(15)) {
  console.log("Go for a run!");
}
