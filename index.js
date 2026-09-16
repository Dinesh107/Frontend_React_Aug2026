// printf();
// cout()
// System.out.println()
// console.writeLine();
// print("", 1, true or false, 0.4, '')

// const { use } = require("react");

// console.log("Welcome to javascript world");
// console.log("I lkie js");

// window.alert("This is javascipt");
// window.prompt("");

// document.getElementById("myH1").textContent = "Welcome to javascript";

// document.getElementById("myP").textContent = "i like js";

// let firstName = "Ganesh";
// let favNum1 = 10.7;
// let favNum2 = 10;
// let isStudent = true;

// console.log(typeof firstName);
// console.log(typeof favNum1);
// console.log(typeof favNum2);
// console.log(isStudent);
// console.log(typeof isStudent);

// let empCount = 31;

//           31       1 = 32
// empCount = empCount + 1;
// empCount = empCount - 1;
// empCount = empCount * 2;
// empCount = empCount / 2;
// empCount = empCount ** 2;
// empCount = empCount % 2;

// let extraEmployee = empCount  % 3;

// agumeneted assigment operator
// empCount += 1;
// empCount -= 1;
// empCount *= 1;
// empCount /= 1;
// empCount %= 1;
// console.log(empCount);
// console.log(extraEmployee);

// let empCount = 31;

// empCount++;
// empCount--;

// console.log(empCount);

// let result = 1 + 2 * 3 + 4 ** 2;

// let result = 1 + 2 * 3 + 16;

// let result = 1 + 6 + 16;

// let result = 7 + 16;

// let result = 23;

// result = 12 % 5 + 8 / 2;
// let result = 2 + 8 / 2;
// let result = 2 + 4;
// let result = 6;

// let result = 6 / 2 ** (2 * 5);

// console.log(result);

// let username;

// username = window.prompt("what is your username? ");

// console.log(username);

// let username;
// document.getElementById("mySubmit").onclick = function() {
//      username = document.getElementById("myText").value;
//      username = document.getElementById("myH1").textContent = `Welcome ${username}`;
//      console.log(username);
// }

// let username = "siva";

// console.log(`hello ${username}`);

// let age = window.prompt("How old are you");
// age = Number(age);
// age += 1;
// console.log(age);

// console.log(age, typeof age);

// let x = "veg rice";
// let y = "veg rice";
// let z = "veg rice";

// let x = "1ertyuio11";
// let y = "0";
// let z = "0";

// let x = "";
// let y = "";
// let z = "";

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const PI = 3.14159;
// let radius;
// let circumference;
// PI = 6789.3;
// radius = window.prompt(`Enter the radius of circle`);
// radius = Number(radius);
// circumference = 2 * PI * radius;

// console.log(circumference);

// let x = 3.21;
// let x = 3.99;
// let x = 3;
// let y = 2;
// let z = 1;
// z = Math.round(x);
// z = Math.floor(x); // roubd down
// z = Math.ceil(x); round up
// z = Math.trunc(x);
// z = Math.pow(y, x);
// z = Math.sqrt(x);
// z = Math.abs(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);
// console.log(min);

// let isStudent = true;

// if(isStudent) {
//     console.log("You are a student");
// } else {
//      console.log("You are a not student");
// }

// let age = 10;
// let hasLicense = false;

// if(age >= 18) {
//    console.log("You are old enough to drive");

//    if(hasLicense) {
//       console.log("you have your lisence");
//    } else {
//     console.log("you do not have lisense yet");
//    }

// } else {
//      console.log("You must be 18+ to have alisense");
// }

// let age = -1;
// // false
// if(age >= 110) {
//     console.log("you are too old to vote");
//     // false
// } else if(age >= 18) {
//     console.log("you are old enough to vote");
// } else if(age < 0) {
//      console.log("your age cant be 0");
// } else {
//     console.log("you must ve 18+ to vote");
// }

