/**
 * Problem: Two Sum leet code #1
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to the target.
 * Each input has exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */
// Function to find the two indices
function twoSum(nums, target) {
  const map = new Map(); // Initialize map to store value -> index
  for (let i = 0; i < nums.length; i++) {
    const complete = target - nums[i]; // Check if the complement exists
    if (map.has(complete)) {
      return [map.get(complete), i];   // If found, return the pair of indices
    }
    map.set(nums[i], i); // Store the current value with its index
  }

  return []; // No solution found (though problem says one always exists)
}

// Test cases
const result1 = twoSum([2, 7, 11, 15], 9);   // Expected: [0, 1]
const result2 = twoSum([3, 2, 4], 6);        // Expected: [1, 2]
const result3 = twoSum([3, 3], 6);           // Expected: [0, 1]

// Print the results
console.log("Test Case 1:", result1);
console.log("Test Case 2:", result2);
console.log("Test Case 3:", result3);

/*
✅ LeetCode #121 – Best Time to Buy and Sell Stock
🔸 Problem Statement (Hinglish):
Aapko ek array diya gaya hai prices[], jisme prices[i] ka matlab hai:
"i-th din pe stock ka price kya tha?"

Aapko bas ek hi baar stock kharidna hai aur ek baar bechna hai (future me kisi din).
Maximum profit nikalna hai.

Agar profit possible hi nahi, to return 0.*/



