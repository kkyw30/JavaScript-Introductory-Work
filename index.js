// first JS code
// always save changes to make them visible in browser server
console.log('Hello World');

// RUN node index.js in VS Code terminal instead of command prompt

//let name = 'Borat';    // declare variable
//console.log(name);

// if close VS Code, have to reopen index.html with Live Server to be able to see live changes in browser again

//let firstName = 'Borat';
//let lastName = 'Sagdiyev';

const interestRate = 0.3; 
//interestRate = 1; 
console.log(interestRate);

//let name = 'Kyle'; 
//let age = 19;                     // only one type of number in JS (no distinction b/w ints and floats)
let isApproved = false; 
let firstName = undefined;          // default value/type of vars in JS is undefined (will be undefined if we never initialize it)
let selectedColor = null; 

// JS is dynamically-typed (value of var can change)--even type can be changed (type of var decided at runtime)
// use typeof in console to check the type of a var

// OBJECTS
let person = {          // {} defines object in JS
    name: 'Kyle',       // object is basically a bunch of key-value pairs
    age: 19              
}           

// dot notation to change property of object
person.name = 'Borat'; 

// or use bracket notation to chage object property
person['name'] = 'Steph'; 
console.log(person.name);

// ARRAYS
let selectedColors = ['red', 'blue'];          // initialize array--array lengths are not set at declaration (unlike in Java)
selectedColors[2] = 'green'; 
selectedColors[3] = 1;                         // array types don't have to be the same
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length); 

// FUNCTIONS
function greet() {
    console.log('Hello World');
}

greet(); 

function greet2(name) {      // define function with inputs
    console.log('Hello ' + name);
}

greet2('John');
greet2('Mary'); 

function greet3(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet3('Borat', 'Sagdiyev');

// function to calculate a value
function square(number) {            // don't need return type in method declaration
    return number * number; 
}

let number = square(2); 
console.log(number);

// when we type node index.js in VS Code terminal, it will display all the console log messages inside terminal (same as in web browser)
