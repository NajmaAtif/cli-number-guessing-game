#!/usr/bin/env node
import inquirer from "inquirer"

// computer will generate a random number - Done 
// user input for guessing number - Done
// compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() *6+1)
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message:"Please guess a number between 1-6",

    }

])
if(answers.userGuessedNumber===randomNumber) {
    console.log("congratulation! you guessed right number.");
}
else {
    console.log("Sorry! you guessed wrong number.\n Try again")
}

