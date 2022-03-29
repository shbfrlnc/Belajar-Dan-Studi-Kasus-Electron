# Belajar Electron Import JQuery

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

Kali ini, kita akan belajar cara mengimport JQuery di Electron.

Mengimpor JQuery untuk digunakan dalam electron perlu diperhatikan karena caranya sedikit berbeda dengan biasanya.

## Caranya

```
<!DOCTYPE html>
<html lang="en">
<!-- file: index.html -->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Import JQuery</h1>
    <script>
    	// cara mengimpor jQuery di Electron
        window.jQuery = require("./jquery.min.js"); // require
        window.$ = window.jQuery; // assign
    </script>
    <script src="index.js"></script>
</body>

</html>
```

Selanjutnya, saat membuat BrowserWindow:

```
win = new BrowserWindow({
    webPreferences: { //gunakan konfigurasi ini
    	contextIsolation: false,
    	enableRemoteModule: true,
    	nodeIntegration: true
    }
});
```

## Info Tambahan

Traktir Saya:

https://sociabuzz.com/lsfkrshb/tribe

Channel YouTube Saya:

https://www.youtube.com/c/shbfrlnc
