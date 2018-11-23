const taxRate = .06;
const phone = 250.00;
const accessory = 24.00;
let spendingThreshold = 350.00;//input("What is your phone and accessories budget?");
let bankBalance = 800;

let phonesBought = 0;
let accessoriesBought = 0;

const withTax = function(itemPrice) {
    let taxAmount = itemPrice * taxRate;
    let afterTaxes = itemPrice + taxAmount;
    return afterTaxes.toFixed(2);
}

const purchaseItem = function(item) {
  bankBalance = bankBalance - withTax(item);
  spendingThreshold = spendingThreshold - withTax(item);
}

//bankbalance % = how much money is left after all purchases
//bankbalance/price to fixed 0 is how many you can buy

const makePurchases = function() {
  while (spendingThreshold > withTax(phone)) {
    purchaseItem(phone);
    phonesBought++;
  }
  while (spendingThreshold > withTax(accessory)) {
    purchaseItem(accessory);
    accessoriesBought++;
  }
}

//const totalPrice = function() {};

makePurchases();

console.log(bankBalance, spendingThreshold, phonesBought, accessoriesBought);
