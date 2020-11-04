// Create an app that calculates the total restuarant bill based on the level of service recieved.

// Logic

// Check user input is valid (future)
// Check overall satisfaction is valid, between 1 - 10 (future)
// Create functions for each piece of logic (future)
// Calculate the overall satisfaction (1 - 10) done
// Use overalll satisfaction, to assign value for tip
// Calculate the total based on bill and service level

// Actions

// Input bill price
// Input the ratings for Checks, Food Quality, Welcoming Skills - (1 - 10)
// Show the total

// Data

// Bill price
// Rating
// Overall satisfaction

const bill = prompt('How much was the bill?')

let service = prompt('How was the waiter service? Input a number between 1 - 10')

/*
while (service > 10 || service <= 0 ) {

  console.log("Input number between 1 and 10")
  let service = prompt('How was the waiter service? Input a number between 1 - 10')
  break;
}
*/

do {
  console.log("Input number between 1 and 10")
  break;
} while (service > 10 || service <= 0)

/*
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
*/

let quality = prompt('How was the quality? Input a number between 1 - 10')

let environment = prompt('How was the environment? Input a number between 1 - 10')

service = parseInt(service)
quality = parseInt(quality)
environment = parseInt(environment)

const overallSatisfaction = (service + quality + environment) / 3

// Select level of service: 
// 10: 20%
// 6-9: 15%
// 3-5: 10%
// 1-2: 5%
/*
switch(true) {
  case (overallSatisfaction =10):
    console.log(bill * 1.2)
    break;
  case (overallSatisfaction >= 6):
    console.log(bill * 1.15)
    break;
  case(overallSatisfaction >= 3) :
    console.log(bill * 1.1)
    break;
  default:
    console.log(bill * 1.05)
}
*/

switch(true) {
    case (overallSatifaction >= 10):
        console.log(bill * 1.2)
        break;

    case (overallSatifaction >= 6  && overallSatifaction < 10):
        console.log(bill * 1.15)
        break;
    case (overallSatifaction >=3 && overallSatifaction < 5):
        console.log(bill * 1.1)
        break;
    default:
        console.log(bill * 1.05);


}