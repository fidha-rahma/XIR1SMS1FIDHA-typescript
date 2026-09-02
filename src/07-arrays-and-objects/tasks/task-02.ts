/**
 * An online store has the following products below.
 * Tasks:
 * 1. Display only products that are currently available.
 * 2. Display only products that are currently available.
 * 3. Generate an array containing only the product names.
 * 4. Calculate the total value of all products currently in stock.
 * 5. Sort available products from most expensive → cheapest.
 */

const products = [
    {
        id: 1,
        name: "Keyboard",
        category: "Computer",
        price: 350000,
        stock: 10,
    },
    {
        id: 2,
        name: "Mouse",
        category: "Computer",
        price: 150000,
        stock: 0,
    },
    {
        id: 3,
        name: "Monitor",
        category: "Computer",
        price: 2500000,
        stock: 5,
    },
    {
        id: 4,
        name: "Headset",
        category: "Audio",
        price: 450000,
        stock: 8,
    },
    {
        id: 5,
        name: "Microphone",
        category: "Audio",
        price: 850000,
        stock: 3,
    },
];
//1. Produk yang tersedia
const availableProducts = products.filter(product => product.stock > 0);

// 2. Produk yang tersedia
const inStockProducts = products.filter(product => product.stock > 0);

// 3. Mengambil nama semua produk
const productNames = products.map(product => product.name);

// 4. Menghitung total nilai semua produk yang tersedia
const totalValue = products.reduce(
    (total, product) => total + (product.price * product.stock),
    0
);

// 5. Mengurutkan produk tersedia dari termahal → termurah
const sortedProducts = [...availableProducts].sort(
    (a, b) => b.price - a.price
);

console.log("1. Available Products:", availableProducts);
console.log("2. In Stock Products:", inStockProducts);
console.log("3. Product Names:", productNames);
console.log("4. Total Value:", totalValue);
console.log("5. Sorted Products:", sortedProducts);