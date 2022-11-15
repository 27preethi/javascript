
//Click the button to get every element in the array has a value above a specific number.
var ages = [32, 33, 12, 40];

function checkAdult(age) {
  return age >= document.getElementById("ageToCheck").value;
}
//Click the button to return the value of the first element in the array that has a value above a specific number.
function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}
//
var ages = [4, 12, 16, 20];

function checkAdult(age) {
  return age >= document.getElementById("ageToCheck").value;
}

function myFunction1() {
  document.getElementById("demo1").innerHTML = ages.find(checkAdult);
}
//Get the sum of the numbers in the array.
var sum = 0;
var numbers = [65, 44, 11, 4];
numbers.forEach(myFunction2);

function myFunction2(item) {
  sum += item;
  document.getElementById("demo2").innerHTML = sum;
}
//Check if the fruit array contains "Banana", when starting the search from position 3.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Banana", 0);

document.getElementById("demo3").innerHTML = n;
//Multiply every element in the array with 10.
var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction3)

function myFunction3(num) {
  return num * 10;
}

document.getElementById("demo4").innerHTML = newarray;
//Click the button to extract the third and fourth elements, using negative numbers.
function myFunction4() {
  var fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  var myBest = fruits2.slice(-5, -1);
  document.getElementById("demo5").innerHTML = myBest;
}