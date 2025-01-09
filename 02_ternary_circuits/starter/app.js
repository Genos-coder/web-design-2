const age = Number(prompt("Enter your age"));

// if (age > 18) {
//   console.log("You can drive");
// } else {
//   console.log("You cannot drive");
// }
// console.log(age);
const result = age > 18 ? "You can drive" : "You cannot drive";

console.log(result);

//Short circuiting

const result2 = "jim" || "jake"; // if both values we provide are true then it chooses left side
const result3 = false || "jake"; // if any value is false then it chooses value which is truthy
const result4 = "jim" && "jake"; // if both values are true then it chooses right side
const result5 = false && "jake"; // if any value is false then it does not choose any even though one of them is truthy
console.log(result5);
