/*
let v = "vivek";
console.log(v.length);
console.log(v.slice(0, 3));
console.log(v.slice(-5, v.length));
console.log(v.substring(0, 3));
console.log(v.toLocaleUpperCase());
console.log(v.toLocaleLowerCase());
console.log(v.charCodeAt());
console.log(v.toLowerCase());
console.log(v.concat("_", " kumar"));
console.log(v.trim());
console.log(v.charAt(3));

*/
/*

let s = prompt("Enter a string");
let ispalindrome = true;
let i = 0;
j = s.length - 1;
while (i < j) {
  if (s.charAt(i) != s.charAt(j)) {
    ispalindrome = false;
    break;
  }
  i++;
  j--;
}
if (ispalindrome) console.log("pallindrome");
else console.log("no pallindrome");
*/



/*
let s = prompt("Enter a string");
console.log(s);
let toggle = "";
for (let i = 0; i < s.length - 1; i++) {
  let ch = s.charCodeAt(i);

  if (ch >= 65 && ch <= 90) {
    toggle = toggle + String.fromCharCode(ch + 32);
  } else if (ch >= 97 && ch <= 122) {
    toggle = toggle + String.fromCharCode(ch - 32);
  }
}
console.log(toggle);
*/

/*
let s = prompt("Enter a number");

let arr = new Array(128).fill(0);

for (let i = 0; i < s.length; i++) {
  let indx = s.charCodeAt(i);
  arr[indx] = arr[indx] + 1;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(String.fromCharCode(i) + " appears at " + arr[i] + " times");
  }
}
  */

/*
let arr = [1, 2, 3, 4, 5];
let copy = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = copy;
console.log(arr);

for (let j = 1; j <= 4; j++) {
  console.log(j + " execution");

  for (let i = 1; i <= 3; i++) {
    console.log("Hello");
  }
}
*/
/*

*****
*****
*****
*****
*****
*/

// let n = 5;
// for (i = 0; i < n; i++) {
//   for (j = 0; j < n; j++) {
//     document
//   }
//   console.log("");
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let space = "";
//   for (let j = 1; j <= n; j++) {
//     space += "*";
//   }
//   console.log(space);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let space = "";
//   for (let j = 1; j <= i; j++) {
//     space += "*";
//   }
//   console.log(space);
// }
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let space = "";
//   for (let j = 1; j <=n-i+1; j++) {
//     space += "*";
//   }
//   console.log(space);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let space = "";
//   for (let j = 1; j <= i; j++) {
//     space += j;
//   }
//   console.log(space);
// }

/*

let n = 5;
for (let i = 1; i <= n; i++) {
  let space = "";
  for (let j = 1; j <= n - i + 1; j++) {
    space += j;
  }
  console.log(space);
}

//leap year

let year = prompt("Enter a year ");

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

*/
