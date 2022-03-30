const {
    app,
    dialog,
    BrowserWindow
} = require('electron');

let win;
app.on('ready', async () => {
    win = new BrowserWindow();

    // await dialog.showMessageBox({
    //     message: 'Hello World'
    // });

    // await dialog.showMessageBox(win, {
    //     message: 'Hello World'
    // });

    // await dialog.showMessageBox({
    //     message: 'Hello World',
    //     type: 'error'
    // });

    // await dialog.showMessageBox({
    //     message: 'Hello World',
    //     type: 'info'
    // });

    // const buttonID = await dialog.showMessageBox({
    //     message: 'Hello World',
    //     buttons: [
    //         'Ya',
    //         'Tidak',
    //         'Batalkan'
    //     ]
    // });
    // console.log(buttonID);

    // const buttonID = await dialog.showMessageBox({
    //     message: 'Hello World',
    //     buttons: [
    //         'Ya',
    //         'Tidak',
    //         'Batalkan'
    //     ],
    //     checkboxLabel: 'Coba Checkbox',
    //     checkboxChecked: false
    // });
    // console.log(buttonID);
});
