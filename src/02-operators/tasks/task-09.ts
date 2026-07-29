/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */
// Product Information
const keyboardPrice = 850000;
const keyboardQuantity = 1;

const mousePrice = 275000;
const mouseQuantity = 2;

const monitorStandPrice = 420000;
const monitorStandQuantity = 1;

// Customer Information
const voucherValue = 100000;
const isPremiumMember = true;
const rewardPointRate = 50000;

// Calculate product subtotal
const productSubtotal =
  (keyboardPrice * keyboardQuantity) +
  (mousePrice * mouseQuantity) +
  (monitorStandPrice * monitorStandQuantity);

// Calculate membership discount
const membershipDiscount = isPremiumMember
  ? productSubtotal * 0.10
  : 0;

// Calculate voucher deduction
const voucherDeduction = voucherValue;

// Calculate payment before tax
const paymentBeforeTax =
  productSubtotal - membershipDiscount - voucherDeduction;

// Calculate VAT
const vat = paymentBeforeTax * 0.11;

// Calculate final payment
const finalPayment = paymentBeforeTax + vat;

// Calculate reward points
const rewardPoints = Math.floor(paymentBeforeTax / rewardPointRate);

// Determine free shipping eligibility
const freeShipping =
  isPremiumMember || paymentBeforeTax > 1500000;

// Display result
console.log("Product Subtotal: Rp" + productSubtotal);
console.log("Membership Discount: Rp" + membershipDiscount);
console.log("Voucher Deduction: Rp" + voucherDeduction);
console.log("Payment Before Tax: Rp" + paymentBeforeTax);
console.log("VAT: Rp" + vat);
console.log("Final Payment: Rp" + finalPayment);
console.log("Reward Points:", rewardPoints);
console.log("Free Shipping:", freeShipping);