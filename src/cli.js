import readlineSync from 'readline-sync';

const greeting = (greet) => {
  const name = readlineSync.question(greet);
  console.log(`Hello,${name}!`);
};
export default greeting;
