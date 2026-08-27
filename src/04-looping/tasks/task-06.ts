/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];
let OutOFStock = 0;
let LowStock = 0;
let SafeStock = 0;
let totalInvestory = 0;

for (const stock of stocks) {
    totalInvestory += stock;

    if (stock === 0) {
        OutOFStock++;
    } else if (stock < 10) {
        LowStock++;
    } else {
        SafeStock++;
    }
}
const averageStock = totalInvestory / stocks.length;

console.log("Out of Stock Products :", OutOFStock);
console.log("Low Stock Products    :", LowStock);
console.log("Safe Stock Products   :", SafeStock);
console.log("Total Inventory       :", totalInvestory);
console.log("Average Stock         :", averageStock.toFixed(2));