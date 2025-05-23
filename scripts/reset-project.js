const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const appDir = path.join(rootDir, 'app');
const exampleDir = path.join(rootDir, 'app-example');

if (!fs.existsSync(appDir)) {
  console.error('Cannot find "app" directory.');
  process.exit(1);
}

if (fs.existsSync(exampleDir)) {
  console.error('"app-example" directory already exists. Aborting to avoid overwriting.');
  process.exit(1);
}

fs.renameSync(appDir, exampleDir);
fs.mkdirSync(appDir);

console.log('Moved ./app to ./app-example and created a blank ./app directory.');

