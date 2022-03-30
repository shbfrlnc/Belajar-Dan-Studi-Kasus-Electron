const {
    ipcRenderer
} = require("electron");

const dummy = require("../../system/dummy")

$(document).ready(() => {
    $('#app-message').text(dummy.hello())
});