// let myCheckbox = document.getElementById("myCheckbox");
// let visaBtn = document.getElementById("visaBtn");
// let mastercardBtn = document.getElementById("mastercardBtn");
// let rupayBtn = document.getElementById("rupayBtn");
// let mySubmit = document.getElementById("mySubmit");
// let subResult = document.getElementByI
// d("subResult");
// let paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function () {
//   if (myCheckbox.checked) {
//     subResult.textContent = `you are subscribed!!!`;
//   } else {
//     subResult.textContent = `you are not subscribed!!!`;
//   }
// };

// let age = 10;
// let message = age >= 18 ? `you are an adult` : `you are a minor`;

// console.log(message);

// let time = 10;
// let greeting = time < 12 ? "good morning" : "good afternoon";
// console.log(greeting);

// isStudent = false;
// let message = isStudent ? "you are a student" : "you are not a student";
// console.log(message);

// let purchaseAmount = 100;
// let discount = purchaseAmount >= 100 ? 10 : 0 ;
// console.log(`your total is ₹${purchaseAmount - purchaseAmount * (discount/100)}`);

// let day = 1;

// switch(day) {

//   case 1:
//        console.log("Its is monday");
//        break;
//   case 2:
//        console.log("Its is Tuesday");
//        break;
//   case 3:
//        console.log("Its is wednesday");
//        break;
//   case 4:
//        console.log("Its is Thursday");
//        break;
//   case 5:
//        console.log("Its is Friday");
//        break;
//   case 6:
//        console.log("Its is Sauturday");
//        break;
//   case 7:
//        console.log("Its is Sunday");
//        break;
//   default:
//     console.log("Incorrect Input");

// }

// let mark = 10;
// let grade;

// switch (true) {
//   case mark >= 90:
//     grade = "A";
//     break;
//   case mark >= 80:
//     grade = "B";
//     break;
//   case mark >= 70:
//     grade = "C";
//     break;
//   case mark >= 50:
//     grade = "D";
//     break;
//   default:
//     grade = "E";
// }

// console.log(grade);

//              013456789
// let userName = "Siva Kumar";   // length = 10 index = length - 1 = 0 to 9

// userName.charAt(0);
// console.log(userName.charAt(0));
// userName.indexOf("s");
// console.log(userName.indexOf("a"));
// console.log(userName.lastIndexOf("a"));
// console.log(userName.length);
// userName = userName.toLowerCase();
// console.log(userName);
// userName = userName.toUpperCase();
// console.log(userName);
// userName = userName.repeat(5);
// console.log(userName);

// let userName = " Siva Kumar";

// let result = userName.startsWith(" ");

// if(result) {
//     console.log("Your username cant begin with ' ' ");
// } else {
//     console.log(userName);
// }

// console.log(result);
// let userName = "Siva Kumar ";

// let result = userName.endsWith(" ");

// if(result) {
//     console.log("Your username cant ends with ' ' ");
// } else {
//     console.log(userName);
// }

// console.log(result);

// let userName = "Siva$Kumar";

// let result = userName.includes("$");

// if(result) {
//     console.log("Your username cant include with ' ' ");
// } else {
//     console.log(userName);
// }

// console.log(result);

// let phoneNumber = "91-99940-30296";
// phoneNumber = phoneNumber.replaceAll("-", "_");
// console.log(phoneNumber);

// let phoneNumber = "91-99940-30";
// phoneNumber = phoneNumber.padStart(20, "0");
// console.log(phoneNumber);

// let phoneNumber = "91-99940-30";
// phoneNumber = phoneNumber.padEnd(20, "0");
// console.log(phoneNumber);

// const fullName = "Ganesh Kumar";

// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5, 10);
// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

// email - dinesh123@gmail.com

// Enter the Email

// submit

// your username is dinesh123

//let username = window.prompt("Enter your username: ");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;

// console.log(username);

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

// const temp = 200;

