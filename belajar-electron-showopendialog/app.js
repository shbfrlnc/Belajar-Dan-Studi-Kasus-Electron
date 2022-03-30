const {
    app,
    dialog,
    BrowserWindow
} = require('electron');

let win;
app.on('ready', async () => {
    win = new BrowserWindow();

    // const result = await dialog.showOpenDialog(win, {
    //     title: 'Open Project File',
    //     properties: [
    //         'openFile'
    //     ],
    //     filters: [
    //         {
    //             name: 'Dokumen',
    //             extensions: ['pdf']
    //         }
    //     ]
    // });
    // console.log(result);

    const result = await dialog.showOpenDialog(win, {
        title: 'Open Project Folder',
        properties: [
            'openDirectory'
        ]
    });
    console.log(result);
})