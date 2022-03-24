 /* var x = 5;
var y = 6;
var z = x + y;
console.log(z+x)

let c = 1;
let b = 8;
let u = c + b;
console.log(u)

// let carName = "Volvo";
// document.getElementById("Demo").innerHTML = carName;



var username = prompt("Enter your name:");
document.getElementById("name").innerHTML = username;

alert ("Welcome to ATC " + username)

var question = prompt("Enter your age:");
document.getElementById("age").innerHTML = question;

var question = prompt("Enter your address:");
document.getElementById("address").innerHTML = question;

var question = prompt("Enter your phone-number:");
document.getElementById("number").innerHTML = question; 

// var username = prompt("Enter your name:");
// document.getElementById("name").innerHTML = username;

// let myname = "Tolu"


let num1 =9, num2=3;
console.log("*********")
console.log(num1 * num2)
console.log(num1 - num2)
console.log(num1 + num2)
console.log(num1 / num2)
console.log(num1 ** num2)
console.log(num1 % num2)


var datas = ("Simeon", "Efe", "Tunde", "Walexy", "Bunmi")
document.getElementById("p").innerHTML = "Best Student";
*/

const data = ["Simeon", "Efe", "Tunde", "Walexy", "Bunmi", "Tolu"]

for (let i=0; i < data.length; i++) {
    const element = data[i];
    // console.log(element)
    if (element == "Bunmi") {
        console.log(element + " " + "is a girl");
      }
      else if (element == "Simeon") {
          console.log(element + " " + "too sabi book")
      }
      else {
        console.log (element + " " + "is a boy");
      }
}





// function myFunction() {
//     var name;
//     const gender = ("Simeon", "Efe", "Tunde", "Walexy", "Bunmi", "Tolu")
//     if ( gender = "Bunmi") {
//       gender = "She's a girl";
//     } else {
//       name = "He's a boy";
//     }
//     document.getElementById("gender").innerHTML = gender;
//   }

// function myFunction() {
//   fruits[fruits.length] = "Lemon";
//   document.getElementById("demo").innerHTML = fruits;
// }
