// Write your solution in this file!

var customerName = "bob";
const leastFavoriteCustomer = "luvuno";

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}

function setBestCustomer(){ 
    bestCustomer = 'not bob';   // declaring a variable without a keyword makes it globally scoped
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';

}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "tabby";
}