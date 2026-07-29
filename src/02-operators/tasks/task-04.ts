/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */
const KeyboardPrice: number = 850000;
const KeyboardQuantity: number = 1;

const MousePrice: number = 275000;
const MouseQuantity: number = 2;

const PadPrice: number = 120000;
const PadQuantity: number = 1;

const isPremium: boolean = true;

// Calculate subtotal
const subtotal =
 (KeyboardPrice * KeyboardQuantity) +
 (MousePrice * MouseQuantity) +
 (PadPrice * PadQuantity);

//Count the total purchased items using an increment operator.
let totalItems = 0;
for (let i = 0; i < KeyboardQuantity; i++) {
  totalItems++;
}

for (let i = 0; i < MouseQuantity; i++) {
  totalItems++;
}

for (let i = 0; i < PadQuantity; i++) {
  totalItems++;
}

//Determine whether a discount should be applied.
const discount = subtotal > 1000000 ? subtotal * 0.1 : 0;

// Shipping free
const shippingFee = isPremium ? 0 : 20000;

//Final payment
const finalPayment = subtotal - discount + shippingFee;

console.log("Subtotal      : Rp" + subtotal);
console.log("Total Items   :", totalItems);
console.log("Discount      : Rp" + discount);
console.log("Free Shipping :", isPremium);
console.log("Shipping Fee  : Rp" + shippingFee);
console.log("Final Payment : Rp" + finalPayment);