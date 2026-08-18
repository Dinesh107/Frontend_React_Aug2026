// printf();
// cout()
// System.out.println()
// console.writeLine();
// print("", 1, true or false, 0.4, '')

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



