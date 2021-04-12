import readlineSync from 'readline-sync';
import nam from './cli.js';
import utilities from './utilities.js';

const evenGame = () => {
  nam.greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let score = 0; score < 3;) {
    const num = utilities.getRandom();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === utilities.isEven(num)) {
      score += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${utilities.isEven(num)}'.`);
      score = 0;
      console.log(`Let's try again, ${nam.name}`);
    }
  }
  console.log(`Congratulations, ${nam.name}!`);
};

export default {
  evenGame,
};
