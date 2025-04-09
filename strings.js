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
if(ispalindrome)console.log("pallindrome");
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



