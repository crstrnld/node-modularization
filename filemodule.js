const fs = require('fs');

function writeMessage(filename, message) {
  fs.writeFileSync(filename, message);
  return `Pesan berhasil disimpan di file ${filename}`;
}

function readMessage(filename) {
  if (!fs.existsSync(filename)) {
    return "File tidak ditemukan!";
  }
  const data = fs.readFileSync(filename, 'utf8');
  return `Isi file ${filename}: ${data}`;
}

module.exports = { writeMessage, readMessage };
