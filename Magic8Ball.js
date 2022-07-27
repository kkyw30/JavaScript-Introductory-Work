// allow user to input a username
var userName = '';
userName = 'Lil Wayne';

// ternary expression determines the right greeting
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// let the user input a question
const userQuestion = 'Will I die or go to jail today?';
userName ? console.log(`${userName} asked: ${userQuestion}`) : console.log(`You asked: ${userQuestion}`);

// define a random number for the eight ball
const randomNumber = Math.floor(Math.random() * 8);

var eightBall = '';
// determine eightball output based on random number generated
switch (randomNumber) {
  case 0: 
    eightBall = 'It is certain';
    break;
  case 1: 
    eightBall = 'It is decidely so';
    break;
  case 2: 
    eightBall = 'Reply hazy try again';
    break;
  case 3: 
    eightBall = 'Cannot predict now';
    break;
  case 4: 
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6: 
    eightBall = 'Outlook not so good';
    break;
  case 7: 
    eightBall = 'Signs point to yes';
    break;
}

console.log(eightBall);

// define variable for user to determine whether they agree
var userAgreement = '';
userAgreement = 'Yes';

// send different statement to console based on whether the user agrees with the eightball prediction
if (userAgreement === 'Yes') {
  console.log(`Glad you agree, ${userName}`) 
} else {
  console.log('I\m sorry about that');
}