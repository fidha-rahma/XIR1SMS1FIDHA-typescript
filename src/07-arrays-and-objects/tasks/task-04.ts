/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

const cart = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];
// 1. count subtotal of all products
const subtotal = cart.reduce((total, item) => {return total + item.price * item.quantity}, 0);
console.log("1. Subtotal:", subtotal);

//2. calculate discount
let discount = 0;
if (subtotal >= 3000000) {
    discount = subtotal * 0.10;
}else if (subtotal >= 2000000) {
    discount = subtotal * 0.05;
} else {
    discount = 0;
}
console.log("2. Discount:", discount);

//3. calculate final subtotl after discount
const finalSubtotal = subtotal - discount;
console.log("3. Final Subtotal:", finalSubtotal);

//4. find expensive product (>1.000.000)
const expensiveProducts = cart.filter((item) => item.price > 1000000);
console.log("4. Expensive Products:", expensiveProducts);