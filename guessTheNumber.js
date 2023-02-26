// import * as readline from 'node:readline/promises';


function guessAnumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });


    let computerGuess = Math.floor(Math.random() * 100);
        let recursiveAsynsReadLine = function () {
            readline.question('Guess the number (0-100): ', number => {
                guess = Number(number);
            
            if (guess <= 100 && guess >= 0) {
                if (guess == computerGuess) {
                    console.log('You guess it!');
                    return readline.close();
                } else if (guess < computerGuess) {
                    console.log('Too low!');
                    recursiveAsynsReadLine();
                } else if (guess > computerGuess) {
                    console.log('Too High!');
                    recursiveAsynsReadLine();
                }
            } else {
                console.log('Invalid input! Try again...');
                recursiveAsynsReadLine();
            }

        });
    }
    recursiveAsynsReadLine();


}
guessAnumber()

