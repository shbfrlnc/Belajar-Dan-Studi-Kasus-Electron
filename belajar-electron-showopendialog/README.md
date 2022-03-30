# Belajar Electron ShowOpenDialog

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

Kali ini kita akan belajar `dialog.showOpenDialog` di Electron.

Method `dialog.showOpenDialog` pada Electron digunakan untuk membuka dialog untuk keperluan tertentu, seperti membuka file atau directory.

Method ini memiliki beberapa parameter yang memiliki efek yang berbeda-beda.

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
	// buat browser window
    win = new BrowserWindow();

	// dialog untuk membuka file, uncomment untuk mencobanya
    // const result = await dialog.showOpenDialog(win, {
    //     title: 'Open Project File',
    //     properties: [
    //         'openFile'
    //     ],
    //     filters: [
    //         {
    //             name: 'Dokumen',
    //             extensions: ['pdf']
    //         }
    //     ]
    // });
    // console.log(result); //perhatikan hasilnya

	//dialog untuk membuka directory
    const result = await dialog.showOpenDialog(win, {
        title: 'Open Project Folder',
        properties: [
            'openDirectory'
        ]
    });
    console.log(result); //perhatikan hasilnya
})
```

## Info Tambahan

Traktir Saya:

https://sociabuzz.com/lsfkrshb/tribe

Channel YouTube Saya:

https://www.youtube.com/c/shbfrlnc