// if(temp > 0) {
//    console.log("The weather is good");
// } else if(temp <= 30) {
//     console.log("The weather is good");
// } else {
//      console.log("The weather is bad");
// }
// true
// 200  > 0    20 < 30 - true
// if(temp > 0 && temp <= 30) {
//    console.log("The weather is good");
// } else {
//      console.log("The weather is bad");
// }

//  false         false
// if(temp <= 0 || temp > 30) {
//    console.log("The weather is bad");
// } else {
//      console.log("The weather is good");
// }

// const isSunny = true;

// if(!isSunny) {
//     console.log("It is sunny");
// } else {
//     console.log("It is cloudy");
// }

//   TRUE
// const PI = "3.14";

// if(PI === "3.14") {
//    console.log("That is PI");
// } else {
//  console.log("That is NOT PI");
// }

//TRUE
// const PI = 3.14;

// if(PI === 3.14) {
//    console.log("That is PI");
// } else {
//  console.log("That is NOT PI");
// }

// FALSE
// const PI = "3.14";

// if(PI === 3.14) {
//    console.log("That is PI");
// } else {
//  console.log("That is NOT PI");
// }

// FALSE
// const PI = 3.14;

// if(PI === "3.14") {
//    console.log("That is PI");
// } else {
//  console.log("That is NOT PI");
// }

// const PI = "3.14";
// if(PI !== 3.14) {
//    console.log("That is PI");
// } else {
//  console.log("That is NOT PI");
// }

// let username = "Siva";

// while(username === "") {
//     console.log("You dont enter your name");
// }

// console.log(`hello ${username}`);

// let i = 1;

//          false(false-stop)
// 1st   2nd(true) 4th
// for(let i = 1; i <= 10; i++) {
//     // 3rd - execute the code indise the curly braces
//      console.log(i);
// }

//          false(false-stop)
// 1st   2nd(true) 4th
// for(let i = 10; i > 0; i--) {
//     // 3rd - execute the code indise the curly braces
//      console.log(i + "*****");
//      console.log(i + "*****");
// }

//      1st   2st(true)       8th
//  for(let i = 0; i < 5;       i++) {  // outer loop
//     // 3rd step
//      console.log(`The current value is : ${i}`);
//      //     4th        5th(true)    7th
//       for(let j = 0; j < 5;        j++) {
//           // 6th step
//           console.log(`j: ${j}`);
//       }

//       console.log("---------------------------");
//  }

// 0 x 0 = 0
// 0 x 1 = 0

//  for(let i = 0; i < 99;       i++) {  // outer loop
//     // 3rd step
//      console.log(`The current value is of i : ${i}`);
//      //     4th        5th(true)    7th
//       for(let j = 0; j < 99;        j++) {
//           // 6th step
//           console.log(`${i} x ${j} = ${i * j}`);
//       }

//       console.log("---------------------------");
//  }

// const storeInventory = [
//     // 0 - i
//     // j = 0           j = 1          j = 2
//   ["Item: Computer", "Price: 20000", "Inventory: 10"],

//   // 1
//   ["Item: IPhone17", "Price: 50000", "Inventory: 5"],

//   // 2
//   ["Item: Earphones", "Price: 5000", "Inventory: 15"]
// ];

// //     1step             2sd step           3
// for(let i = 0; i < storeInventory.length; i++) {

//     // 3rd step
//     if(i > 0) {
//         console.log("-------------");
//     }
//     //    4th j = 0    //             0
//     for(let j = 0; j < storeInventory[i].length; j++) {
//         //                       2  2
//       console.log(storeInventory[i][j]);
//     }

// }

//  0 = i,  j = 0, 1, 2, 3, 4
//  1 = i,  j = 0, 1, 2, 3, 4

//                   parameters
// function happyBirthday(username, age) {
//   console.log("Happy Birthday to you");
//   console.log("Happy Birthday to you");
//   console.log(`Happy Birthday dear ${username}`);
//   console.log("Happy Birthday to you");
//   console.log(`you are ${age} years old`);

