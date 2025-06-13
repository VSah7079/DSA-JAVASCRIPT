// /*
// let v = "vivek";
// console.log(v.length);
// console.log(v.slice(0, 3));
// console.log(v.slice(-5, v.length));
// console.log(v.substring(0, 3));
// console.log(v.toLocaleUpperCase());
// console.log(v.toLocaleLowerCase());
// console.log(v.charCodeAt());
// console.log(v.toLowerCase());
// console.log(v.concat("_", " kumar"));
// console.log(v.trim());
// console.log(v.charAt(3));

// */
// /*

// let s = prompt("Enter a string");
// let ispalindrome = true;
// let i = 0;
// j = s.length - 1;
// while (i < j) {
//   if (s.charAt(i) != s.charAt(j)) {
//     ispalindrome = false;
//     break;
//   }
//   i++;
//   j--;
// }
// if (ispalindrome) console.log("pallindrome");
// else console.log("no pallindrome");
// */

// /*
// let s = prompt("Enter a string");
// console.log(s);
// let toggle = "";
// for (let i = 0; i < s.length - 1; i++) {
//   let ch = s.charCodeAt(i);

//   if (ch >= 65 && ch <= 90) {
//     toggle = toggle + String.fromCharCode(ch + 32);
//   } else if (ch >= 97 && ch <= 122) {
//     toggle = toggle + String.fromCharCode(ch - 32);
//   }
// }
// console.log(toggle);
// */

// /*
// let s = prompt("Enter a number");

// let arr = new Array(128).fill(0);

// for (let i = 0; i < s.length; i++) {
//   let indx = s.charCodeAt(i);
//   arr[indx] = arr[indx] + 1;
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     console.log(String.fromCharCode(i) + " appears at " + arr[i] + " times");
//   }
// }
//   */

// /*
// let arr = [1, 2, 3, 4, 5];
// let copy = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = copy;
// console.log(arr);

// for (let j = 1; j <= 4; j++) {
//   console.log(j + " execution");

//   for (let i = 1; i <= 3; i++) {
//     console.log("Hello");
//   }
// }
// */
// /*

// *****
// *****
// *****
// *****
// *****
// */

// // let n = 5;
// // for (i = 0; i < n; i++) {
// //   for (j = 0; j < n; j++) {
// //     document
// //   }
// //   console.log("");
// // }

// // let n = 5;
// // for (let i = 1; i <= n; i++) {
// //   let space = "";
// //   for (let j = 1; j <= n; j++) {
// //     space += "*";
// //   }
// //   console.log(space);
// // }

// // let n = 5;
// // for (let i = 1; i <= n; i++) {
// //   let space = "";
// //   for (let j = 1; j <= i; j++) {
// //     space += "*";
// //   }
// //   console.log(space);
// // }
// // let n = 5;
// // for (let i = 1; i <= n; i++) {
// //   let space = "";
// //   for (let j = 1; j <=n-i+1; j++) {
// //     space += "*";
// //   }
// //   console.log(space);
// // }

// // let n = 5;
// // for (let i = 1; i <= n; i++) {
// //   let space = "";
// //   for (let j = 1; j <= i; j++) {
// //     space += j;
// //   }
// //   console.log(space);
// // }

// /*

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let space = "";
//   for (let j = 1; j <= n - i + 1; j++) {
//     space += j;
//   }
//   console.log(space);
// }

// //leap year

// let year = prompt("Enter a year ");

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log("Leap year");
// } else {
//   console.log("Not a leap year");
// }

// */

// function reverseArray(arr) {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));

// function ispalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
// console.log(ispalindrome("madam")); // true
// console.log(ispalindrome("hello")); // false

// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([1, 2, 3, 4, 5])); // 5

// function findMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// console.log(findMin([1, 2, 3, 4, 5])); // 1

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120

// function fibonacci(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(10)); // 55

// let linkedList = {
//   value: 10,
//   next: {
//     value: 20,
//     next: {
//       value: 30,
//       next: null,
//     },
//   },
// };

// function traverseList(node) {
//   while (node) {
//     console.log(node.value);
//     node = node.next;
//   }
// }


// Write a program that cheks if a  password is strong L at aleast 8 characters long contains at least one uppercase leeter one lowercase letter and one number 

if( password.length >= 8 && 
    /[A-Z]/.test(password) && 
    /[a-z]/.test(password) && 
    /\d/.test(password)) {
  console.log("Strong password");
} else {
  console.log("Weak password");
}

