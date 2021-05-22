const priceInJPY = 5000;
const currency = new Map();

currency.set("USD", 14000);
currency.set("JPY", 131);
currency.set("SGD", 11000);
currency.set("MYR", 3500);

var priceInIDR = priceInJPY * currency.get("JPY");
console.log(priceInIDR);

const capital = {
  Jakarta: "Indonesia",
  London: "England",
  Tokyo: "Japan",
};
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);
