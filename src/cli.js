import readlineSync from 'readline-sync';

export const ask = (message) => readlineSync.question(message).toString();

export const say = (message) => console.log(message);
