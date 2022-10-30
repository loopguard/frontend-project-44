#!/usr/bin/env node

import { say } from '../src/cli.js';
import { getRandomNumber, greeting, runGame } from '../src/index.js';

const BRAIN_PROGRESSION_WELCOME = 'What number is missing in the progression?';

const prepareBrainProgressionQuestion = () => {
  const start = getRandomNumber(1, 9);
  const step = getRandomNumber(2, 5);

  const progression = [start];
  for (let i = 0; i < 10; i += 1) {
    const prev = progression[progression.length - 1];
    progression.push(prev + step);
  }

  const index = getRandomNumber(0, 9);
  const correctAnswer = progression[index];
  progression[index] = '..';

  return [progression.join(' '), correctAnswer.toString()];
};

const main = () => {
  const userName = greeting();
  say(BRAIN_PROGRESSION_WELCOME);

  runGame(userName, prepareBrainProgressionQuestion);
};

main();
