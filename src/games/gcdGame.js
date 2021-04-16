import utilities from '../utilities.js';
import runEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const getQuestionAndAnswer = () => {
  const num1 = utilities.getRandom(100);
  const num2 = utilities.getRandom(100);
  const question = `${num1} ${num2}`;
  const rightAnswer = utilities.findGCD(num1, num2);
  return { question, rightAnswer };
};
const gameData = { description, getQuestionAndAnswer };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
