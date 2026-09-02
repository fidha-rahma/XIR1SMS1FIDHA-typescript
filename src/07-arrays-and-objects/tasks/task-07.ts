/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];
// 1. Get only completed orders.
const completedOrders = orders.filter((order) => order.status === "completed");
console.log("1. Complete Orders:", completedOrders);

// 2. Calculate the total value of each order.
const orderTotals = orders.map((order) => {
    const total = order.items.reduce((sum, item) => {
        return sum + item.price * item.quantity;}, 0);
    return {
        id: order.id,
        customer: order.customer,
        total: total,
    };
});
console.log("2. Total Value Each Order:", orderTotals);

// 3. Find the customer who spent the most.
const highestSpender = orderTotals.reduce((highest, order) => {
    return order.total > highest.total ? order : highest;});
console.log("3. Customer Who Spent the Most:", highestSpender);

// 4. Calculate the total revenue from completed orders.
const totalRevenue = orderTotals.reduce((sum, order) => {
    return sum + order.total;}, 0);
console.log("4. Total Revenue:", totalRevenue);

// 5. Find all products that have been purchased.
const purchasedProducts = [...new Set(completedOrders.flatMap((order) =>order.items.map((item) => item.product)))];
console.log("5. Purchased Products:", purchasedProducts);
