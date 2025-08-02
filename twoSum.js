/**
 * Problem: Two Sum leet code #1
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to the target.
 * Each input has exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */
// Function to find the two indices
// function twoSum(nums, target) {
//   const map = new Map(); // Initialize map to store value -> index
//   for (let i = 0; i < nums.length; i++) {
//     const complete = target - nums[i]; // Check if the complement exists
//     if (map.has(complete)) {
//       return [map.get(complete), i]; // If found, return the pair of indices
//     }
//     map.set(nums[i], i); // Store the current value with its index
//   }

//   return []; // No solution found (though problem says one always exists)
// }

// // Test cases
// const result1 = twoSum([2, 7, 11, 15], 9); // Expected: [0, 1]
// const result2 = twoSum([3, 2, 4], 6); // Expected: [1, 2]
// const result3 = twoSum([3, 3], 6); // Expected: [0, 1]

// // Print the results
// console.log("Test Case 1:", result1);
// console.log("Test Case 2:", result2);
// console.log("Test Case 3:", result3);

/*
✅ LeetCode #121 – Best Time to Buy and Sell Stock
🔸 Problem Statement (Hinglish):
Aapko ek array diya gaya hai prices[], jisme prices[i] ka matlab hai:
"i-th din pe stock ka price kya tha?"

Aapko bas ek hi baar stock kharidna hai aur ek baar bechna hai (future me kisi din).
Maximum profit nikalna hai.

Agar profit possible hi nahi, to return 0.*/

// function maxProfit(prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//     } else {
//       const profit = prices[i] - minPrice;
//       maxProfit = Math.max(maxProfit, profit);
//     }
//   }
//   return maxProfit;
// }
// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected: 5 (Buy on day 2 at 1 and sell on day 5 at 6)
// console.log(maxProfit([7, 6, 4, 3, 1]));
// console.log(maxProfit([2, 4, 1]));
// console.log(maxProfit([3, 2, 6, 5, 0, 3]));

/*
✅ LeetCode #217 – Contains Duplicate
🔸 Problem Statement (Hin+Eng):
Aapko ek integer array nums diya gaya hai.
Aapko check karna hai:

❓ Kya array me koi element repeat ho raha hai?

Agar haan (duplicate hai), to true return karo,
nahi to false.
*/

// function containsDuplicate(nums) {
//   const seen = new Set();

//   for (let num of nums) {
//     if (seen.has(num)) {
//       return true; // duplicate mil gaya
//     }
//     seen.add(num); // add current number
//   }
//   return false; // loop ke baad bhi kuch nahi mila
// }

// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

/*
 LeetCode #53 – Maximum Subarray
🔸 Problem Statement (Hin + Eng):
Aapko ek integer array nums[] diya gaya hai (positive, negative, zero mix).

Aapko ek contiguous (lagataar) subarray choose karna hai jiska sum maximum ho, aur uska sum return karna hai.

🔍 Subarray matlab: Array ka continuous part.
Jaise: [−2,1,−3,4,−1,2,1,−5,4] ka ek subarray ho sakta hai [4,−1,2,1]


✅ Kadane’s Algorithm – O(n) Time, O(1) Space
📘 Logic in Hinglish:
Hum 2 variable maintain karte hain:

currentSum – ab tak ka running subarray sum

maxSum – ab tak ka sabse bada subarray sum

Har number pe check karte hain:

Kya current number lena hi better hai?

Ya previous sum + current number?

currentSum = Math.max(num, currentSum + num)

Phir maxSum update karte jaate hain:

maxSum = Math.max(maxSum, currentSum)
*/

// function maxSubArray(nums) {
//   let currentSum = nums[0];
//   let maxSum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   return maxSum;
// }

// console.log(maxSubArray([-2, 1, -3, 4 - 1, 2, 1, -5, 5]));
// console.log(maxSubArray([1]));
// console.log(maxSubArray([5, 4, -1, 7, 8]));
// console.log(maxSubArray([-1, -2 - 3 - 4]));

