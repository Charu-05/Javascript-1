// // 1.Find the largest among 2 numbers 1.
// let a = 10;
// let b = 20;
// let num= Math.max(a, b)
// console.log(The largest number is: ${num})

// // 2.Sign of product of 3 numbers (output "+"/"-"/"0")
// function sign_of_product(a,b,c) {
//   let product=a*b*c
//   if (product>0) {
//     return "+"}
//   else if (product<0) {
//     return "-"}
//   else{
//   return "0"
//     }
// }
// console.log(sign_of_product(2, -3, 4))
// console.log(sign_of_product(0, 3, -2))
// console.log(sign_of_product(-1, -2, 3))
   
// // 3.Sort three numbers in descending order 
// let a = 7, b = 2, c = 10;
// let first, second, third;
// switch (true) {
//   case (a >= b && b >= c):
//     [first, second, third] = [a, b, c];
//     break;
//   case (a >= c && c >= b):
//     [first, second, third] = [a, c, b];
//     break;
//   case (b >= a && a >= c):
//     [first, second, third] = [b, a, c];
//     break;
//   case (b >= c && c >= a):
//     [first, second, third] = [b, c, a];
//     break;
//   case (c >= a && a >= b):
//     [first, second, third] = [c, a, b];
//     break;
//   case (c >= b && b >= a):
//     [first, second, third] = [c, b, a];
//     break;
//   default:
//     console.log("Unexpected input");
// }
// console.log(first, second, third)

// // 4.Largest among five numbers 
let a = 10, b = 25, c = 7, d = 42, e = 15;
let max = Math.max(a, b, c, d, e)
console.log("Largest number is:", max)

// // 5.Check if a number is positive/negative/zero, then if positive, check even or odd 
let num = 7
if (num > 0) {
  console.log("Positive");
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// // 6.Grade calculator: numeric score → letter grade (A/B/C/D/F) 
let score = 85
let grade
if (score >= 95 && score <= 100) {
  grade = "A"
} else if (score >= 85 && score < 95) {
  grade = "B"
} else if (score >= 75 && score < 85) {
  grade = "C"
} else if (score >= 65 && score < 75) {
  grade = "D"
} else if (score >= 0 && score < 65) {
  grade = "F"
} else {
  grade = 'Invalid score'
}
console.log(`Score: ${score}, Grade: ${grade}`);

// // 7.Day-of-week: map 0–6 to names using switch 
let day = new Map([
  [0, 'Sunday'],
  [1, 'Monday'],
  [2, 'Tuesday'],
  [3, 'Wednesday'],
  [4, 'Thursday'],
  [5, 'Friday'],
  [6, 'Saturday']
])

function getDayNameMap(dayNumber) {
  return day.get(dayNumber) || "Invalid number"
}

console.log(getDayNameMap(3))

let sentence="Charumathi is worst girl"
console.log(sentence.split("").reverse().join(""))