// contoh 1 array
const angka = [1, 2, 3];
// contoh array dengan method map
const hasil = angka.map((n) => n * 2);
console.log(hasil);
// latihan soal 1 array
const buah = ["Apel", "Mangga", "Jeruk"];
// jawaban array method dengan map
const hasilBuah = buah.map((n) => "Buah " + n);
console.log(hasilBuah);

// contoh 2 dengan object
const users = [
  { id: 1, nama: "Dani", umur: 17 },
  { id: 2, nama: "Raka", umur: 18 },
  { id: 3, nama: "Budi", umur: 16 },
];
// contoh dengan method array map
const panggilNama = users.map((user) => user.nama);
console.log(panggilNama);
// Jawaban 2 memakai literal
const panggilData = users.map(
  (users) => `${users.nama} Berumur ${users.umur} Tahun`,
);
console.log(panggilData);

// Jawaban 3 memanggil hanya umur >= 17
// const dewasa = users.filter((users) => users.umur >= 17);
// const panggilDewasa = dewasa.map((users) => users.nama);

// cara lebih clean
const panggilDewasa = users
  .filter((users) => users.umur >= 17)
  .map((users) => users.nama);
console.log(panggilDewasa);

// latihan 4 menambahkan dengan spread

const baru = [...users, { id: 4, nama: "Salby", umur: 19 }];
console.log(baru);

// Soal 5 Update data tanpa mutasi
const updateUmur = users.map((users) =>
  users.id === 3 ? { ...users, umur: 20 } : users,
);
console.log(updateUmur);

// soal 6 delete data
const deleteUsers = users.filter((users) => users.id !== 2);

console.log(deleteUsers);

// Simulasi Todo APP
const todos = [
  { id: 1, text: "Belajar JS", done: false },
  { id: 2, text: "Belajar React", done: false },
  { id: 3, text: "Ngoding Project", done: false },
];

const ubahDone = todos.map((todos) =>
  todos.id === 2 ? { ...todos, done: !todos.done } : todos,
);
console.log(ubahDone);
// const updateUmur = users.map((users) =>
//   users.id === 3 ? { ...users, umur: 20 } : users,
// );
