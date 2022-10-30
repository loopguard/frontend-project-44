#!/usr/bin/env node

import { say } from '../src/cli.js';
import { getRandomNumber, greeting, runGame } from '../src/index.js';

const BRAIN_PRIME_WELCOME = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const prepareBrainPrimeQuestion = () => {
  const number = getRandomNumber(1, 99);
  const answer = isPrime(number) ? 'yes' : 'no';

  return [number, answer];
};

const main = () => {
  const userName = greeting();
  say(BRAIN_PRIME_WELCOME);

  runGame(userName, prepareBrainPrimeQuestion);
};

main();
