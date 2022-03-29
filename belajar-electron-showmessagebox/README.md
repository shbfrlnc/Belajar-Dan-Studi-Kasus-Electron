# Belajar Electron ShowMessageBox

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

Method dialog.showMessageBox dalam Electron berfungsi untuk menampilkan kotak pesan seperti alert.

Bedanya, fitur dialog.showMessageBox lebih banyak.

Message box yang ditampilkan bisa berupa "none", "info", "error", "question" atau"warning".

Selain itu, message box juga bisa ditambahkan checkbox.

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

	// message box biasa, uncomment untuk mencobanya
    // await dialog.showMessageBox({
    //     message: 'Hello World'
    // });

	// message box modal. jadi message box ini menutupi parent window nya.
	// uncomment untuk mencobanya
    // await dialog.showMessageBox(win, {
    //     message: 'Hello World'
    // });

	// message box error, uncomment untuk mencobanya
    // await dialog.showMessageBox({
    //     message: 'Hello World',
    //     type: 'error'
    // });

	// message box info, uncomment untuk mencobanya
    // await dialog.showMessageBox({
    //     message: 'Hello World',
    //     type: 'info'
    // });

	// return value dari message box, uncomment untuk mencobanya
    // const buttonID = await dialog.showMessageBox({
    //     message: 'Hello World',
    //     buttons: [
    //         'Ya',
    //         'Tidak',
    //         'Batalkan'
    //     ]
    // });
    // console.log(buttonID);

	// message box dengan checkbox, uncomment untuk mencobanya
    // const buttonID = await dialog.showMessageBox({
    //     message: 'Hello World',
    //     buttons: [
    //         'Ya',
    //         'Tidak',
    //         'Batalkan'
    //     ],
    //     checkboxLabel: 'Coba Checkbox',
    //     checkboxChecked: false
    // });
    // console.log(buttonID);
});
```

