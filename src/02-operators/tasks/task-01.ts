/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice 
 *  - Total price of drinks 
 *  - Total price before discount 
 *  - Final amount to be paid 
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */
/**
 * a = price of fried rice
 * b = price of drinks
 */
const purchasedFriedRice: number = 3;
const priceOfFriedRice: number = 18000;
const purchasedDrink: number = 2;
const priceDrink: number = 5000;
const discount: number = 10000;

console.log("total price of fried rice =", purchasedFriedRice * priceOfFriedRice );
const totalPriceOfFriedRice: number = 54000

console.log("total price of drinks =", purchasedDrink * priceDrink );
const totalPriceOfDrink: number = 10000

console.log("grand total =", totalPriceOfFriedRice + totalPriceOfDrink);
const total: number =  64000;

console.log("Final Payment =", total - discount);
