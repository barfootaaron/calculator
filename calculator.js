//Variables for number inputs
var num1 = parseInt(document.getElementById("numberInput1").value);
var num2 = parseInt(document.getElementById("numberInput2").value);

//Create variable for outcome area
var outcome = document.getElementById("outcome");

//Create variables for function buttons
var addButton = document.getElementById("addButton");
var subtractButton = document.getElementById("subtractButton");
var multiplyButton = document.getElementById("multiplyButton");
var divideButton = document.getElementById("divideButton");
var clear = document.getElementById("clearButton");

function reset() {
  window.location.reload();
}



/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
 function multiply(num1, num2) {
 	var product = num1 * num2;
   outcome.innerHTML += product;
   return product;
 }

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function add(num1, num2) {
	var sum = num1 + num2;
   outcome.innerHTML += sum;
   return sum;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtract(num1, num2) {
	var difference = num1 - num2;
   outcome.innerHTML += difference;
   return difference;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divide(num1, num2) {
	var quotient = num1 / num2;
   outcome.innerHTML += quotient;
   return quotient;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them
  Return the value of the operation.
 */

function beSmart(num1, num2, event) {
   var method = event(num1, num2);
   return method;
}

//Event listeners for 4 buttons and matching functions attached
addButton.addEventListener("click", function() {
   var num1 = parseInt(document.getElementById("numberInput1").value);
   var num2 = parseInt(document.getElementById("numberInput2").value);
   beSmart(num1, num2, add);
});
   
subtractButton.addEventListener("click", function() {
   var num1 = parseInt(document.getElementById("numberInput1").value);
   var num2 = parseInt(document.getElementById("numberInput2").value);
   beSmart(num1, num2, subtract);
});

multiplyButton.addEventListener("click",function() {
   var num1 = parseInt(document.getElementById("numberInput1").value);
   var num2 = parseInt(document.getElementById("numberInput2").value);
   beSmart(num1, num2, multiply);
});

divideButton.addEventListener("click", function() {
   var num1 = parseInt(document.getElementById("numberInput1").value);
   var num2 = parseInt(document.getElementById("numberInput2").value);
   beSmart(num1, num2, divide);
});

clear.addEventListener('click', reset);










