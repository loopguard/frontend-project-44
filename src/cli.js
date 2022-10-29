import readlineSync from 'readline-sync';

const BRAIN_GAMES_WELCOME_MESSAGE = 'Welcome to the Brain Games!\nMay I have your name? ';

const readInput = (message) => readlineSync.question(message).toString();

const greeting = () => {
  const userName = readInput(BRAIN_GAMES_WELCOME_MESSAGE);
  console.log(`Hello ${userName}!`);
  return userName;
};

export { BRAIN_GAMES_WELCOME_MESSAGE, readInput, greeting };
