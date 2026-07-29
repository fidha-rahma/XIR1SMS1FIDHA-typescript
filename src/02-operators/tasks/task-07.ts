/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */
// Guest Information
const roomPricePerNight = 650000;
const nightsStayed = 4;
const serviceCharge = 120000;
const taxRate = 0.11;
const isVipMember = true;

// Calculate room subtotal
const roomSubtotal = roomPricePerNight * nightsStayed;

// Calculate discount
const discount = isVipMember ? roomSubtotal * 0.12 : 0;

// Calculate tax
const tax = (roomSubtotal - discount) * taxRate;

// Calculate final payment
const finalPayment =
  (roomSubtotal - discount) + tax + serviceCharge;

// Determine free breakfast eligibility
const freeBreakfast =
  nightsStayed >= 3 || isVipMember;

// Display result
console.log("Room Subtotal: Rp" + roomSubtotal);
console.log("Discount: Rp" + discount);
console.log("Tax: Rp" + tax);
console.log("Service Charge: Rp" + serviceCharge);
console.log("Final Payment: Rp" + finalPayment);
console.log("Free Breakfast:", freeBreakfast);