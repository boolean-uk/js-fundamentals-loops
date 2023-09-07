//
// Functions
//
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
//

// 1a. Complete the function declaration below by making it
// console log "Hello, world!". Don't return a value.
function sayHello() {
    console.log('Hello World!')
}
sayHello();


// 1b. Call your function below this comment

function sayHello()

// 2a. Create a function called sayGoodbye that returns "Goodbye, world!"

function sayGoodbye() {
    return 'goodbye, world'
}


// 2b. Call your sayGoodbye function and save what it returns into a
// variable called goodbyeMessage
function sayGoodbye (){
    return ('Goodbye, world')
}
const goodbyeMessage = sayGoodbye ();



// 2c. Console log your goodbyeMessage variable
console.log(goodbyeMessage);


// 3a. Create a function called sayMessage that accepts one input
// parameter called name. Make the function return a string that says
// "Hello NAME", but replace NAME with the value of the name parameter

function sayMessage (name){
    return 'hello + name'
}
const salute = sayMessage('Papi')
console.log(salute)


// 3b. Call your sayMessage function, giving it a value to use for the
// name parameter, and save what it returns into a variable called myMessage

function sayMessage

// 3c. Console log your myMessage variable

// 4a. Create a function called subtract that accepts two input parameters
// called num1 and num2. Make the function subtract num2 from num1 and return the result.

// 4b. Call your subtract function and save what it returns into a variable;
// do this 3 times with different input parameters

// 4c. Console log the 3 variables you created

// 5a. Create a function that accepts one input parameter called bool.
// Make your function change the isComplete variable below to whatever
// value is provided to the bool parameter.
// If anything except true or false is provided to the bool parameter,
// console log out "Invalid value provided" without changing the isComplete variable
// You can name your function whatever you think makes sense
let isComplete = false;

// 5b. To test your work, call your function 3 times;
// Once with true provided to your parameter
// Once with false provided to your parameter
// Once with any other value provided to your parameter