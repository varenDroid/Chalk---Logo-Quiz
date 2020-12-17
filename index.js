let readlineSync = require('readline-sync');
let chalk = require('chalk')

let score = 0;

function welcome(){
  let userName = readlineSync.question('May I have your name? ');
  let welcomeMessage = "Welcome "+ userName + " to guess the Logos!";
  console.log(welcomeMessage); 
}

function askLogoQuestion(){
  let oneline = "1010101010"
  for(let i =0 ; i < 5 ; i++){
    console.log(chalk.red(oneline) + chalk.green(oneline))
  }
  for(let i =0 ; i< 5 ; i++){
    console.log(chalk.blue(oneline) + chalk.yellow(oneline))
  }
  let userAnswer = readlineSync.question("Which conpany's logo is this? ");
  if(userAnswer.toLocaleUpperCase() ===  "MICROSOFT"){
    console.log("Thats rigt!");
    score = score +1;
    console.log("Your score is: " + score);
  }

}

welcome();
askLogoQuestion();




