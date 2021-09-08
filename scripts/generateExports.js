const { readdirSync, lstatSync } = require('fs');
const { resolve } = require('path');

const [directory, prefix] = process.argv.slice(2);

if (!directory) {
  throw new Error('You need to specify a directory');
}

const filePrefix = prefix ? `${prefix}/` : '';
const files = readdirSync(resolve(directory))
  .filter((file) => lstatSync(resolve(directory, file)).isFile())
  .map((file) => `export * from './${filePrefix}${file.split('.')[0]}';`)
  .join('\n');

console.log(files);
