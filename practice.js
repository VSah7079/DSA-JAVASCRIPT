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

console.log("Processsing ");
try {
  let num = undefinedVariable;
  console.log(num);
} catch (error) {
  console.log("error aaya bhai", error.message);
}
console.log("this line be executed");

try {
  console.log("proccessing .....");
  let arr5 = [10, 20, 30, 40, 50];
  console.log(arr5[50]);
} catch (error) {
  console.log("error aaya bhai", error.message);
} finally {
  console.log("ye block hamsea chanlega");
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("bhai zero se divide nahi hota");
  }
  return a / b;
}
try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("error aaya bhai", error.message);
}

let numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(10);
console.log(numbers);

console.log(numbers.has(10));
console.log(numbers.has(40));
console.log(numbers.size);
numbers.delete(10);
console.log(numbers);
numbers.clear();
console.log(numbers);

let fruits = new Set(["apple", "banana", "mango"]);
fruits.delete("banana");
console.log(fruits);

let students = new Map();

students.set("name", "vivek");
students.set("age", 23);
students.set("course", "b.tech");
console.log(students);

console.log(students.get("name"));
console.log(students.get("age"));
console.log(students.get("course"));
console.log(students.get("rollno"));
console.log(students.size);
students.delete("age");
console.log(students);
students.clear();
students.clear();
console.log(students);

let weakMap = new WeakMap();

let obj1 = { name: "vivek" };
let obj2 = { age: 23 };

weakMap.set(obj1, "Developer");
weakMap.set(obj2, "Student");

console.log(weakMap.get(obj1));
console.log(weakMap.get(obj2));
console.log(weakMap.has(obj1));
weakMap.delete(obj1);
console.log(weakMap.has(obj1));

class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }
  getAge() {
    return this._age;
  }
  setAge(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("invalid age");
    }
  }
}

const person1 = new Person("vivek kumar", 20);
console.log(person1.name);
console.log(person1.getAge());

person1.setAge(23);

console.log(person1.getAge());
person1.setAge(-10);
console.log(person1._age);

class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this._price = price;
  }
  getPrice() {
    return this._price;
  }

  setPrice(newPrice) {
    if (newPrice > 0) {
      this._price = newPrice;
    } else {
      console.log("invalid price");
    }
  }
}

const car1 = new Car("BMW", "X5", 5000000);
console.log(car1.brand);
console.log(car1.model);
console.log(car1.getPrice());

car1.setPrice(6000000);
console.log(car1.getPrice());

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`this ${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("dog");
myDog.speak();
myDog.bark();

class Vehicle {
  constructor(type) {
    this.type = type;
  }
  showType() {
    console.log(`Vehical type: ${this.type}`);
  }
}

class Car2 extends Vehicle {
  constructor(type, brand) {
    super(type);
    this.brand = brand;
  }
  showDetails() {
    console.log(`Car brand: ${this.brand}`);
    super.showType();
  }
}
const myCar = new Car2("Suv", "Toyota");
myCar.showDetails();

class Animal1 {
  sound() {
    console.log("Some generic sound ");
  }
}

class Dog1 extends Animal1 {
  sound() {
    console.log("Bark! Bark!");
  }
}
const myDog1 = new Dog1();
myDog1.sound();

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance; // Private-like property
  }

  // Method to get balance
  getBalance() {
    return this._balance;
  }

  // Deposit method
  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited: ₹${amount}`);
    } else {
      console.log("Invalid deposit amount");
    }
  }

  // Withdraw method
  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrawn: ₹${amount}`);
    } else {
      console.log("Insufficient balance or invalid amount");
    }
  }
}

// Creating an account object
const account1 = new BankAccount("Vivek", 1000);
console.log("Owner: ", account1.owner);

// Deposit money
account1.deposit(1000);
console.log("Balance after deposit: ₹", account1.getBalance());

// Withdraw money
account1.withdraw(2000);
console.log("Balance after withdrawal: ₹", account1.getBalance());

// Trying to access private-like property directly
console.log("Direct balance access: ", account1._balance);

function Person12(name, age) {
  this.name = name;
  this.age = age;
}

Person12.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person12 = new Person12("vivek", 20);
person12.greet(); // ✅ Correct method call

function Vehical13(type) {
  this.type = type;
}

Vehical13.prototype.showType = function () {
  console.log(`Vehical type: ${this.type}`); // Corrected syntax
};

function Car5(brand) {
  this.brand = brand;
}

// Correct inheritance
Car5.prototype = new Vehical13("Car");

const myCar1 = new Car5("Toyota");
myCar1.showType(); // Output: Vehical type: Car

//Basic Inheritance using Object.create()

const personProto = {
  greet: function () {
    console.log(`Hello my name is : ${this.name}`);
  },
};

const vivek = Object.create(personProto);

vivek.name = "Vivek";
vivek.greet();

const animal = {
  eat: function () {
    console.log(`${this.name} is eating `);
  },
};
const dog = Object.create(animal);
dog.name = "Buddy";
dog.bark = function () {
  console.log(`${this.name} is barking `);
};
dog.eat();
dog.bark();

const human = {
  speak: function () {
    console.log(`${this.name} is Speaking......`);
  },
};
human.name = "Vivek";
const student1 = Object.create(human);
student1.study = function () {
  console.log(`${this.name} is Studing......`);
};

const vivekstudent = Object.create(student1);
vivekstudent.speak();
vivekstudent.study();

class Prs {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
  }
}

const prs1 = new Prs("VivekSah", 19);
prs1.greet();

class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
  showDetails() {
    console.log(`${this.name} work as a ${this.position}.`);
  }
}

class Manager extends Employee {
  constructor(name, position, department) {
    super(name, position);
    this.department = department;
  }
  showDetails() {
    super.showDetails();
    console.log(`${this.name} manages the ${this.department}  department`);
  }
}

const manager1 = new Manager("Vivek", "Manager", "Sales");
manager1.showDetails();


