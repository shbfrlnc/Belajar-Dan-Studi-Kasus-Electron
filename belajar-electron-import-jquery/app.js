const {
    app,
    BrowserWindow
} = require('electron');

let win;

app.on('ready', () => {
    win = new BrowserWindow({
        webPreferences: {
            contextIsolation: false,
            enableRemoteModule: true,
            nodeIntegration: true
        }
    });

    win.loadURL(`file://${__dirname}/index.html`);
});