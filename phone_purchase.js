const taxRate = .06;
const phonePrice = 250.00;
const accessoryPrice = 24.00;
const spendingThreshold = 350.00;//input("What is your phone and accessories budget?");
const bankBalance = 800;

const withTax = function(itemPrice, taxRate) {
    let taxAmount = itemPrice*taxRate;
    let afterTaxes = itemPrice + taxAmount;
    return afterTaxes.toFixed(2);
}

const totalPrice = function() {};

console.log(withTax(phonePrice, taxRate));
