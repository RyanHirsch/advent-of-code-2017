import { join, resolve } from 'path';
import { readdirSync, readFileSync } from 'fs';

function result(label, fn, input) {
  console.log(`${label} solution is ${fn(input)}`); // eslint-disable-line no-console
}

const getFiles = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(x => /day\d+\.js$/.test(x));

const dayDirectories = getFiles(resolve(__dirname)).map(x => x.replace(__dirname, '.'));

Promise.all(dayDirectories.map(d => import(d))).then(fns =>
  fns
    .map(f => f.default)
    .forEach((fn, idx) =>
      result(
        dayDirectories[idx],
        fn,
        readFileSync(
          resolve(__dirname, '..', 'input', dayDirectories[idx].replace(/\.js$/, '.txt')),
          'utf8'
        )
      )
    )
);
