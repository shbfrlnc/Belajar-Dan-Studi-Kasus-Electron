const {
    app
} = require("electron");

const WindowHome = require("./lib/window/windowhome/main");

let windowHome;
app.on("ready", () => {
    windowHome = new WindowHome();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (windowHome === null) {
        windowHome = new WindowHome();
    }
});