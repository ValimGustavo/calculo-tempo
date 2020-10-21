"use strict";
exports.__esModule = true;
var FS = require("fs");
var Path = require("path");
var readLine = require("readline");
var pathForDistFolder = Path.resolve(__dirname, '..', 'dist', 'src', 'ts');
var files = getFilesInFolder(pathForDistFolder);
files.forEach((function (file) {
    if (file.endsWith(".js")) {
        alterImportExtension(Path.resolve(pathForDistFolder, file));
    }
}));
function alterImportExtension(pathFile) {
    var file = interfaceReadline(pathFile);
    var context = '';
    file.on('line', (function (data) {
        data = data.trim();
        if (data.startsWith('import {') && data.endsWith('";')) {
            data = data.replace('";', '.js";');
            console.log(data);
        }
        context += data;
    }));
    file.on('close', function () {
        FS.writeFileSync(pathFile, context);
    });
}
function getFilesInFolder(path) {
    var files = FS.readdirSync(pathForDistFolder);
    return files;
}
function interfaceReadline(path) {
    var file = FS.createReadStream(path, { highWaterMark: 13 });
    return readLine.createInterface({
        input: file,
        crlfDelay: Infinity
    });
}
exports.interfaceReadline = interfaceReadline;
