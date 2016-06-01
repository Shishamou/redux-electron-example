import fs from 'fs';

export default class Storage
{
  constructor(saveName, defaultValue = {}) {
    this.saveName = saveName;
    this.container = defaultValue;
  }

  load() {
    const load = (filename) => {
      try {
        var content = fs.readFileSync(filename, 'utf8');
        content = JSON.parse(content);

        if (typeof content === 'object') {
          return content;
        }
      } catch (e) {
      }

      return {};
    }

    this.container = load(this.saveName);
  }

  save() {
    try {
      fs.writeFileSync(this.saveName, JSON.stringify(this.container));
    } catch (e) {
      throw `儲存失敗：${this.saveName}`;
    }
  }

  set(name, value) {
    return this.container[name] = value;
  }

  get(name) {
    return this.container[name];
  }

  clear() {
    this.container = {};
  }
}
