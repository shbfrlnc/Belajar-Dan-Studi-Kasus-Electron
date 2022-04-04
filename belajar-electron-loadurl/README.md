# Belajar Electron loadURL

## Cara Mencoba Kode Ini

Untuk mencoba kode ini, download folder ini.

Selanjutnya, masuk ke dalam folder ini via terminal.

Selanjutnya, jalankan:

```
npm install
```

 Selanjutnya, jalankan:

```
npm run dev
```

## Pendahuluan

Kali ini, kita akan belajar method load URL pada electron.

Load URL bisa diberi argumen berupa URL dari website target yang ingin ditampilkan ke aplikasi Electron atau bisa juga berupa file HTML statis yang ada di komputer lokal.

## Penjelasan

```
// file: app.js

// begin: import modules
const {
    app,
    BrowserWindow
} = require('electron');
// end: import modules

// buat variabel win untuk menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on('ready', () => {
    // buat BrowserWindow
    win = new BrowserWindow();

    // load dengan input URL di web
    // win.loadURL("https://duckduckgo.com");

    // load dengan input URL di file lokal
    win.loadURL(`file://${__dirname}/index.html`);
})
```

# 
