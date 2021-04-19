import utilities from '../utilities.js';
import runEngine from '../index.js';

const description = 'What is result if the expression?';
const getQuestionAndAnswer = () => {
  const arrayForCalculate = utilities.getCalculatorQuestion();
  const question = arrayForCalculate.join(' ');
  const rightAnswer = utilities.calculator(arrayForCalculate);
  return { question, rightAnswer };
};
const gameData = { description, getQuestionAndAnswer };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
