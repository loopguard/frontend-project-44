#!/usr/bin/env node

import { greeting, readInput } from '../src/cli.js';

const BRAIN_EVEN_WELCOME = 'Answer "yes" if the number is even, otherwise answer "no".';
const BRAIN_EVEN_QUESTION = 'Question:';

const getRandomNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  const isEven = (number % 2 === 0) ? 'yes' : 'no';

  return [number, isEven];
};

const gameOver = (userAnswer, correctAnswer, userName) => {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
  );
};

const runBrainEvenGame = (userName) => {
  console.log(BRAIN_EVEN_WELCOME);

  let count = 0;
  const limit = 3;
  while (count < limit) {
    const [number, correctAnswer] = getRandomNumber(1, 99);
    console.log(`${BRAIN_EVEN_QUESTION} ${number}`);

    const userAnswer = readInput('Your answer: ');
    if (!['yes', 'no'].includes(userAnswer)) {
      gameOver(userAnswer, correctAnswer, userName);
      break;
    }
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      gameOver(userAnswer, correctAnswer, userName);
      break;
    }
    if (count === limit) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

const main = () => {
  runBrainEvenGame(greeting());
};

main();
