// Just a tests. I don't think that i should wrote comments here
import { missedNumber } from "./index.js";
console.log("Test 1");
console.log("Input: [0, 2, 3, 4]. Output: 1");
const test1 = missedNumber([0, 2, 3, 4], 0);
console.log(`Result: ${test1}. ${test1 === 1 ? "Success" : "Failed"}`);

console.log("Test 2");
console.log(
  "Input: [0, 1, 2, 3, 4]. Output: There are no missing values ​​in the sequence"
);
const test2 = missedNumber([0, 1, 2, 3, 4], 0);
console.log(
  `Result: ${test2}. ${
    test2 === "There are no missing values ​​in the sequence"
      ? "Success"
      : "Failed"
  }`
);

console.log("Test 3");
console.log("Input: [0, 1, 2, 3, 4, 'b', 6]. Output: Bad Data");
const test3 = missedNumber([0, 1, 2, 3, "b", 6], 0);
console.log(`Result: ${test3}. ${test3 === "Bad Data" ? "Success" : "Failed"}`);

console.log("Test 4");
console.log("Input: [5, 0, 1, 3, 2]. Output: 4");
const test4 = missedNumber([5, 0, 1, 3, 2], 0);
console.log(`Result: ${test4}. ${test4 === 4 ? "Success" : "Failed"}`);

console.log("Test 5");
console.log("Input: [7, 9, 10, 11, 12]. Output: 8");
const test5 = missedNumber([7, 9, 10, 11, 12], 0);
console.log(`Result: ${test5}. ${test5 === 8 ? "Success" : "Failed"}`);
