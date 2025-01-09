//Rest operator

function input(...args) {
  // here we are getting the arguments inside this function using ...args
  console.log(args);
}

// function input2(a,b){

// }

input(1, 2, 3, 4, 5); // here 1,2,3,4,5 goes into ...args and form array like  [1,2,3,4,5]

//Spread syntax
const athlete = {
  name: "virat",
  sport: "cricket",
};

const athleteCopy = { ...athlete }; //the athlete object is get's unpacked and it's copy get's assigned

console.log(athleteCopy === athlete); // will log false because one is copy

console.log(athleteCopy);

const foodArr = ["chicken", "burger"];

const foodArrCopy = [...foodArr]; // here array is getting unpacked and it's copy is getting assigned

console.log(foodArrCopy);

function test(props = "default value") {
  console.log(props);
}

// test(12);

function test2(props = {}) {
  // here we are assigning the default value to argument props as {}
  console.log(props);
}

test2(); // here if don't pass any value if will log {}
test2(12); // here we pass the value 12 so it will log 12
