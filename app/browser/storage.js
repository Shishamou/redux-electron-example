import * as helpers from '../units/helpers';
import StateStorage from '../storage/StateStorage';

const appName = helpers.getPackageName() || helpers.makeUniqueAppName();

const storage = new StateStorage(`${helpers.getUserHome()}/.${appName}/config.json`);

process.on('exit', function() {
  storage.save();
});

module.exports = storage;