//    XPathResult;
// }

// //                arguments
// happyBirthday("Siva kumar", 25);
// happyBirthday("Ganesh", 26);

// function boolean add(x , y) {
//     let result = true or false;
//     return result;
// }
// function add(x , y) {
//     return x + y;
// }
// function mul(x , y) {
//     return x * y;
// }

// function isEven(number) {
//     // if(number % 2 === 0) {
//     //      return true;
//     // } else {
//     //     return false;
//     // }

//     return number % 2 === 0 ? true : false;
// }

// function isValidEmail(email) {
//     if(email.includes("@")) {
//         return true;
//     } else {
//         return false;
//     }
// }

// add(20, 30) = 50

// let addAnswer = add(20, 30);
// let mulAnswer = mul(20, 30);
// let evenAnswer = isEven(11);
// let emailCheckAnswer = isValidEmail("ganesh989@gmail.com");

// console.log(addAnswer);
// console.log(mulAnswer);
// console.log(evenAnswer);
// console.log(emailCheckAnswer);

// return result

// let x = 1;
// let x = 2;
//  let x = 100;
// function func1() {
//     // let x = 3;
//     console.log(x);
// }
// function func2() {
//     // let y = 1;
//     // console.log(y);
//     // let x = 4;
//     console.log(x);
// }

// func1();
// func2();

//             0         1          2
// let fruits = ["apple", "orange", "banana"];

//      i = 2                    2 > 0  4th -1
// for(let i = fruits.length - 1; i >= 0; i--) {

//     // 3rd step       2 1  0
//     console.log(fruits[i]);
// }

// fruits.sort().reverse();

// for(let fruit of fruits) {
//     console.log(fruit);
// }

// fruits.push("coconut");
// fruits.pop("coconut");
// fruits.unshift("coconut");
// fruits.shift();

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple");
// let index = fruits.indexOf("banana");
// console.log(numOfFruits);
// console.log(index);
// console.log(fruits);

// fruits[2] = "coconut";

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let numbers = [1, 2, 3, 4, 5, 6];
// let maximum = Math.max(...numbers);
// console.log(...numbers);
// console.log(numbers);
// console.log(maximum);

// let username = "Ganesh Kumar";

// let fruits = ["apple", "orange", "banana"];
// let numOfFruits = [...fruits]

// // let letters = [...username].join("");
// console.log(numOfFruits);

// let fruits = ["apple", "orange", "banana"];
// let veggies = ["carrits", "oninon", "tomato"];

// let foods = [...fruits, ...veggies, "eggs", "milk"];

// console.log(foods);
// let fruits = ["apple", "orange", ""];

// function openKitchen(...foods) {
//     console.log(...foods);
// }

// function getFood(...foods) {
//     return foods;
// }

// const food1 = "veg rice";
// const food2 =  "chicken rice";
// const food3 =  "sambar rice";
// const food4 =  "dosa";
// const food5 = "idly";

// openKitchen(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5);

// console.log(foods);

// function sum(...numbers) {
//     let result = 0;

//     for(let number of numbers) {
//         result += number;
//     }

//     return result;
// }

// const total = sum(1, 3, 4, 5, 6, 7);

// console.log(`your total is ₹${total}`);

// find the average of the number

// function combineString(...strings) {
//     return strings.join(" ");
// }

// const fullName = combineString("Ms", "maria", "margrette", "101");

// console.log(fullName);

// hello(wait);

// // 5seconds
// function hello(callback) {
//     console.log("Hello siva");
//     callback();
// }

// function leave() {
//     console.log("Leave siva");
// }

// function wait() {
//    console.log("Wait siva");
// }

// function goodBye() {
//   console.log("Good by siva");
// }

// sum(displayWebpage, 4, 2);

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }
// //                         6
// function displayConsole(result) {
//     console.log(result);
// }

