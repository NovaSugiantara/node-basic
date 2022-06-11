const op = require("./module")
const judul = op.title;
const opTambah = op.tambah(10, 5);
const opKali = op.kali(10, 5);
const opKurang = op.kurang(10, 5);
const opBagi = op.bagi(10, 5);

console.log(judul);
console.log("Hasil Penjumlahan = " + opTambah);
console.log("Hasil Penjumlahan = " + opKali);
console.log("Hasil Penjumlahan = " + opKurang);
console.log("Hasil Penjumlahan = " + opBagi);