const getRandom = () => Math.floor(Math.random() * 100);
const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default {
  getRandom,
  isEven,
};
