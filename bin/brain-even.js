#!/usr/bin/env node

import { say } from '../src/cli.js';
import { getRandomNumber, greeting, runGame } from '../src/index.js';

const BRAIN_EVEN_WELCOME = 'Answer "yes" if the number is even, otherwise answer "no".';

const prepareBrainEvenQuestion = () => {
  const number = getRandomNumber(1, 99);
  const isEven = (number % 2 === 0) ? 'yes' : 'no';

  return [number, isEven];
};

const main = () => {
  const userName = greeting();
  say(BRAIN_EVEN_WELCOME);

  runGame(userName, prepareBrainEvenQuestion);
};

main();
