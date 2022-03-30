const JavaScriptObfuscator = require('javascript-obfuscator');
const copydir = require('copy-dir');
const fs = require('fs')

// copy semua isi src ke srcc, srcc adalah versi ter-compile
copydir.sync('./src', './srcc', {
    utimes: true,
    mode: true,
    cover: true
});

// compile/obfuscate
function walkDirRecursive(pathInput) {
    let dir = fs.opendirSync(pathInput)
    let val = dir.readSync()
    while (val) {
        if ((pathInput + '/' + val.name).includes('vendor')) { //skip directory
            console.log("SKIPPED: " + pathInput + '/' + val.name);
        } else {
            if (val.name.includes('.js')) { //hanya file js
                console.log("INCLUDED: " + pathInput + '/' + val.name);
                let scriptContent = fs.readFileSync(pathInput + '/' + val.name, 'utf8');
                let obfuscationResult = JavaScriptObfuscator.obfuscate(scriptContent, {
                    compact: false,
                    controlFlowFlattening: true
                });
                let protectedScriptContent = obfuscationResult.getObfuscatedCode();
                fs.writeFileSync(pathInput + '/' + val.name, protectedScriptContent);
            }
        }

        if (val.isDirectory()) {
            walkDirRecursive(pathInput + '/' + val.name);
        }

        val = dir.readSync();
    }
}

//200
walkDirRecursive('./srcc');

