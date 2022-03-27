const {
    ipcRenderer
} = require('electron');

const {
    dialog
} = require('electron').remote;

$(document).ready(function () {
    $('#btn-open-dialog-main').click(function () {
        ipcRenderer.send('open-dialog-main');
    });

    $('#btn-open-dialog-renderer').click(async function () {
        let ret = await dialog.showOpenDialog({
            properties: [
                'openFile'
            ]
        });

        alert(ret.filePaths[0]);
    })
});