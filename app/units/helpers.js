import fs from 'fs';

const packagePath = `${global.electronApp.root}/package.json`;
const packageContent = require(packagePath);

export function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

export function getPackageName() {
  return packageContent.name;
}

export function makeUniqueAppName() {
  let stat = fs.statSync(packagePath);
  let uuid = sha1(stat.mtime.getTime().toString());
  return 'electron-app-' + uuid.substring(0, 10);
}

export function sha1(text) {
  var crypto = require('crypto');
  var hash = crypto.createHash('sha1');
  hash.update(text, 'utf8', 'hex');
  return hash.digest('hex');
}
