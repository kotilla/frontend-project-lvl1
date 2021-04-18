import utilities from '../utilities.js';
import runEngine from '../index.js';

const description = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const { progression, answer } = utilities.deleteNumberOfProgression();
  const question = progression.join(' ');
  const rightAnswer = answer;
  return { question, rightAnswer };
};
const gameData = { description, getQuestionAndAnswer };

const runGame = () => {
  runEngine(gameData);
};

export default runGame;
