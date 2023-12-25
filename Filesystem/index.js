const Fs = require('fs');
const { resolve } = require('path');


const fileReadCallback = (error, data) => {

    if (error) {
        console.log('Gagal membaca data');
        return;
    }
    console.log(data);

};

Fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);