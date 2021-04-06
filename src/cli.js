import readlineSync from 'readline-sync';
//export const name = readlineSync.question();
export const greeting = (greet) => {
    const name = readlineSync.question(greet);
    console.log('Hello, ' + name + '!');
};
