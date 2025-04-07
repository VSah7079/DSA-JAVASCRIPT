class ParentClass {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello I am ${this.name}`);
  }
}

class ChildClass extends ParentClass {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  display() {
    console.log(`Name: ${this.name},Age:${this.age}`);
  }
}

const child = new ChildClass("vivek", 20);
child.greet();
child.display();

class Animal {
  sound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Barking ");
  }
}
const dog = new Dog();
dog.sound();

// Parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Child class
class Student extends Person {
  constructor(name, age) {
    super(name); // Call the parent class constructor
    this.age = age;
  }

  display() {
    console.log(`Name is ${this.name} and age is ${this.age}`);
  }
}

const student = new Student("Vivek Kumar Sah", 20);
student.greet(); // Output: Hello, my name is Vivek Kumar Sah
student.display(); // Output: Name is Vivek Kumar Sah and age is 20

function greet(name) {
  return `Hello ${name}`;
}

function processName(name, callback) {
  console.log(callback(name));
}
processName("Vivek", greet);

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled);

const numbers1 = [1, 2, 3, 4, 5];
const even = numbers1.filter(function (num) {
  return num % 2 === 0;
});

console.log(even);

const numbers2 = [1, 2, 3, 4, 5];

const sum = numbers2.reduce(function (accumulator, current) {
  return accumulator + current;
});
console.log(sum);

const abc = [1, 2, 3, 4, 5, 6, 7];

const doublenumbers = abc.map((num) => num * 2);

console.log(doublenumbers);

const numbers3 = [1, 2, 3, 4, 5];
const result = numbers3.find((num) => num > 3);
console.log(result);

function outer() {
  let name = "vivek";

  function inner() {
    console.log("Hello " + name);
  }
  return inner;
}
const greetFunc = outer();
greetFunc(); // Output: Hello vivek

function secretNumber() {
  let secret = 42;

  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}

const secret = secretNumber();
console.log(secret.getSecret()); // Output: 42
secret.setSecret(99);
console.log(secret.getSecret()); // Output: 99


function createBankAccount() {
  let balance = 500;

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited: ₹${amount}`);
      }
    },
    withdraw: function (amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn: ₹${amount}`);
      } else {
        console.log("Insufficient balance or invalid amount");
      }
    },
    checkBalance: function () {
      console.log(`Current balance: ₹${balance}`);
    },
  };
}

// ✅ Using the account
const account = createBankAccount();
account.deposit(1000); // Deposited: ₹1000
account.withdraw(300); // Withdrawn: ₹300
account.checkBalance(); // Current balance: ₹1200
// Output: Withdrawn: 100 Balance: -100





const urlDatabase = {};

function generateShortCode() {
  return Math.random().toString(36).substring(2, 8); // 6-char random code
}

function shortenURL(longURL) {
  const code = generateShortCode();
  urlDatabase[code] = longURL;
  return `https://short.ly/${code}`;
}

function redirectToOriginalURL(shortCode) {
  return urlDatabase[shortCode] || "URL not found!";
}

// 🔁 Example usage:
const short = shortenURL("https://www.google.com");
console.log("Short URL:", short);

const code = short.split("/").pop();
console.log("Redirecting to:", redirectToOriginalURL(code));
