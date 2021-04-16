import readlineSync from 'readline-sync';
import greet from './cli.js';

const runEngine = (gameData) => {
  greet.greeting();
  console.log(gameData.description);

  for (let score = 0; score < 3;) {
    const { question, rightAnswer } = gameData.getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(rightAnswer)) {
      score += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      score = 0;
      console.log(`Let's try again, ${greet.name}`);
    }
  }
  console.log(`Congratulations, ${greet.name}!`);
};

export default runEngine;
