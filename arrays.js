// Creating an array with a fixed size of 3
let arr = new Array(3);
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;

// Adding a value at index 10, leaving empty (sparse) indexes in between
arr[10] = 10;
console.log(arr); // Output: [1, 2, 3, <7 empty items>, 10]

// ----------------------------------------------

// Finding the sum of elements in an array
let arr1 = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum = sum + arr1[i];
}
console.log(sum); // Output: 150

// ----------------------------------------------

// Finding the maximum number in an array
let arr2 = [101, 20, 3, 4, 2, 5, 6, 100];
let max = arr2[0]; // Assume the first element is the largest

for (let i = 1; i < arr2.length; i++) {
  if (max < arr2[i]) {
    max = arr2[i]; // Update max if a larger value is found
  }
}
console.log(max); // Output: 101

// ----------------------------------------------

// Finding the minimum number in an array
let arr3 = [101, 20, 3, 4, 0, 5, 6, 100];
let min = arr3[0]; // Assume the first element is the smallest

for (let i = 1; i < arr3.length; i++) {
  if (min > arr3[i]) {
    min = arr3[i]; // Update min if a smaller value is found
  }
}
console.log(min); // Output: 0

// ----------------------------------------------

// Finding the second largest number in an array
let arr4 = [100, 20, 3, 4, 0, 5, 6, 100];

// Initializing first and second max values
let fmax = Math.max(arr4[0], arr4[1]);
let smax = Math.min(arr4[0], arr4[1]);

for (let i = 2; i < arr4.length; i++) {
  if (arr4[i] > fmax) {
    smax = fmax; // Previous max becomes second max
    fmax = arr4[i]; // Update first max
  } else if (arr4[i] > smax && fmax != arr4[i]) {
    smax = arr4[i]; // Update second max if greater than current second max
  }
}
console.log(smax); // Output: 20

// ----------------------------------------------

// Copying an array to a new array (but the loop has an issue)
// let arr5 = [100, 20, 3, 4, 0, 5, 6, 100];
// let temp = new Array(arr5.length);
// let j = 0;

// // This loop has a syntax issue, it should be corrected as follows:
// for (let i = 0; i < arr5.length; i++) {
//   temp[j] = arr5[i]; // Copying elements one by one
//   j++;
// }
// console.log(temp); // Output: [100, 20, 3, 4, 0, 5, 6, 100]

// ----------------------------------------------

// Reversing an array in-place
let arr6 = [10, 20, 30, 40, 50];
let i = 0, j = arr6.length - 1;

// Loop until the middle of the array is reached
while (i < j) {
  // Swap elements at i and j
  let temp = arr6[i];
  arr6[i] = arr6[j];
  arr6[j] = temp;

  i++; // Move forward
  j--; // Move backward
}
console.log(arr6); // Output: [50, 40, 30, 20, 10]

// ----------------------------------------------

// Sorting 0s and 1s in an array (moving all 0s to the left)
let arr7 = [1, 1, 0, 1, 0, 1, 1, 0, 0];

i = 0, j = 0; // i traverses the array, j keeps track of the position of 0s

while (i < arr7.length) {
  if (arr7[i] == 0) {
    // Swap the current 0 with the leftmost 1 found
    let temp = arr7[i];
    arr7[i] = arr7[j];
    arr7[j] = temp;
    j++; // Move j forward to track the next 0 placement
  }
  i++;
}
console.log(arr7); // Output: [0, 0, 0, 0, 1, 1, 1, 1, 1]
