// alert("Welcome to 2nd Batch");
// document.write("Welcome to 2nd Batch");
// console.log("Welcome to 2nd Batch");

// var x; 
// let y;
// const z = 10;
// a = 12;

/*x = 10.1;
y = 20; */
//z = x + y;
// console.log("Welcome to our class");
// console.log("z");
// console.log("The sum of x and y is " + z);

// console.log("The sum of " + x + " and " + y + " is " + z);

// var a = "Hello";
// var b = [1, 2, 3, 4, 5];
// var c = ["Apple", "Banana", "Orange", "Grapes"];

// Add element to end of the array
// c.push("Mango");

// console.log(c);

// var x = "10";
// var arry = [1, 2, 3, 4, 5];
// console.log(typeof arry);
// array => index: value
// object => key: value
// var obj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };
// console.log(typeof obj);
// console.log(arry[2]);
// console.log(obj.lastName);

// var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var array1 = ["Apple", "Banana", "Orange", "Grapes"];
// console.log(arry);
// Add element at the end of the array
// arry.push("Mango");
// console.log(arry);

// Remove element from the end of the array
// arry.pop();
// console.log(arry);

// Remove element from the beginning of the array
// arry.shift();
// console.log(arry);

// Add element at the beginning of the array
// arry.unshift("Mango");
// console.log(arry);

// splice: remove element from the array
// splice(index, no of elements to be removed)
// arry.splice(2, 1);
// console.log(arry);

// Slice: copy the array
// slice(start index, end index)
// var newArray = arry.slice(3, 5);
// console.log(newArray);

// var x = 2;

// if (x == 2) {
//   console.log("x is 2");
// } else if (x == 3) {
//   console.log("x is 3");
// } else {
//   console.log("x is not 2 or 3");
// }

// Find positive and negative number
// var y = 4;
// if (y > 0) {
//   console.log("y is positive");
// } else {
//   console.log("y is negative");
// }

// Find grade
// var result = 32;
// if (result >= 80) {
//   console.log("A+");
// } else if (result >= 70 && result < 80) {
//   console.log("A");
// } else if (result >= 60 && result < 70) {
//   console.log("A-");
// } else if (result >= 50 && result < 60) {
//   console.log("B");
// } else if (result >= 40 && result < 50) {
//   console.log("C");
// } else if (result < 40 && result > 33) {
//   console.log("D");
// } else if (result < 33) {
//   console.log("F");
// }

// Find odd or even number
// var x = 111112;
// // 10 % 2 = 0
// if (x % 2 == 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// loop: 1-100

// var x = 100;

// for (var i = 1; i <= x; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
//   console.log(i);
// }

// Find leap year
// var year = 2020;
// if (year % 4 == 0) {
//   console.log("Leap year");
// } else {
//   console.log("Not a leap year");
// }

// Functions: build-in Function and user-defined functions
// Build-in Function: log(), alert(), prompt(), confirm(), typeof(), push(), pop(), slice(), splice(), join(), split(), sort(), reverse(), toString(), parseInt(), parseFloat(), Math()

function sumOfTwoNumber(x, y) {
  var sum = x + y;
  console.log(sum);
}

sumOfTwoNumber(15, 20);
// sumOfTwoNumber(50, 20);

var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
console.log(num1);
console.log(num2);
// num1.addEventListener("change", function () {});
