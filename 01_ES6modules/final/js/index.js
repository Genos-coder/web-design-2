import { sum } from "./sum.js"; //this is a named export can be exported using curly braces
import { divide as terminator, multiply } from "./utils.js"; //while exporting you can change the names of function like divide as terminator which convert name divide into terminator
import converter from "./formatter.js"; //This is a default export can be exported without curly braces
console.log(sum(3, 4));
console.log(terminator(4, 2));
console.log(converter(12344));
