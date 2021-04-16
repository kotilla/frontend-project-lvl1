import utilities from '../utilities.js';
import runEngine from '../index.js';

const description = 'What is result if the expression?';
const getQuestionAndAnswer = () => {
  const question = utilities.getCalculatorQuestion();
  const rightAnswer = utilities.calculator(eval(question));
  return { question, rightAnswer };
};
const gameData = { description, getQuestionAndAnswer };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
