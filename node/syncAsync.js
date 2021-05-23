const orderCofee = (callback) => {
  let cofee = null;
  console.log("Kopi sedang dibuat silahkan tunggu");
  setTimeout(() => {
    cofee = "Cofee SUdah jadi";
    callback(cofee);
  }, 2000);
};

orderCofee((kopi) => {
  console.log(kopi);
});
