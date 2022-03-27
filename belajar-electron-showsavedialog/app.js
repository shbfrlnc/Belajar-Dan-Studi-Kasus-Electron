const {
    app,
    dialog,
    BrowserWindow
} = require('electron');

let win;
app.on('ready', async () => {
    win = new BrowserWindow();

    const result = await dialog.showSaveDialog(win, {
        title: 'Judul Dialog',
        defaultPath: 'D:\\',
        filters: [{
            name: 'JavaScript',
            extensions: ['js']
        }]
    });

    console.log(result);
});