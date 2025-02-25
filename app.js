// Declaring variables
let a = 10;
let b = 20;

// Summing a and b and printing the result
console.log("sum of 10 and 20 is :" + (a + b)); // Correct way to concatenate and sum
console.log("sum of 10 and 20 is :" + a + b); // This concatenates the string and the variables, it will not perform sum here
console.log(a + b + ":sum of 10 and 20"); // Summing first, then appending the string
console.log("1" + 1); // String "1" concatenated with number 1, resulting in "11"
console.log("1" - 1); // String "1" is coerced into a number and then subtracted, result is 0

// Variable swap using a temporary variable
let c = 10;
let d = 20;
let e;
e = c; // e stores value of c
c = d; // c gets value of d
d = e; // d gets the original value of c

console.log(c); // prints 20
console.log(d); // prints 10

// Swapping variables without using a temporary variable
let f = 10;
let g = 20;
[f, g] = [g, f]; // This swaps the values of f and g using destructuring assignment

console.log(f, g); // prints 20, 10

// Various arithmetic operations
let h = 10;
let i = 20;
console.log(h - i); // Subtraction: prints -10
console.log(h + i); // Addition: prints 30
console.log(h * i); // Multiplication: prints 200
console.log(Math.floor(h / i)); // Division (rounded down): prints 0
console.log(h % i); // Modulus (remainder of division): prints 10

// Comparison operators
console.log(10 > 20); // Greater than: prints false
console.log(10 < 20); // Less than: prints true
console.log(10 !== 20); // Not equal (strict): prints true

11 == 11; // Comparison not logged
console.log(11 === "11"); // Strict comparison (number vs string): prints false

// Logical AND and OR operators
console.log(10 > 6 && 5 < 9); // Logical AND: prints true
console.log(10 > 6 || 5 < 9 || 18 > 9); // Logical OR: prints true

// Unary operators (increment and decrement)
let j = 11;
j = j++ + ++j; // Post-increment first, then pre-increment
console.log(j); // Prints 24 (11 + 13)

let k = 11,
  l = 22;
let m = k + l + k++ + ++k + ++l; // Involves both pre and post increments
console.log("k=" + k); // Prints k value after increment
console.log("l=" + l); // Prints l value after increment
console.log("m=" + m); // Prints the sum of all operations

let n = true;
n++; // Increments boolean true (true becomes 1, then 2)
console.log(n); // Prints 2

// Uncommenting this will cause an error as the expression isn't valid
// let o=10;
// let p=++(o++); 

// Math operations
console.log(Math.round(10.6)); // Rounds to the nearest integer: prints 11
console.log(Math.ceil(10.1)); // Rounds up: prints 11
console.log(Math.floor(10.9)); // Rounds down: prints 10
console.log(Math.trunc(18.98)); // Removes decimal part: prints 18
console.log(Math.pow(2, 5)); // 2 raised to the power of 5: prints 32
console.log(Math.sqrt(16)); // Square root of 16: prints 4
console.log(Math.cbrt(25)); // Cube root of 25: prints approximately 2.924
console.log(Math.abs(-10)); // Absolute value: prints 10
console.log(Math.max(10, 15)); // Maximum value: prints 15
console.log(Math.min(10, 15)); // Minimum value: prints 10
console.log(Math.random()); // Random value between 0 and 1
console.log(Math.trunc(Math.random() * 9000 + 1000)); // Random value between 1000 and 9999

let o = 89.09835;
console.log(o.toFixed(2)); // Round to 2 decimal places: prints 89.10

// More arithmetic operations
let p = 5;
let q = 7;
console.log(p * q); // Multiplication: prints 35
console.log(2 * (p + b)); // Sum of p and b multiplied by 2: prints 60

// Heron's formula to calculate area of a triangle
let r = 3;
let s = 5;
let t = 3;
let u = (r + s + t) / 2; // Semi-perimeter
console.log(Math.sqrt(u * (u - r) * (u - s) * (u - t))); // Area of triangle: prints 4.472

// Circumference of circle (2 * π * r)
console.log(Number((2 * Math.PI * r).toFixed(2))); // prints circumference rounded to 2 decimal places
