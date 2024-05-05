const customerID=12345;
let customerName="Arjun"
var customerPassword="arjun12"

let accountState;

customerCity="Hyd"

// customerID=2; we cannot change value of const variable
console.log(customerID)

console.table([customerID,customerName ,customerPassword,customerCity,accountState]) 
// here we are using console.table for printing multiple value in console
// we should not use var we face scope problem
