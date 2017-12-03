import { day1 } from './day-1';

function result(fn) {
  console.log(`${fn.name} solution is ${fn()}`); // eslint-disable-line no-console
}

[day1].forEach(result);
