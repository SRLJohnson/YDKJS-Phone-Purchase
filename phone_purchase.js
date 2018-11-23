const taxRate = .06;
const phone = 250.00;
const accessory = 24.00;
let spendingThreshold = 350.00;//input("What is your phone and accessories budget?");
let bankBalance = 800;

let phonesBought = 0;
let accessoriesBought = 0;
let totalSpent = 0;


const withTax = function(itemPrice) {
    let taxAmount = itemPrice * taxRate;
    let afterTaxes = itemPrice + taxAmount;
    return afterTaxes.toFixed(2);
}

const purchaseItem = function(item) {
  bankBalance = bankBalance - withTax(item);
  spendingThreshold = spendingThreshold - withTax(item);
}

const makePurchases = function() {
  while (spendingThreshold > withTax(phone)) {
    purchaseItem(phone);
    phonesBought++;
  }
  while (spendingThreshold > withTax(accessory)) {
    purchaseItem(accessory);
    accessoriesBought++;
  }
  totalSpent = (phonesBought * withTax(phone)) + (accessoriesBought * withTax(accessory));
  totalSpent = '$' + totalSpent.toFixed(2);
  bankBalance = '$' + bankBalance.toFixed(2);
  spendingThreshold = '$' + spendingThreshold.toFixed(2)
}

makePurchases();

console.log(`Spending ${totalSpent}, you bought ${phonesBought} phone(s) and ${accessoriesBought} accessory(ies).
You are under your spending budget by ${spendingThreshold} and you have ${bankBalance} left in your bank account.`)