// function displayWebpage(result) {
//      document.getElementById("myH1").textContent = result;
// }

// let numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(double);
// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array) {
//    array[index] = element * 2;
// }

// function square(element, index, array) {
//     array[index] = Math.pow(element, 2)
// }

// function display(element) {
//   console.log(element);
// }

//                 0        1         2         3
// let fruits = ["apple", "orange", "banana", "pineapple"];

// function upperCase(element, index, array) {
//    array[index] = element.toUpperCase();
// }

// function capitilize(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// // fruits.forEach(upperCase);
// fruits.forEach(capitilize);
// fruits.forEach(display);

// function display(element) {
//   console.log(element);
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers);

// //               [1, 4, 9, 16, 25, 36]
// const squares = numbers.map(square);

// function square(element) {
//     return Math.pow(element, 2);
// }

// const students = ["siva", "ganesh", "aslam"];

// const upperResult = students.map(upperCase);

// console.log(upperResult);

// function upperCase(students) {
//     return students.toUpperCase();
// }

// console.log(squares);

// const dates = ["2016-1-10", "2025-2-20", "2026-3-30"];

// dates = "2202-4-30";
// console.log(dates.split("-"));

// const formatedDates = dates.map(formatDates);

// console.log(formatedDates);

// function formatDates(element) {
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`;

// }

// formatDates();

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let evenNumbers = numbers.filter(isEven);

// console.log(evenNumbers);

// function isEven(element) {
//     return element % 2 === 0;
// }

// const ages = [10, 16, 17, 18, 20, 70, 60];

// const adults = ages.filter(isAdult)

// console.log(adults);

// function isAdult(element) {
//     return element >= 18;
// }

// const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut", "pineapplle"];

// const shortWords = words.filter(getShortWords);

// console.log(shortWords);

// function getShortWords(element) {
//     return element.length <= 6;
// }

// const prices = [200, 10, 80, 1000, 400];

// const total = prices.reduce(sum);

// console.log(`the total ₹${total.toFixed(2)}`);

// //             1690
// function sum(previous, element) {
//     return previous + element;
// }

// const grades = [75, 50, 90, 60, 65, 95];

// const maximum = grades.reduce(getMax);

// console.log(maximum);

// function getMax(accum, element) {
//     return Math.max(accum, element);
// }

// function declaration

// function hello() // signature part
// {
//     console.log("Hello siva"); // implementation part
// }

// const hello = function() {
//     console.log("Hello siva");
// }

// hello();

// setTimeout(hello, 3000);

// setTimeout(function() {
//      console.log("Hello siva");
// }, 3000);

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });

// const evenNums = numbers.filter(function(element){
//     return element % 2 === 0;
// });

// console.log(squares);
// console.log(evenNums);

// const total = numbers.reduce(function(accum, element) {
//     return accum + element;
// });
// console.log(total);

// function square(element) {
//     return Math.pow(element, 2);
// }

// function hello() {
//     console.log("hello siva");
// }

// hello();

// const hello = function() {
// console.log("hello siva");
// }

// const hello = (name) => { console.log(`hello ${name}`)
//                         console.log(`you are ${22} years old`)};
// hello("siva", 22);

// setTimeout(function(){
//      console.log("hello");
// }, 3000);

// function hello() {
//     console.log("hello");
// }

// setTimeout(() => console.log("hello"), 3000);

// const numbers =  [1, 2, 3, 4, 5, 6, 7];

// const squares = numbers.map((element) => Math.pow(element, 2));

// const evenNums = numbers.filter((element) => element % 2 === 0);

// const total = numbers.reduce((accum, element) => accum + element);

// console.log(squares);
// console.log(evenNums);
// console.log(total);

// const person1 = {
//     firstName: "siva",
//     lastName: "kumar",
//     age: 22,
//     isEmpolyed: true,

//     sayHello: function(){console.log("hai i am siva");},
//     eat: function(){console.log("i ma eating briyani")},

// }

// const person2 = {
//     firstName: "naveen",
//     lastName: "raj",
//     age: 21,
//     isEmpolyed: false,

//     sayHello: () => console.log("I am naveen"),
//     eat: function(){console.log("i ma eating fried rice")},

// }

// person1.sayHello();
// person1.eat();

// person2.sayHello();
// person2.eat();

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmpolyed);
// console.log(person1.isEmpolyed);

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmpolyed);

// const person1 = {
//     name: "siva",
//     favFood: "curd rice",

//     sayHello: function(){console.log(`hello i am ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }
// const person2 = {
//     name: "naveen",
//     favFood: "sambar rice",

