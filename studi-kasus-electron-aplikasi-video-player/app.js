const {
    app,
    BrowserWindow
} = require('electron');

let win;
app.on('ready', () => {
    win = new BrowserWindow({
        height: 565,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });

    win.loadURL(`file://${__dirname}/assets/index.html`)
})