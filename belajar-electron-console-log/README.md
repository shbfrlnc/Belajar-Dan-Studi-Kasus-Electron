# Belajar Electron Console Log

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

Memahami perilaku console.log di main dan renderer process di Electron cukup penting.

## Penjelasan

```
// file: app.js

// begin: import modules
const {
    app,
    BrowserWindow
} = require('electron');
// end: import modules

// variabel yang menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on('ready', () => {
    win = new BrowserWindow(); // buat Browser Window

    win.loadURL(`file://${__dirname}/index.html`); // buka URL dari index.html

    // console.log("Console Log di main process"); // ini dilakukan di main process
})
```

```
// file: index.js

console.log("Console Log di renderer process") // kali ini dilakukan di main process via script tag
```

Artinya teks akan muncul di console inspector sesuai dengan yang ada pada index.js:

```
console.log("Console Log di renderer process") // kali ini dilakukan di main process via script tag
```

Jika Anda meng-uncomment baris ini di app.js:

```
// console.log("Console Log di main process"); // ini dilakukan di main process
```

Maka Anda juga akan mendapati teks "Console Log di main process" muncul pada console di operating system Anda.

## Info Tambahan

Traktir Saya:

https://sociabuzz.com/lsfkrshb/tribe

Channel YouTube Saya:

https://www.youtube.com/c/shbfrlnc