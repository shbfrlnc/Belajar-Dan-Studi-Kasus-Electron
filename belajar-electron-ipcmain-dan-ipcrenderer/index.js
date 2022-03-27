const {
    ipcRenderer
} = require('electron');

$(document).ready(function () {
    $('#btn-send-to-main-process').click(function () {
        ipcRenderer.send('button-click', { name: "swlrnshw-200", age: "30an" });
    })

    ipcRenderer.on('button-click-reply', (event, args) => {
        alert(args);
    });

    ipcRenderer.on('from-win-webcontents-send', (event, args) => {
        alert(args);
    });
});