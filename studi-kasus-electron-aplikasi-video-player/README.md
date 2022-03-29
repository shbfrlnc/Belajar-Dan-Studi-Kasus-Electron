# Studi Kasus Electron Aplikasi Video Player

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

Kali ini, kita akan belajar membuat video player dengan Electron.

Uniknya, kita hanya perlu mengetikkan beberapa baris kode saja sampai jadi.

Aplikasi ini menggunakan Metro CSS dan JQuery.

## Cara Kerja

Pertama-tama kita membuat BrowserWindow yang me-load URL dari file HTML.

Di file HTML tadi kita mengimpor JQuery dan CSS dan JS dari Metro CSS.

```
<!DOCTYPE html>
<html lang="en">
<!-- file: index.html -->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="vendor/metrocss/css/metro-all.min.css">

    <title>Video Player</title>
</head>

<body>
    <button id="btn-open-video" class="button outline large alert w-100">Open Video</button>
    <div id="my-video">
    	<!-- video akan dipasang di sini -->
    </div>

    <script>
    	// cara import jquery di renderer process
        window.jQuery = require('./vendor/jquery/jquery.min.js');
        window.$ = window.jQuery;
    </script>
    <script src="vendor/metrocss/js/metro.min.js"></script>
    <script src="index.js"></script>
</body>

</html>
```

Karena Metro CSS memiliki komponen video player, kita tinggal menggunakannya saja untuk memainkan video.

Di window utama, kita membuat sebuah button atau tombol yang jika di-klik, maka dialog akan dibuka untuk memilih file video.

Selanjutnya, jika user kembali membuka video maka tempelan komponen video player akan dibuat dan ditempelkan ulang.

```
// file: index.js

// begin: import modules
const {
    dialog
} = require('electron').remote;
// end: import modules

// ketika dokumen ready
$(document).ready(async function () {
	// ketika button dengan id btn-open-video diklik
    $('#btn-open-video').click(async function () {
    	// buka open dialog untuk file
        let ret = await dialog.showOpenDialog({
            properties: ['openFile']
        });
		
		// bersihkan elemen di bawah elemen dengan id my-video
        $('#my-video').empty();
        
        // append dengan elemen video (bawaan dari metro css)
        $('#my-video').html(`<video data-role="video-player" data-src="${ret.filePaths[0]}"></video>`);
    });
});
```

## Info Tambahan

Traktir Saya:

https://sociabuzz.com/lsfkrshb/tribe

Channel YouTube Saya:

https://www.youtube.com/c/shbfrlnc
