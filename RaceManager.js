// assign adult race number as random number between 0 and 1000
let raceNumber = Math.floor(Math.random() * 1000);

// declare and initialize registered early variable
var registeredEarly = true;

// declare and initialize variable for runner's age
var runnerAge = 20;

// add 1000 to race number if registered early
if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
}

// log different statement to the console based on whether the adult racer registered early
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`You will race at 9:30 a.m. Your race number is ${raceNumber}`);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`You will race at 11:00 a.m. Your race number is ${raceNumber}`);
}

// statements for the youth race
if (runnerAge < 18) {
  console.log(`You will race at 12:30 p.m. Your race number is ${raceNumber}`);
} else if (runnerAge === 18) {
  console.log('See registration desk');
}

// let 18-year old choose whether they want to race in the adult race or the youth race
var adultRace = false;
adultRace = true;

// log corresponding statements to the console based on the racer's choice
if (adultRace === true) {
  console.log(`You have chosen to run in the adult race. Your race number is ${raceNumber}. Good luck.`);
} else {
  console.log(`You have chosen to run in youth race.`);
}

// determine race time and race number based on the racer's registration time
if (registeredEarly === true) {
  raceNumber = raceNumber;
  console.log(`You will run in the early race at 9:30 a.m. Your race number is ${raceNumber}`);
} else {
  raceNumber -= 1000;
  console.log(`You will run in the race at 11:00 a.m. Your race number is ${raceNumber}`);
}