/*
✅ LeetCode #152 – Maximum Product Subarray
🔸 Problem Statement (Hin + Eng):
Aapko ek integer array nums[] diya gaya hai.
Aapko us contiguous (lagataar) subarray ka maximum product return karna hai.

🔍 Subarray = lagataar elements
⚠️ Note: Product can become large or negative

Input: nums = [2, 3, -2, 4]
Output: 6

// Explanation: [2, 3] → product = 6

Input: nums = [-2, 0, -1]
Output: 0

// Explanation: [-2, 0, -1] → max product = 0

*/

// function maxProduct(nums) {
//   let maxProduct = nums[0];
//   let minProduct = nums[0];
//   let result = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     let curr = nums[i];

//     let tempMax = maxProduct;

//     maxProduct = Math.max(curr, curr * maxProduct, curr * minProduct);
//     minProduct = Math.min(curr, curr * tempMax, curr * minProduct);

//     result = Math.max(result, maxProduct);
//   }
//   return result;
// }

// console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 0, -1]));
// console.log(maxProduct([-2, 3, -4]));
// console.log(maxProduct([0, 2]));
// console.log(maxProduct([-1, -3, -10, 0, 60]));

/*
✅ LeetCode #153 – Find Minimum in Rotated Sorted Array
🔸 Problem Statement (Hin + Eng):
Aapko ek sorted and rotated array diya gaya hai nums[] — jisme distinct elements hote hain.

Aapko minimum element find karna hai.
O(log n) time me karna hai — iska matlab: use Binary Search.

🔹 Example:
js
Copy code
Input: nums = [3, 4, 5, 1, 2]
Output: 1

Input: nums = [4, 5, 6, 7, 0, 1, 2]
Output: 0

Input: nums = [11, 13, 15, 17]
Output: 11
🔍 Key Concepts:
Array originally sorted hota hai: [1, 2, 3, 4, 5]

Rotate karne ke baad ban jaata hai: [4, 5, 1, 2, 3]

Minimum element rotation point pe hota hai

💡 Binary Search Se Karna Hai:
Binary search ka logic apply karna hoga:

Agar mid element > right element → minimum right side me hoga

Else → minimum left side me (including mid)


*/

// function findMin(nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] > nums[right]) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   return nums[left];
// }

// console.log(findMin([3, 4, 5, 1, 2]));
// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
// console.log(findMin([11, 13, 15, 17]));
// console.log(findMin([1]));
// console.log(findMin([2, 1]));

/*

✅ LeetCode #33 – Search in Rotated Sorted Array
🔸 Problem Statement (Hin + Eng):
Aapko ek sorted but rotated array diya gaya hai nums[]
Aur ek target number diya gaya hai.

Aapko batana hai:

Target array me kis index pe hai?
Agar nahi mila → return -1

❗ Condition:
Array me distinct integers hain

Time complexity = O(log n) → binary search ka use karna padega

🔹 Example:
js
Copy code
Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
Output: 4   // index of 0

Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
Output: -1  // 3 is not in array

Input: nums = [1], target = 0
Output: -1
🔍 Logic (Hin + Eng):
Binary search apply karenge lekin kuch changes ke sath, kyunki array rotated hai:

Har iteration me check karo:

nums[mid] == target → ✅ return mid

Decide karo kaunsa half sorted hai:

Agar nums[left] <= nums[mid] → Left half sorted

Check karo: target left half me hai ya nahi

Else → Right half sorted

Check karo: target right half me hai ya nahi
// */

// function search(nums,target){
//   let left =0;
//    let right =nums.length-1;
//    while (left <= right){
//     let mid = Math.floor((left+right)/2);

//     if(nums[mid] === target )
//       return mid;

//     // check if left half is sorted

//     if(nums[left] <= nums[mid]){
//       if(targer >= nums[left] && target < nums[mid]){
//         right = mid -1;

//       }
//       else{
//         left = mid +1;
//       }
//     }

//     // check if right half is sorted

//     else{
//       if(target > nums[mid] && target <= nums[right]){
//         left = mid +1;

//       }else{
//         right = mid -1;
//       }
//     }
//    }
//   return -1; // target not found
// }

// for(let i=1; i<101; i++){
//   console.log("vivek");
// }

// let i = 1;
// while (i < 101) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 101);

for(let i=1; i<202; i++){
  console.log(i);
  if(i ==32 ){
    break;
  }
}
