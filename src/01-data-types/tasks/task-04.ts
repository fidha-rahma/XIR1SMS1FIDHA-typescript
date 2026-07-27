/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

import { availableMemory } from "node:process";

type BookInformation = {
    ISBNnumber: string;
    Title: string;
    AuthorsName: string;
    pages: number;
    bookCategory:string
    Available: boolean;
}
const Book1: BookInformation = {
    ISBNnumber: "EDN982BM98712Y",
    Title: "Bumi Manusia",
    AuthorsName: "Pramoedya Ananta Toer",
    pages: 354,
    bookCategory: "Fiction History",
    Available: true,
} ;  
const Book2: BookInformation = {
    ISBNnumber: "FKS982D09123Y",
    Title: "Dilan 1990",
    AuthorsName: "Pidi Baiq",
    pages: 332,
    bookCategory: "Fiction",
    Available: true,
} ;  
const Book3: BookInformation = {
    ISBNnumber: "EDN95414TPOH12Y",
    Title: "The Power of Habit",
    AuthorsName: "Charles Duhigg",
    pages: 392,
    bookCategory: "Non Fiction",
    Available: true,
} ;  
console.log("=== Student Information System ===");
console.log("BOOK 1:", Book1);
console.log("BOOK 2:", Book2);
console.log("BOOK 3:", Book3);
