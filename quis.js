/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika nilai score lebih atau sama dengan 90
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika nilai score ada di antara 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika nilai score ada di antara 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika nilai score ada di antara 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika nilai score di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 **/

function scoreChecker(score) {
  let result;

  if (score >= 90) {
    result = "Selamat! Anda mendapatkan nilai A.";
  } else if (score <= 89 && score >= 80) {
    result = "Anda mendapatkan nilai B.";
  } else if (score <= 79 && score >= 70) {
    result = "Anda mendapatkan nilai C.";
  } else if (score >= 60 && score <= 69) {
    result = "Anda mendapatkan nilai D.";
  } else if (score < 60) {
    result = "Anda mendapatkan nilai E.";
  }

  // Jangan hapus kode ini
  return result;
}

console.log(scoreChecker(60));
const name = "Dicoding";
const language = "JavaScript";

console.log(`Hello $name. Welcome to $language!`);
