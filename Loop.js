// Loop to print numbers from 0 to 22
for (let i = 0; i < 23; i++) {
  console.log(i);
}

// Loop to print numbers from 23 to 53
for (let i = 23; i < 54; i++) {
  console.log(i);
}

// Loop to print numbers from 200 to 1 in descending order
for (let i = 200; i > 0; i--) {
  console.log(i);
}

// Sum of first N natural numbers
// Takes user input and calculates sum from 1 to N
let pr = prompt("Add number:");
if (pr === null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else if (n > 0) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    console.log(sum);
  } else {
    console.log("Should be positive and more than 0");
  }
}

// Factorial of a number
// let pr = prompt("Add number:");
// if (pr === null) {
//   console.log("Cancelled");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else if (n > 0) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//       fact *= i;
//     }
//     console.log(fact);
//   } else {
//     console.log("Should be positive and more than 0");
//   }
// }

// Finding factors of a number
// let pr = prompt("Add number:");
// if (pr === null) {
//   console.log("Cancelled");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else if (n > 0) {
//     for (let i = 1; i <= Math.floor(n / 2); i++) {
//       if (n % i === 0) {
//         console.log(i);
//       }
//     }
//     console.log(n); // The number itself is always a factor
//   } else {
//     console.log("Should be positive and more than 0");
//   }
// }

// Check if a number is prime
// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false;
//   for (let i = 3; i <= Math.sqrt(n); i += 2) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// Loop with 'continue' (skips 11)
for (var i = 1; i < 23; i++) {
  if (i === 11) continue;
  console.log(i);
}

// Loop with 'break' (stops at 11)
for (var i = 1; i < 23; i++) {
  if (i === 11) break;
  console.log(i);
}

// Loop that continues prompting user until they type 'exit'
// let ans = prompt("Enter something (type 'exit' to close)");
// while (ans !== "exit") {
//   ans = prompt("Enter something (type 'exit' to close)");
// }

// Sum of digits of a number using while loop
// let pr = prompt("Add number:");
// if (pr !== null) {
//   let n = Number(pr);
//   if (!isNaN(n) && n > 0) {
//     let sum = 0;
//     while (n > 0) {
//       sum += n % 10;
//       n = Math.floor(n / 10);
//     }
//     console.log(sum);
//   } else {
//     console.log("Invalid input, should be positive");
//   }
// }

// Reverse a number using while loop
// let pr = prompt("Reverse number:");
// if (pr !== null) {
//   let n = Number(pr);
//   if (!isNaN(n) && n > 0) {
//     let rev = 0;
//     while (n > 0) {
//       rev = rev * 10 + (n % 10);
//       n = Math.floor(n / 10);
//     }
//     console.log(rev);
//   } else {
//     console.log("Invalid input, should be positive");
//   }
// }

// Check if a number is a strong number
// let pr = prompt("Strong number:");
// if (pr !== null) {
//   let n = Number(pr);
//   if (!isNaN(n) && n > 0) {
//     let sum = 0, copy = n;
//     while (n > 0) {
//       let rem = n % 10;
//       let fact = 1;
//       for (let i = 1; i <= rem; i++) {
//         fact *= i;
//       }
//       sum += fact;
//       n = Math.floor(n / 10);
//     }
//     console.log(copy === sum ? "Strong number" : "Not a strong number");
//   } else {
//     console.log("Invalid input, should be positive");
//   }
// }

// Number guessing game
// let random = Math.floor(Math.random() * 100 + 1);
// let guess = 0;
// while (guess !== random) {
//   guess = Number(prompt("Guess the number (1-100):"));
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     console.log("Enter a valid number between 1 and 100");
//   } else if (guess > random) {
//     console.log("Too high, try again");
//   } else if (guess < random) {
//     console.log("Too low, try again");
//   } else {
//     console.log("Congrats! You guessed it right ✅");
//     break;
//   }
// }
