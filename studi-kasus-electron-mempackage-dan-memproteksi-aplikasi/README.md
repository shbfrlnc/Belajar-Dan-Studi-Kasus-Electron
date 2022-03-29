# Studi Kasus Electron Mempackage dan Memproteksi Aplikasi

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

Topik yang saya bahas kali ini adalah cara mempackage dan memproteksi kode aplikasi Electron.

Secara default, electron bisa menjalankan kode tanpa di-obfuscate.

Akan tetapi, merilis aplikasi Electron dengan kodenya yang masih belum di-obfuscate terlalu beresiko jika aplikasi tersebut bukan open source.

Walaupun begitu, ada metode kompresi script Electron yang bisa mem-bundle script Electron dalam bentuk file asar.

Sayangnya, kode yang dikompresi dengan cara tersebut dapat dengan mudah diekstrak dan dilihat bentuk aslinya.

## Cara Kerja

Dalam mem-obfuscate kode Electron, ada beberapa poin yang dilakukan:

1. Menulis kode aslinya (semua script yang ditulis di dalam folder src, lihat kodenya di repository saya).
2. Membuat starter (main.js).
3. Membuat obfuscator (compile.js).
4. Meng-copy kode asli ke folder terpisah dengan struktur yang sama dengan kode aslinya.
5. Melakukan obfuscate pada sebagian atau seluruh kode di poin 1.

Yang perlu Anda ketahui tentang starter di poin 2 adalah, bahwa kode starter tersebut bisa menjalankan kode yang sudah di-obfuscate dan yang belumnya.

```
// file: main.js

if (process.argv.length >= 3) { 
	// jika ada parameter --debug saat aplikasi dijalankan
    if (process.argv[2] == "--debug") {
        require("./src/app.js");
    } else {
    	// kalau tidak ada parameter --debug
        require("./srcc/app.js");
    }
} else {
    require("./srcc/app.js");
}
```

```
// file: compile.js

// begin: import modules
const JavaScriptObfuscator = require('javascript-obfuscator');
const copydir = require('copy-dir');
const fs = require('fs')
// end: import modules

// copy semua isi src ke srcc, srcc adalah versi ter-compile
copydir.sync('./src', './srcc', {
    utimes: true,
    mode: true,
    cover: true
});

// compile/obfuscate
// caranya dengan menelusuri direktori dari root sampai ke semua children
function walkDirRecursive(pathInput) {
    let dir = fs.opendirSync(pathInput)
    let val = dir.readSync()
    while (val) {
        if ((pathInput + '/' + val.name).includes('vendor')) { //skip directory vendor
            console.log("SKIPPED: " + pathInput + '/' + val.name);
        } else {
            if (val.name.includes('.js')) { //hanya file js
                console.log("INCLUDED: " + pathInput + '/' + val.name);
                
                // mulai meng-obfuscate
                let scriptContent = fs.readFileSync(pathInput + '/' + val.name, 'utf8');
                let obfuscationResult = JavaScriptObfuscator.obfuscate(scriptContent, {
                    compact: false,
                    controlFlowFlattening: true
                });
                let protectedScriptContent = obfuscationResult.getObfuscatedCode();
                fs.writeFileSync(pathInput + '/' + val.name, protectedScriptContent);
                // selesai meng-obfuscate
            }
        }

        if (val.isDirectory()) {
            walkDirRecursive(pathInput + '/' + val.name);
        }

        val = dir.readSync();
    }
}

walkDirRecursive('./srcc');
```

Walaupun begitu, ketika aplikasi Electron dibuat installernya, hanya kode yang ter-obfuscate saja yang disertakan.

Lalu mengapa kode starter dirancang untuk menjalankan kode yang belum di-obfuscate juga?

Jawabannya adalah karena selama development, kemungkinan akan ada banyak perubahan di kode aslinya sehingga masih perlu dicoba dijalankan dalam bentuk asli.

Selain itu, dalam contoh di artikel ini, tidak semua kode di-obfuscate.

HTML, CSS, JSON, dan script yang ada di dalam node_modules dalam artikel ini, tidak di-obfuscate.

Jadi, ketika kode asli dianggap selesai, kita hanya perlu menjalankan perintah compile, kemudian dilanjutkan dengan mem-build installernya.
