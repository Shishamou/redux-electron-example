import { dialog } from 'electron';
import storage from '../browser/storage';
import * as types from '../contants/actions';

import fs from 'fs';
import naturalSort from 'javascript-natural-sort';

const initialState = {
  path: storage.get('path') || require('../units/helpers').getUserHome()
};

const { electronApp } = global;

export default function(state = initialState, action) {
  let { path } = state;

  switch (action.type) {
    case types.SELECT_DIRECTORY:
      path = dialog.showOpenDialog(electronApp.windows.main, {
        defaultPath: state.path,
        properties: ['openDirectory']
      });

      if ( ! path) {
        return state;
      }
      path = path[0];


    case types.INIT:
      let files = fs.readdirSync(path);
      files = files.sort(naturalSort);

      storage.set('path', path);
      return Object.assign({}, state, { path, files });

  }

  return state;
}

function isDirectory(path) {
  try {
    if (fs.statSync(path).isDirectory())
      return true;
  } catch (e) {}

  return false;
}
