/* TODO: 1
 * - Ubahlah fungsi fetchingUserFromInternet dengan memanfaatkan Promise. Anda bisa menghapus implementasi callback.
 *
 * TODO: 2
 * - Ubahlah cara mengonsumsi fungsi fetchingUserFromInternet dari callback ke Promise.
 * - Tips:
 *   - Agar penulisan kode lebih bersih dan mudah dibaca, coba manfaatkan async/await
 *
 *
 * Notes:
 * - Jangan ubah struktur atau nilai dari objek user yang dibawa oleh callback sebelumnya.
 * - Tetap gunakan NetworkError untuk membawa nilai error pada Promise
 */

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

// TODO: 1
const fetchingUserFromInternet = (isOffline) => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (isOffline) {
        rejected(new NetworkError("Gagal mendapatkan data dari internet"));
      } else {
        resolve({ name: "John", age: 18 });
      }
    }, 500);
  });
};

// TODO: 2
const gettingUserName = async () => {
  try {
    return (await fetchingUserFromInternet(false)).name;
  } catch (error) {
    console.log(error.message);
  }
};
