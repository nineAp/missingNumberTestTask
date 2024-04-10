// The number of function arguments was not specified in the technical specifications. I used "iteration" argument for further expansion maybe or something like this
// Linear progression I took as constant for this task. By this I mean i+1 like in tech specification
export function missedNumber(arr, iteration) {
  if (iteration === 0) {
    // if it is first iteration i sort array from least to most value. This used for save hardware resources
    // Js Array.prototype.sort method is already worked like a Timsort - the fastesh alghoritm for sort array in the current moment indepedently from size of this
    arr = arr.sort((a, b) => a - b); // sort array
    const isNumbersOnly = arr.every((item) => typeof item === "number"); // check if it have only numbers
    if (!isNumbersOnly) {
      return "Bad Data"; // it is like a bad exception, but i used to do like a expected result
    }
  }
  // take a first element of array
  let number = arr[0];
  // if array not includes a first number of array + 1 (linear progression) this is missed number and i return this
  if (!arr.includes(number + 1)) {
    return number + 1;
  }
  // removed first element for check next (on next iteration it'll take a first el of array again and check it with next el)
  arr.shift();
  if (arr.length === 1) {
    // if arr length === 1 on this stage it mean that the number was not skipped in the sequence and i'll take it like a expected result too and return this
    return "There are no missing values ​​in the sequence";
  }
  // I'm returning recursive a updated array without [0] el and add +1 to iteration for skip top block in this function in next iterations
  return missedNumber(arr, iteration + 1);
}

// you can run node test.js for check result with different data
// Result: I think it works correctly. I wrote a recursive function for this task and save a hardware resources by iteration argument
// Here we can also add 3rd argument like a progression (1, 2, 3, 4) for expand function possibilities
