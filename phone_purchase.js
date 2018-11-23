const taxRate = .06;
const phone = 250.00;
const accessory = 24.00;
let spendingThreshold = 350.00;//input("What is your phone and accessories budget?");
let bankBalance = 800;

const withTax = function(itemPrice) {
    let taxAmount = itemPrice * taxRate;
    let afterTaxes = itemPrice + taxAmount;
    return afterTaxes.toFixed(2);
}

const purchaseItem = function(item) {
  bankBalance = bankBalance - withTax(item);
  spendingThreshold = spendingThreshold - withTax(item);
}

const purchaseQuantity = function() {
  while (bankBalance > 0) {

  }
}

const totalPrice = function() {};

console.log(withTax(phone));

purchaseItem(phone);
purchaseItem(accessory);

console.log(bankBalance);
console.log(spendingThreshold);
