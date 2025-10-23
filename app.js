const math = require('./mathmodule');
const string = require('./stringmodule');
const date = require('./datemodule');
const file = require('./filemodule');

console.log("====================================");
console.log("🧩 PROGRAM MODULARISASI NODE.JS");
console.log("====================================\n");

console.log("🔸 HASIL OPERASI MATEMATIKA:");
console.log(`Penjumlahan 5 + 3 = ${math.add(5, 3)}`);
console.log(`Perkalian 4 × 6 = ${math.multiply(4, 6)}`);
console.log(`Pembagian 10 ÷ 2 = ${math.divide(10, 2)}\n`);

console.log("🔸 MANIPULASI STRING:");
const kalimat = "Belajar Node.js itu menyenangkan";
console.log(`Uppercase: ${string.toUpper(kalimat)}`);
console.log(`Jumlah kata: ${string.countWords(kalimat)} kata\n`);

console.log("🔸 INFORMASI TANGGAL & WAKTU:");
console.log(`Hari ini: ${date.getToday()}`);
console.log(`Waktu sekarang: ${date.getTime()}\n`);

console.log("🔸 OPERASI FILE:");
const pesan = "Halo dunia dari Node.js!";
console.log(file.writeMessage("pesan.txt", pesan));
console.log(file.readMessage("pesan.txt"));

console.log("\n✅ Semua modul berhasil dijalankan tanpa error!");
