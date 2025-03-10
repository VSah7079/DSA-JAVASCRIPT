for (let i = 0; i < 23; i++) {
  console.log(i);
}
for (let i = 23; i < 54; i++) {
  console.log(i);
}

for (let i = 200; i > 0; i--) {
  console.log(i);
}

// //sum of n natural numbers
// let pr = prompt("Add number:");

// if (pr === null) {
//   console.log("Canclled");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//       }
//       console.log(sum);
//     } else {
//       console.log("Should be +ve and more than 0");
//     }
//   }
// }

//factorial number
// let pr = prompt("Add number:");

// if (pr === null) {
//   console.log("Canclled");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       let fact = 1;
//       for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//       }
//       console.log(fact);
//     } else {
//       console.log("Should be +ve and more than 0");
//     }
//   }
// }

//factors number

// let pr = prompt("Add number:");

// if (pr === null) {
//   console.log("Canclled");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       for (let i = 1; i <=Math.floor(n/2); i++) {
//         if (n % i === 0) {
//           console.log(i);
//         }
//       }
//       console.log(n)
//     } else {
//       console.log("Should be +ve and more than 0");
//     }
//   }
// }

// //prime number
// let pr = prompt("ENter your number:");

// if (pr === null) {
//   console.log("Canclled");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       console.log(isPrime(n));
//     } else {
//       console.log("Should be +ve and more than 0");
//     }
//   }
// }

// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if (n % 2 == 0) return false;

//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if (n % 2 == 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

for (var i = 1; i < 23; i++) {
  if (i === 11) continue;
  else console.log(i);
}
for (var i = 1; i < 23; i++) {
  if (i === 11) break;
  else console.log(i);
}

// let ans = prompt("kuch bhi dedo (exit for close)");

// while (ans !== "exit") {
//   ans = prompt("kuch bhi dedo(exit for close)");
// }

// let pr = prompt("Add number:");
// if (pr === null) {
//   console.log("Canclled");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       while (n > 0) {
//         let rem = n % 10;
//         sum = sum + rem;
//         n = Math.floor(n / 10);
//       }
//       console.log(sum);
//     } else {
//       console.log("Should be +ve and more than 0");
//     }
//   }
// }

// reverse number using while loop
// let pr = prompt("Reverse number:");
// if (pr === null) {
//   console.log("Canclled");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid input");
//   } else {
//     if (n > 0) {
//       let rev = 0;
//       while (n > 0) {
//         let rem = n % 10;
//         rev = rev * 10 + rem;
//         n = Math.floor(n / 10);
//       }
//       console.log(rev);
//     } else {
//       console.log("Should be +ve and more than 0");
//     }
//   }
// }
let pr = prompt("Strong  number:");
if (pr === null) {
  console.log("Canclled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      let rev = 0;
      while (n > 0) {
        let rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
      }
      console.log(rev);
    } else {
      console.log("Should be +ve and more than 0");
    }
  }
}
