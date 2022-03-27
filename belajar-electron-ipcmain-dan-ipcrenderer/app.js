const {
    app,
    BrowserWindow,
    ipcMain
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

ipcMain.on('button-click', (event, args) => {
    console.log("my name is " + args.name + " and my age is: " + args.age);
    event.reply('button-click-reply', 'reply from main process (button-click)');
    win.webContents.send('from-win-webcontents-send', 'reply from win.webContents.send');
});