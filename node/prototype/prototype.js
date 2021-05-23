// Object Literal
let mahasiswa1 = {
  nama: "Sandhika",
  energy: 10,
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Kamu Memakan sebanyak ${porsi} porsi`);
    console.log(`energi kamu bertambah menjadi ${this.energy}`);
  },
};

let mahasiswa2 = {
  nama: "Odin",
  energy: 20,
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Kamu Memakan sebanyak ${porsi} porsi`);
    console.log(`energi kamu bertambah menjadi ${this.energy}`);
  },
};

// function decalaration
function mahasiswa(energy, nama) {
  let mahasiswaO = {};
  mahasiswaO.nama = nama;
  mahasiswaO.energy = energy;
  mahasiswaO.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Selamat makan ${this.nama}`);
    console.log(`Energy Kamu bertambah menjadi ${this.energy}`);
  };
  mahasiswaO.main = function (jam) {
    this.energy -= jam;
    console.log(`Selamat bermain ${this.nama}`);
    console.group(`Energy Kamu Berkurang menjadi ${this.energy}`);
  };

  return mahasiswaO;
}

let sandhika = mahasiswa(10, "sandhika");
sandhika.makan(3);
console.log(sandhika);

let odin = mahasiswa(20, "Odin");
odin.makan(2);
console.log(odin);

sandhika.main(10);
console.log(sandhika);

// Construct Function
function mahasiswaCons(energy, nama) {
  this.nama = nama;
  this.energy = energy;
  this.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Selamat makan ${this.nama}`);
    console.log(`Energy Kamu bertambah menjadi ${this.energy}`);
  };
  this.main = function (jam) {
    if (this.energy < jam) {
      console.log("kamu bisa pingsan jangan main!");
    } else {
      this.energy -= jam;
      console.log(`Selamat bermain ${this.nama}`);
      console.group(`Energy Kamu Berkurang menjadi ${this.energy}`);
    }
  };
}

let bambang = new mahasiswaCons(10, "bambang");
console.log(bambang);
bambang.main(20);
console.log(bambang);
