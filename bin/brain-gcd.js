#!/usr/bin/env node

import { say } from '../src/cli.js';
import { getRandomNumber, greeting, runGame } from '../src/index.js';

const BRAIN_GCD_WELCOME = 'Find the greatest common divisor of given numbers.';

const prepareBrainGcdQuestion = () => {
  let num1 = getRandomNumber(1, 99);
  let num2 = getRandomNumber(1, 99);

  const question = `${num1} ${num2}`;

  while (num2) {
    const t = num2;
    num2 = num1 % num2;
    num1 = t;
  }

  return [question, num1.toString()];
};

const main = () => {
  const userName = greeting();
  say(BRAIN_GCD_WELCOME);

  runGame(userName, prepareBrainGcdQuestion);
};

main();
