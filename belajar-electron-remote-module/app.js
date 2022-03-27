const {
    app,
    BrowserWindow,
    ipcMain,
    dialog
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

ipcMain.on('open-dialog-main', async (event, args) => {
    let ret = await dialog.showOpenDialog({
        properties: [
            'openFile'
        ]
    });

    console.log(ret.filePaths[0]);
});