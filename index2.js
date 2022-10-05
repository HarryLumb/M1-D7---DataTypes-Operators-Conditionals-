// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let male = true;
let isMale = male ? "male" : "female";
console.log(isMale);

//gender1 = 'male'
//gender2 = 'female'

//let isMale = gender1 ? 'male' : true;
//console.log(isMale) //

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let num5 = 5;
let num3 = 6;

if (
  num5 === 8 ||
  num3 === 8 ||
  num5 - num3 === 8 ||
  num3 - num5 === 8 ||
  num5 + num3 === 8
) {
  console.log(true);
} else {
  console.log(false);
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let string1 = "Hi";
let string2 = " Mate";
let stringSum = string1 + string2;
console.log(stringSum);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let x = 1;
let y = 2;
let z = 3;
if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(z + ", " + y + ", " + x);
  }
}
/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let firstNum = 6;
let secondNum = 20;
let average = (firstNum + secondNum) / 2;
console.log(average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/
let word1 = "short";
let word2 = "longest";

if (word1.length > word2.length) {
  console.log(word1, "is the longer word");
} else if (string2.length > string1.length)
  console.log(word2, "is the longer word");

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/
let data = 8;
console.log(typeof data === "number" && data % 1 == 0);

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/
function percentage(num, per) {
  return (num / 100) * per;
}

console.log(percentage(400, 20));
/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let num1 = 9;
if (num1 % 2 === 0) {
  console.log("This number is even");
} else {
  console.log("This number is Odd");
}
