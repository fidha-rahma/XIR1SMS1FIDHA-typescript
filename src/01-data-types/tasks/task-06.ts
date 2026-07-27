/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */
type productInformation = {
    ProductCode: string;
    ProductName: string;
    SellingPrice: number;
    StockQuantity: number;
    ProductWeight: string;
    AverageCustomerRating: number;
    CurrentlyDiscount: boolean;
}
const Product1: productInformation = {
    ProductCode: "B187625PC198",
    ProductName: "PC TYP09176",
    SellingPrice: 20000000,
    StockQuantity: 38,
    ProductWeight: "5kg",
    AverageCustomerRating: 5.5,
    CurrentlyDiscount: true,
};
const Product2: productInformation = {
    ProductCode: "B188187IP98",
    ProductName: "IPHONE 14 PRO Max",
    SellingPrice: 15000000,
    StockQuantity: 20,
    ProductWeight: "1kg",
    AverageCustomerRating: 5.5,
    CurrentlyDiscount: true,
};
const Product3: productInformation = {
    ProductCode: "B143276IPD98",
    ProductName: "IPAD TYPE 2.3",
    SellingPrice: 10000000,
    StockQuantity: 50,
    ProductWeight: "2kg",
    AverageCustomerRating: 5.5,
    CurrentlyDiscount: false,
};
console.log("=== Product Information ===");
console.log("Product 1:", Product1);
console.log("Product 2:", Product2);
console.log("Product 3:", Product3);
