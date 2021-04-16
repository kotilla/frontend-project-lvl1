const getRandom = (max) => Math.floor(Math.random() * max);

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

export default {
  getRandom,
  getRandomOperation,
  isEven,
  getCalculatorQuestion,
  calculator,
  findGCD,
};
