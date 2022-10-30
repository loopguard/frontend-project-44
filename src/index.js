import { ask, say } from './cli.js';

const BRAIN_GAMES_WELCOME_MESSAGE = 'Welcome to the Brain Games!\nMay I have your name? ';

export const greeting = () => {
  const userName = ask(BRAIN_GAMES_WELCOME_MESSAGE);
  say(`Hello ${userName}!`);

  return userName;
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const gameOver = (userAnswer, correctAnswer, userName) => {
  say(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
  );
};

export const runGame = (userName, questionFunc) => {
  let count = 0;
  const limit = 3;
  while (count < limit) {
    const [question, correctAnswer] = questionFunc();
    say(`Question: ${question}`);

    const userAnswer = ask('Your answer: ');
    if (userAnswer === correctAnswer) {
      say('Correct!');
      count += 1;
    } else {
      gameOver(userAnswer, correctAnswer, userName);
      break;
    }
    if (count === limit) {
      say(`Congratulations, ${userName}!`);
    }
  }
};