//     sayHello: function(){console.log(`hello i am ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }

// person1.sayHello();
// person1.eat();
// person2.sayHello();
// person2.eat();

// function Bike(make, model, year, color) {
//    this.make = make;
//    this.model = model;
//    this.year = year;
//    this.color = color;

//    this.drive = function(){console.log(`You drive this ${this.model}`)}
// }

// const bike1 = new Bike("tvs", "apache", 2024, "red");
// const bike2 = new Bike("yamaha", "fz", 2022, "black");
// const bike3 = new Bike("honda", "activa", 2021, "silver");

// console.log(bike1.make);
// console.log(bike1.model);
// console.log(bike1.year);
// console.log(bike1.color);

// console.log(bike2.make);
// console.log(bike2.model);
// console.log(bike2.year);
// console.log(bike2.color);

// console.log(bike3.make);
// console.log(bike3.model);
// console.log(bike3.year);
// console.log(bike3.color);

// bike1.drive();
// bike2.drive();
// bike3.drive();

// class Product {

//    constructor(name, price) {
//     this.name = name;
//     this.price = price;
//    }

//    displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: ₹${this.price.toFixed(2)}`);
//    }

//    salesTax(salesTax) {
//        return this.price + (this.price * salesTax);
//    }

// }

// const salesTax = 0.05;
// // object creation or instance creation
// const product1 = new Product("mouse", 300);
// const product2 = new Product("keyborad", 200.12);
// const product3 = new Product("earphones", 320);

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

// const total1 = product1.salesTax(salesTax);
// const total2 = product2.salesTax(salesTax);
// const total3 = product3.salesTax(salesTax);

// console.log(`total prie with tax is ₹${total1.toFixed(2)}`);
// console.log(`total prie with tax is ₹${total2.toFixed(2)}`);
// console.log(`total prie with tax is ₹${total3.toFixed(2)}`);

// class MathUtil {
//     static PI = 3.14159;

//     static getDiameter(radius) {
//         return radius * 2;
//     }

//     static getCircumference(radius) {
//         return 2 * this.MathUtil.PI * radius;
//     }

// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(20));

// class User {

//   static userCount = 0;

//   constructor(username) {
//      this.username = username;
//      User.userCount++;
//   }

//   sayHello() {
//     console.log(`Hello my username is ${this.username}`);
//   }

//   static getUserCount() {
//     console.log(`There are ${User.userCount} users online`);
//   }

// }

// const user1 = new User("Siva kumar");
// const user2 = new User("Selva kumar");
// const user3 = new User("ganesh");

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// console.log(user1.username);
// console.log(User.userCount);
// User.getUserCount();

// static calDicount() {

// }

// satic isValdiAccountNumber() {

// class Animal {

//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }

//   sleep() {
//     console.log(`This ${this.name} is sleeping`);
//   }
// }

// class Rabbit extends Animal {
//     name = "Indian Rabbit";
//     run() {
//         console.log(`This ${this.name} is running`);
//     }
// }

// class Fish extends Animal {
//    name = "Indian Shark";
//     swim() {
//         console.log(`This ${this.name} is swiming`);
//     }
// }

// class Eagle extends Animal {
//    name = "Eagle";
//     fly() {
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const eagle = new Eagle();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();

