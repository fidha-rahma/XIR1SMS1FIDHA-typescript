/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */
// Customer Information
const playingHours = 7;
const playingMinutes = 35;
const pricePerHour = 8000;

// Calculate total playing time in minutes
const totalPlayingTime = (playingHours * 60) + playingMinutes;

// Calculate remaining minutes after full hours
const remainingMinutes = totalPlayingTime % 60;

// Calculate total billed hours
const billedHours = Math.ceil(totalPlayingTime / 60);

// Calculate total payment before discount
const totalPaymentBeforeDiscount = billedHours * pricePerHour;

// Calculate discount
const discount = billedHours > 5
  ? totalPaymentBeforeDiscount * 0.15
  : 0;

// Calculate final payment
const finalPayment = totalPaymentBeforeDiscount - discount;

// Display result
console.log("Total Playing Time:", totalPlayingTime, "minutes");
console.log("Remaining Minutes:", remainingMinutes, "minutes");
console.log("Total Billed Hours:", billedHours, "hours");
console.log("Total Payment Before Discount: Rp" + totalPaymentBeforeDiscount);
console.log("Discount Amount: Rp" + discount);
console.log("Final Payment: Rp" + finalPayment);