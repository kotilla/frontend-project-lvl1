import utilities from '../utilities.js';
import runEngine from '../index.js';

const description = 'Answer "yes" if the number is prime, otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = utilities.getRandom(100);
  const rightAnswer = utilities.isPrime(question);
  return { question, rightAnswer };
};
const gameData = { description, getQuestionAndAnswer };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
