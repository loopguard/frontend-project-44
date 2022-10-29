import readlineSync from 'readline-sync';

const WELCOME_MESSAGE = 'Welcome to the Brain Games!\nMay I have your name? ';

export const greetings = () => {
    const userName = readlineSync.question(WELCOME_MESSAGE);
    console.log(`Hello, ${userName}!`);
};
