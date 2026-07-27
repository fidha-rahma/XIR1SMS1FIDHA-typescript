/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */
/**1. Identify every value that should become a variable.
 *    Value :
 *    1. Mechanical Keyboard RGB
 *    2. KBR-001
 *    3. 850000
 *    4. 25%
 *    5. 2
 *    6. True
 *    7. True
 *    8. 18
 */
/**2. Choose an appropriate variable name for each value.
 *    Variable :
 *    1. ProductName
 *    2. ProductCode
 *    3. ProductPrice
 *    4. Discount
 *    5. Quantity
 *    6. PremiumMember
 *    7. FreeShipping
 *    8. AvailableStock
 */
/**3. Determine the correct data type.
 *    Data Type :
 *    1. string
 *    2. string
 *    3. number
 *    4. number
 *    5. number
 *    6. boolean
 *    7. boolean
 *    8. number
 */
/**4. Declare all variables in TypeScript. */
const ProductName: string = "Mechanical Keyboard RGB";
const ProductCode: string = "KBR-001";
const ProductPrice: number = 850000;
const Discount: number = 25;
const Quantity: number = 2;
const PremiumMember: boolean = true;
const FreeShipping: boolean = true;
const AvailableStock: number = 18;

/**5. Display the product data using console.log. */
console.log("Produk Name:", ProductName);
console.log("Product Code:", ProductCode);
console.log("Product Price:", ProductPrice);
console.log("Product Discount:", Discount);
console.log("Product Quantity:", Quantity);
console.log("Premium Member:", PremiumMember);
console.log("Free Shipping:", FreeShipping);
console.log("Available Stock:", AvailableStock);
