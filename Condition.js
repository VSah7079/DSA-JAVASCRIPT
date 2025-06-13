// Check if a person is eligible to vote based on age
// let age = Number(prompt("What is your age?"));
// if (isNaN(age)) { 
//     console.log("Invalid input, please enter a number."); 
// } else if (age >= 18) { 
//     console.log("Yes, you can vote."); 
// } else { 
//     console.log("You can't vote."); 
// }

// Calculate discount based on the purchase amount
// let amount = Number(prompt("Enter the final amount: "));
// let discount = 0;  
// if (isNaN(amount)) { 
//     console.log("Invalid input, please enter a number."); 
// } else if (amount > 0 && amount <= 5000) { 
//     discount = 0; 
// } else if (amount > 5000 && amount <= 7000) { 
//     discount = 5; 
// } else if (amount > 7000 && amount <= 9000) { 
//     discount = 10; 
// } else if (amount > 9000) { 
//     discount = 20; 
// } 
// console.log("Final amount after discount:", amount - Math.floor((discount * amount) / 100));

// Calculate electricity bill based on units consumed
// let units = Number(prompt("Enter electricity units: "));
// let billAmount = 0;  

// if (units > 400) { 
//     billAmount = (units - 400) * 13; // Charge for units above 400
//     units = 400; 
// }
// if (units > 200 && units <= 400) { 
//     billAmount += (units - 200) * 8; // Charge for units between 201-400
//     units = 200; 
// }
// if (units > 100 && units <= 200) { 
//     billAmount += (units - 100) * 6; // Charge for units between 101-200
//     units = 100; 
// }
// billAmount += units * 4; // Charge for first 100 units
// console.log("Total electricity bill:", billAmount);

// Break down an amount into currency notes
let amount = 4823;
console.log("Breaking amount into currency notes:");

if (amount >= 500) {
    console.log("500 notes: " + Math.floor(amount / 500));
    amount %= 500; // Remaining amount after using 500 notes
}
if (amount >= 200) {
    console.log("200 notes: " + Math.floor(amount / 200));
    amount %= 200;
}
if (amount >= 100) {
    console.log("100 notes: " + Math.floor(amount / 100));
    amount %= 100;
}
if (amount >= 50) {
    console.log("50 notes: " + Math.floor(amount / 50));
    amount %= 50;
}
if (amount >= 20) {
    console.log("20 notes: " + Math.floor(amount / 20));
    amount %= 20;
}
if (amount >= 10) {
    console.log("10 notes: " + Math.floor(amount / 10));
    amount %= 10;
}
if (amount >= 5) {
    console.log("5 notes: " + Math.floor(amount / 5));
    amount %= 5;
}
if (amount >= 2) {
    console.log("2 notes: " + Math.floor(amount / 2));
    amount %= 2;
}
if (amount === 1) {
    console.log("1 notes: " + amount);
}

// Find the larger number using a ternary operator
let x = 10, y = 20;
let largerNumber = x > y ? x : y;
console.log("Larger number is:", largerNumber); // Output: 20

// Use nested ternary operator to compare two numbers
let a = 10, b = 20;
let comparisonResult = a > b ? "a is greater" : a < b ? "b is greater" : "Both are equal";
console.log(comparisonResult); // Output: "b is greater"

// Print day of the week based on a number input
let day = 1; 
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day"); 
}

// Demonstrate floating-point precision issue in switch-case
let num = 0.1 + 0.3; // Expected 0.3 but due to precision issues, it may not match
switch (num) {
    case 0.4: 
        console.log("Hello"); 
        break;
    case 0.5: 
        console.log("Hey"); 
        break;
    default: 
        console.log("Namaste Bhai"); // Likely output due to floating-point error
}


