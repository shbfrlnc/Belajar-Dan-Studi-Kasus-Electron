const {
    app,
    BrowserWindow
} = require('electron');

let win;

app.on('ready', () => {
    win = new BrowserWindow();
    // win.loadURL("https://duckduckgo.com");
    win.loadURL(`file://${__dirname}/index.html`);
});