// console.log(eagle.alive);
// eagle.eat();
// eagle.sleep();
// eagle.fly();

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   move(speed) {
//     console.log(`the ${this.name} moves at speed of ${speed}kmp`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age); // parent constructor
//     this.runSpeed = runSpeed;
//   }

//   run() {
//     console.log(`This ${this.name} can run`);
//     super.move(this.runSpeed);
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age); // parent constructor
//     this.swimSpeed = swimSpeed;
//   }

//   swim() {
//     console.log(`This ${this.name} can swim`);
//     super.move(this.swimSpeed);
//   }
// }

// class Eagle extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age); // parent constructor
//     this.flySpeed = flySpeed;
//   }

//   fly() {
//     console.log(`This ${this.name} can fly`);
//     super.move(this.flySpeed);
//   }
// }

// const rabbit = new Rabbit("rabbit", 2, 25);
// const fish = new Fish("fish", 1, 10);
// const eagle = new Eagle("indian eagle", 3, 50);

// rabbit.run();
// fish.swim();
// eagle.fly();

// class Rectangle {

//   constructor(width, height) {
//      this.width = width;
//      this.height = height;
//   }

//   set width(newWidth) {
//      if(newWidth > 0) {
//       this._width = newWidth;
//      } else {
//       console.error("Widht must be +ve number")
//      }
//   }
//   set height(newHeight) {
//      if(newHeight > 0) {
//       this._height = newHeight;
//      } else {
//       console.error("Height must be +ve number")
//      }
//   }

//    get width() {
//     return this._width;
//    }
//    get height() {
//     return this._height;
//    }

//    get area() {

//    }

// }

// const rectangle = new Rectangle(5, 11);

// console.log(rectangle.height);
// console.log(rectangle.width);

// class Person{
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName  = lastName;
//     this.age = age;
//   }

//    set firstName(newFirstName) {
//       if(typeof newFirstName === "string" && newFirstName.length > 0) {
//         this._firstName = newFirstName;
//       } else {
//         console.error("FirstName must be a non emepty string");
//       }
//    }
//    set lastName(newLastName) {
//       if(typeof newLastName === "string" && newLastName.length > 0) {
//         this._lastName = newLastName;
//       } else {
//         console.error("LastName must be a non emepty string");
//       }
//    }

//    set age(newAge) {
//     if(typeof newAge === "number" && newAge >= 0) {
//       this._age = newAge;
//     } else {
//        console.error("age must be a non  -ve number");
//     }
//    }

//   get firstName() {
//     return this._firstName;
//   }

//   get lastName() {
//     return this._lastName;
//   }

//   get fullName() {
//     return this._firstName + " " + this._lastName;
//   }

//   get age() {
//     return this._age;
//   }

// }

//  const person = new Person("siva", "kumar", 22);

//  console.log(person.firstName);
//  console.log(person.lastName);
//  console.log(person.fullName);
//  console.log(person.age);

// swap the values of two variables

// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);

// [a,b] = [b,a];

// console.log(a);
// console.log(b);

// swap 2 elements in an array

// const colors = ["red", "green", "black", "white"];

// [colors[0], colors[3]] = [colors[3], colors[0]];

// console.log(colors);

// assign array elements to variable

// const colors = ["red", "green", "black", "white", "yellow"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor, secondColor, thirdColor, extraColors);

// Extarct values from object

// const person1 = {
//   firstName:"siva",
//   lastName:"kumar",
//   age: 22,
//   job: "JS coder"

// }
// const person2 = {
//   firstName:"ganes",
//   lastName:"kumar",
//   age: 21,
//   job: "unemployed"

// }

// const {firstName, lastName, age, job} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// destrututre in function parameters

// function displayPerson({firstName, lastName, age, job}) {
//    console.log(`name: ${firstName} ${lastName}`);
//    console.log(`age: ${age}`);
//    console.log(`job: ${job}`);
// }

