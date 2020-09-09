/** @format */

const { BrowserWindow, app } = require('electron');
const url = require('url');
const path = require('path');

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        frame: false,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
        },
        autoHideMenuBar: true,
    });
    const startUrl =
        process.env.ELECTRON_START_URL || // if I am in dev mode I will set the start URL so that I can load my react changes that will be
        url.format({
            // being shown at localhost:3000, when I build the app the files will be loaded instead
            pathname: path.join(__dirname, '/../build/index.html'),
            protocol: 'file:',
            slashes: true,
        });
    mainWindow.loadURL(startUrl);
    mainWindow.webContents.openDevTools();
});
