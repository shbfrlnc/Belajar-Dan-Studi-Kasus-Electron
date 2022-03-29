# Belajar Electron ipcMain dan ipcRenderer

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

Kali ini, kita akan belajar ipcMain dan ipcRenderer di Electron.

Konsep main dan renderer process sangat penting untuk dipahami bagi developer aplikasi yang menggunakan framework Electron.

Oleh karena itu, kita harus bisa memahaminya.

## Penjelasan

```
// file: app.js

// begin: import module
const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron');
// end: import module

// buat variable win untuk menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on('ready', () => {
	// buat BrowserWindow dengan webPreferencesnya
    win = new BrowserWindow({
        webPreferences: {
            contextIsolation: false,
            enableRemoteModule: true,
            nodeIntegration: true
        }
    });

	//load index.html
    win.loadURL(`file://${__dirname}/index.html`);
});

// di sini kita meng-handle event "button-click" yang dikirimkan dari renderer process
ipcMain.on('button-click', (event, args) => {
    console.log("my name is " + args.name + " and my age is: " + args.age);
    
    // reply ke pemanggil
    event.reply('button-click-reply', 'reply from main process (button-click)');
    
    // reply dengan webContents.send
    win.webContents.send('from-win-webcontents-send', 'reply from win.webContents.send');
});
```

Sementara itu, di renderer process:

```
// file: index.js
// dimuat dari index.html

// begin: import modules
const {
    ipcRenderer
} = require('electron');
// end: import modules

// ketika dokumen html ready
$(document).ready(function () {

	// ketika button dengan id: btn-send-to-main-process diklik
    $('#btn-send-to-main-process').click(function () {
    	// kirim event ke main process
        ipcRenderer.send('button-click', { name: "swlrnshw-200", age: "30an" });
    })
	
	// balasan dari main process (dengan event.reply di main process)
    ipcRenderer.on('button-click-reply', (event, args) => {
        alert(args);
    });

	// balasan dari main process (dengan webContents.send)
    ipcRenderer.on('from-win-webcontents-send', (event, args) => {
        alert(args);
    });
});
```

## Traktir

Traktir saya di sini:

https://sociabuzz.com/lsfkrshb/tribe
