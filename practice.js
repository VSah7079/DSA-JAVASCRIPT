function add(a, b) {
  return a + b;
}
console.log(add(5, 10));

const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

let arr = [10, 20, 30];
arr.forEach((num) => console.log(num));

function sum(c, d) {
  return c + d;
}
console.log(sum(5, 4));

let sum1 = (e, f) => e + f;
console.log(sum1(5, 4));

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let arr1 = [10, 20, 40, 50];
arr1.forEach((num) => console.log(num));

//map function

let arr2 = [5, 10, 15, 20];
let squareArr = arr2.map((num) => num * num);
console.log(squareArr);

//filter function
let arr3 = [3, 6, 9, 12, 15];
let evenNum = arr3.filter((num) => num % 2 == 0);
console.log(evenNum);

// reduce function
let arr4 = [1, 2, 3, 4, 5];
let sum5 = arr4.reduce((acc, num) => acc + num, 0);
console.log(sum5);

let student = {
  name: "vivek",
  age: 23,
  course: "b.tech",
};
console.log(student.name);

let jsonDate = { age: 23 };
console.log(jsonDate.age);

let myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Hello, vivek");
    } else {
      reject("error");
    }
  }, 3000);
});

myPromise
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

async function fetchData() {
  try {
    let result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

