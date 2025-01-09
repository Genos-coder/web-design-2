//Ternary operator

// let age = Number(prompt("Enter your age"));

// age > 18 ? alert("your can drive") : alert("You cannot drive");

//Short circuiting

console.log("Tom" && "Jake"); //If both are true it takes second

console.log("Tom" && ""); //If any one of them is false nothing will get returned

console.log("Tiger" || "lion"); //If both are true first is taken

console.log("" || "lion"); //If any one of them is false the on which is true is taken

//Nullish coalescing operator

console.log(null ?? "This default will showed up"); //If any null comes in the way in order to counter it with default value we can use ?? with default value at right side

// //Optional chaining

// const athleteArr = [
//   {
//     name: "Virat",
//     children: {
//       count: 2,
//     },
//   },
//   {
//     name: "Ronaldo",
//     children: {
//       count: 5,
//     },
//   },
//   {
//     name: "P.V Sindhu",
//   },
//   {
//     name: "Usain Bolt",
//     children: {
//       count: 3,
//     },
//   },
// ];
// let totalChildren = 0;
// for (let athlete of athleteArr) {
//   totalChildren += athlete.children?.count;
// }
// console.log(totalChildren);
