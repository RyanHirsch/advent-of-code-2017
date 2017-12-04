import { day1 } from './day-1';
import { day2 } from './day-2';

function result(fn) {
  console.log(`${fn.name} solution is ${fn()}`); // eslint-disable-line no-console
}

[day1, day2].forEach(result);
