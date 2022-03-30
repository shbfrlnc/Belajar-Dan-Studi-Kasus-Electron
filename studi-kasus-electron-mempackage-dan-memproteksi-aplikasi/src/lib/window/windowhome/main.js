const {
    BrowserWindow,
    app,
    Menu
} = require('electron');

const appMenus = require("../../appmenus");

class WindowHome extends BrowserWindow {
    constructor() {
        let width = 1024;
        let height = 768;

        super({
            width,
            height,
            title: app.getName(),
            titleBarStyle: "default",
            frame: true,
            show: false,
            minWidth: 1024,
            minHeight: 768,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true
            }
        });

        this.loadURL(`file://${__dirname}/renderer.html`);

        this.once('ready-to-show', () => {
            this.show();
        });

        this.on('closed', () => {
            // this = null;
        });

        this.focus();

        Menu.setApplicationMenu(Menu.buildFromTemplate(appMenus));
    }
}

module.exports = WindowHome;