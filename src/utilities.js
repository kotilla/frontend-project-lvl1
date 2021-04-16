const getRandom = (max) => Math.floor(Math.random() * max);

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

const calculator = (stringForCalculate) => eval(stringForCalculate);

export default {
  getRandom,
  getRandomOperation,
  isEven,
  getCalculatorQuestion,
  calculator,
};
