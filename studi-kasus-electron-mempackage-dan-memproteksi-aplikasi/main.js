if (process.argv.length >= 3) { 
    if (process.argv[2] == "--debug") {
        require("./src/app.js");
    } else {
        require("./srcc/app.js");
    }
} else {
    require("./srcc/app.js");
}