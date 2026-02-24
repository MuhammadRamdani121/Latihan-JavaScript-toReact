const angka = [1, 2, 3];

const hasil = angka.map((angka) => angka * 2);
console.log(hasil);

const buah = ["apel", "Pir", "Melon"];
const hasilBuah = buah.map((buah) => "Buah " + buah);
console.log(hasilBuah);

const users = [
  { id: 1, nama: "Dani", umur: 17 },
  { id: 2, nama: "Raka", umur: 18 },
  { id: 3, nama: "Budi", umur: 16 },
];
const updateUsers = users
  .filter((users) => users.umur >= 17)
  .map((users) => users.nama);
console.log(updateUsers);