// const person1 = {
//   firstName:"siva",
//   lastName:"kumar",
//   age: 22,
//   job: "JS coder"

// }
// const person2 = {
//   firstName:"ganes",
//   lastName:"kumar",
//   age: 21,
//   job: "unemployed"

// }

// displayPerson(person2)

// const person = {
//   fullName: "Siva Kumar",
//   age: 22,
//   isStudent: true,
//   hobbies: ["Football", "Singing", "cooking"],
//   address: {
//     street: "3rd cross, gandhi st",
//     city: "chennai",
//     state: "tamilnadu",
//     country: "india",
//   }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.state);
// console.log(person.address.country);

// for(const x in person.address) {
//   console.log(person.address[x]);
// }

// class Person {
//   constructor(name, age, ...address) {
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }

// class Address {

//   constructor(street, city, state, country) {
//     this.street = street;
//     this.city = city;
//     this.state = state;
//     this.country = country;
//   }
// }

// const person1 = new Person("siva", 22, "3rd gandhi st,",
//                                        "chennai",
//                                        "tamilnadu", "india");
// const person2 = new Person("ganesh", 21, "4rd subash st,",
//                                        "chennai",
//                                        "karnataka", "india");
// const person3 = new Person("ganesh", 20, "1rd kamraj st,",
//                                        "madurai",
//                                        "tamilnadu", "india");

// console.log(person1.address.street);
// console.log(person1.address.city);
// console.log(person1.address.state);
// console.log(person1.address.country);

// console.log(person2.address.street);
// console.log(person2.address.city);
// console.log(person2.address.state);
// console.log(person2.address.country);

// console.log(person3.address.street);
// console.log(person3.address.city);
// console.log(person3.address.state);
// console.log(person3.address.country);

// const fruits = [{name: "apple", color: "red", calories: 85},
//                 {name: "orange", color: "orange", calories: 90},
//                 {name: "banana", color: "yellow", calories: 100},
//                 {name: "cocunut", color: "white", calories: 105},
//                 {name: "pineapple", color: "yellow", calories: 30}];

// fruits.push({name: "grapes", color: "purple", calories: "22"})

// console.log(fruits);

// forEach
// fruits.forEach(fruits => console.log(fruits.name));
// fruits.forEach(fruits => console.log(fruits.colors));

// // map

// const fruitNames = fruits.map(fruit => fruit.name);

// console.log(fruitNames);

// // filter

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");

// console.log(yellowFruits);

// // reduce()

// const maxFruit = fruits.reduce((accum, fruit) => fruit.calories > accum.calories ? fruit : accum);

// console.log(maxFruit);

// function outer() {

//     let message = "hello";

//     function inner() {
//         console.log(message);
//     }

//     inner();

// }

// message = "goobye";

// outer();

// function createCounter(){
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(`count incresed to ${count}`);
//   }

//   function getCount() {
//     return count;
//   }

//   return {increment, getCount};
// }

// const counter = createCounter();

// console.log(createCounter);

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`the current count is ${counter.getCount()}`);

// function createGame() {
//   let score = 0;

//   function increaseScore(runs) {
//     score += runs;
//     console.log(`${runs} runs`);
//   }

//   function decreaseScore(runs) {
//     score -= runs;
//     console.log(`${runs} runs`);
//   }

//   function getRun() {
//     return score;
//   }

//   return{increaseScore, decreaseScore, getRun}

// }

// const game = createGame();

// game.increaseScore(30);
// game.increaseScore(20);
// game.decreaseScore(10);
// console.log(`the final scor is ${game.getRun()}runs`);




// function sayHello() {
//     window.alert("Hello");
// }


// // setTimeout(function(){window.alert("hello siva")}, 5000);
// setTimeout(() => window.alert("hello siva kumar"), 2000);

import { PI, getCircumference, getArea, getVolume } from './mathUtil.js';

console.log(PI);
