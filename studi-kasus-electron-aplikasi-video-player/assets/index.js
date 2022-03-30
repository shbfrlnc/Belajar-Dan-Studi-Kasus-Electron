const {
    dialog
} = require('electron').remote;

$(document).ready(async function () {
    $('#btn-open-video').click(async function () {
        let ret = await dialog.showOpenDialog({
            properties: ['openFile']
        });

        $('#my-video').empty();
        $('#my-video').html(`<video data-role="video-player" data-src="${ret.filePaths[0]}"></video>`);
    });
});