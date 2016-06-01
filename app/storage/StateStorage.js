import fs from 'fs';
import path from 'path';
import Storage from './Storage';

export default class StateStorage extends Storage
{
  constructor(...args) {
    super(...args);
    this.load();
  }

  save() {
    var directory = path.dirname(this.saveName);
    if ( ! this.isDirectory(directory)) {
      fs.mkdir(directory);
    }

    super.save();
  }

  isDirectory(path) {
    try {
      if (fs.statSync(path).isDirectory()) {
        return true;
      }
    } catch (e) {
    }

    return false;
  }
}
