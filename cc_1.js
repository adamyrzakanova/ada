let employeeName = "name_of_employee";
const employeeId = "id_of_employee";
var isActive = true;

console.log(typeof employeeName);
console.log(typeof employeeId);
console.log(typeof isActive); 

// task 2 
let productName = "name_of_product";
const productPrice = "100"; 
var isAvailable = true;

console.log(typeof productName);
console.log(typeof productPrice);   
console.log(typeof isAvailable);

// task 3
let accountBalance = "100";
accountBalance += 100;
console.log(accountBalance);
accountBalance -= 50
console.log(accountBalance)
accountBalance *= 4
console.log(accountBalance)
accountBalance /= 6
console.log(accountBalance)
accountBalance %= 10
console.log(accountBalance)

// task 4
let customareName = "name_of_customer";
let welcomeMessage = "Welcome to our store, + customareName + !"; 
console.log(welcomeMessage + customareName);

// task 5
let isLoggedIn = true;
let hasAccess = isLoggedIn && isAvailable;

console.log("User login status: " + isLoggedIn);
console.log("Access to the store: " + hasAccess);
