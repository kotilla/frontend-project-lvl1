const getRandom = (max) => Math.floor(Math.random() * max);

const getRandomMinMax = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const calculator = (stringForCalculate) => eval(stringForCalculate);

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getRandomOperation = () => {
  const arrayOfOperator = ['+', '-', '*'];
  return arrayOfOperator[getRandom(3)];
};

const getCalculatorQuestion = () => {
  const num1 = getRandom(10);
  const num2 = getRandom(10);
  const operation = getRandomOperation();
  return `${num1} ${operation} ${num2}`;
};

const findGCD = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
};

const generateProgression = (progressionLength) => {
  const progressionStep = getRandomMinMax(1, 11);
  const progressionArray = [];
  progressionArray.push(getRandom(100));
  for (let count = 0; count <= progressionLength; count += 1) {
    progressionArray.push(progressionArray[count] + progressionStep);
  }
  return progressionArray;
};

const deleteNumberOfProgression = () => {
  const progressionLength = getRandomMinMax(5, 10);
  const indexOfDeleteNumber = getRandom(progressionLength);
  const progression = generateProgression(progressionLength);
  const answer = progression[indexOfDeleteNumber];
  progression[indexOfDeleteNumber] = '..';
  return { progression, answer };
};

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default {
  getRandom,
  getRandomMinMax,
  getRandomOperation,
  isEven,
  getCalculatorQuestion,
  calculator,
  findGCD,
  generateProgression,
  deleteNumberOfProgression,
  isPrime,
};
