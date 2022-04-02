# Belajar Electron ShowSaveDialog

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

Kali ini kita akan belajar menggunakan dialog.showSaveDialog.

dialog.showSaveDialog digunakan untuk membantu kita memilih lokasi file yang akan di-save melalui Electron.

Method ini digunakan untuk menampilkan window yang dirancang untuk memilih file maupun folder.

Dalam penggunaannya, kita bisa memilih default path saat window tersebut dibuka, serta filter jenis file-nya.

## Penjelasan

```
// file: app.js

// begin: import modules
const {
    app,
    dialog,
    BrowserWindow
} = require('electron');
// end: import modules

// buat variabel win untuk menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on('ready', async () => {
	// buat BrowserWindow
    win = new BrowserWindow();

	// buka save dialog
	// judulnya: Judul Dialog
	// path default nya: D:
	// filter untuk jenis file JavaScript
    const result = await dialog.showSaveDialog(win, {
        title: 'Judul Dialog',
        defaultPath: 'D:\\',
        filters: [{
            name: 'JavaScript',
            extensions: ['js']
        }]
    });

    console.log(result); // perhatikan hasilnya
});
```

## Info Tambahan

Traktir Saya:

https://sociabuzz.com/lsfkrshb/tribe

Channel YouTube Saya:

https://www.youtube.com/c/SHBFRLNC
