# Belajar Electron BrowserWindow

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

Kali ini, kita akan belajar BrowserWindow pada Electron.

BrowserWindow adalah bagian utama dari aplikasi Electron.

Di BrowserWindow, konten dari aplikasi ditampilkan.

```
// file: app.js

// begin: import modules
const {
    app,
    BrowserWindow
} = require('electron');
//end: import modules

//buat variable penampung objek browser window
let win;

//saat app ready
app.on('ready', () => {
    
    win = new BrowserWindow();
});
```

## Penjelasan

Untuk penjelasannya, baca komentar dari kode di atas.

Perlu diketahui bahwa di Electron, "//" atau "/* ... */" adalah komentar.

Kode yang ada di dalam komentar tidak akan dieksekusi.

# 
