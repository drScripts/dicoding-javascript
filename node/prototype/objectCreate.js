// Object.create

let methodForMahasiswa = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Selamat makan ${this.nama}`);
    console.log(`Energy Kamu bertambah menjadi ${this.energy}`);
  },
  main: function (jam) {
    this.energy -= jam;
    console.log(`Selamat bermain ${this.nama}`);
    console.group(`Energy Kamu Berkurang menjadi ${this.energy}`);
  },
};

function mahasiswa(energy, nama) {
  let mahasiswaO = Object.create(methodForMahasiswa); // membuat object dan membawa object lain diluar function
  mahasiswaO.nama = nama;
  mahasiswaO.energy = energy;

  return mahasiswaO;
}

let bambang = mahasiswa(11, "bambang");
bambang.makan(3);
console.log(bambang);
