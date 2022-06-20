// program for a simple calculator

// take the first number input
const number1 = parseFloat(prompt('Enter first number: '));

// take the operator
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the second number input
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
alert(`${result}`)
