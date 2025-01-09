// console.log("hello form main file");
import { sum } from "./sum.js";
import { divide as terminator, multiply } from "./utils.js";
import converter from "./formatter.js";
console.log(sum(3, 4));
console.log(terminator(4, 2));
console.log(converter(12344));
