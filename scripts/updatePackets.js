const { readdirSync } = require('fs');
const { resolve } = require('path');

const args = process.argv.slice(2);

const [from, to, prefix] = args;

if (!from || !to) {
  throw new Error('You need to specify the directory.');
}

const fromDir = resolve(__dirname, from);
const toDir = resolve(__dirname, to);

const startsWithPrefix = (file) => (prefix ? file.startsWith(prefix) : true);
const removeFileExtension = (file) => file.split('.')[0];
const readFolder = (dir) =>
  readdirSync(dir).filter(startsWithPrefix).map(removeFileExtension);

const fromFiles = readFolder(fromDir);
const toFiles = readFolder(toDir);

const implementedCount = fromFiles.filter((file) =>
  toFiles.includes(file),
).length;

const markdown = fromFiles
  .map((file) => `- [${toFiles.includes(file) ? 'x' : ' '}] ${file}`)
  .join('\n');

console.log(
  `${implementedCount}/${fromFiles.length} (${
    (implementedCount * 100) / fromFiles.length
  })%`,
  '\n',
);
console.log(markdown);
