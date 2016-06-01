import { app, BrowserWindow } from 'electron';
import storage from './storage';

const { electronApp } = global;
const windowDefaultConfig = {
  width: 800,
  height: 600,
  minWidth: 600,
  minHeight: 400,
  useContentSize: true
};

function initial() {
  let mainWindow = (electronApp.windows || (electronApp.windows = {})).main;
  if (mainWindow instanceof BrowserWindow) {
    return;
  }

  mainWindow = new BrowserWindow(Object.assign({}, windowDefaultConfig, storage.get('window')));

  mainWindow.loadURL(`file://${electronApp.root}/static/index.html`);

  // 開啟開發者工具
  mainWindow.webContents.openDevTools();

  // 當視窗關閉時保存狀態
  mainWindow.on('close', function () {
    storage.set('window', mainWindow.getBounds());
  });

  // 當視窗已關閉清除變數
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  electronApp.windows.main = mainWindow;
}

app.on('ready', initial);

app.on('activate', initial);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
