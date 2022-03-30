const {
    dialog
} = require('electron');

//200
const mainMenuTemplate = [{
    label: "File",
    submenu: [{
        role: "quit"
    }]
},
{
    label: "Edit",
    submenu: [{
        role: "undo"
    },
    {
        role: "redo"
    },
    {
        type: "separator"
    },
    {
        role: "cut"
    },
    {
        role: "copy"
    },
    {
        role: "paste"
    },
    {
        role: "pasteandmatchstyle"
    },
    {
        role: "delete"
    },
    {
        role: "selectall"
    }
    ]
},
{
    label: "View",
    submenu: [{
        role: "reload"
    },
    {
        role: "forcereload"
    },
    {
        role: "toggledevtools"
    },
    {
        type: "separator"
    },
    {
        role: "togglefullscreen"
    }
    ]
},
{
    role: "window",
    submenu: [{
        role: "minimize"
    }, {
        role: "close"
    }]
},
{
    role: "help",
    submenu: [{
        label: "About",
        click() {
            dialog.showMessageBox({
                message: "YourProductName" + " " + "2.0.0" + " " + "written by: SWLRNSHW-200"
            });
        }
    }]
}
];

module.exports = mainMenuTemplate;