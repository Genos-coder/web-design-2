//Rest

function input(...args) {
  console.log(args);
}

// function input2(a,b){

// }

input(1, 2, 3, 4, 5);

//Spread
const athlete = {
  name: "virat",
  sport: "cricket",
};

const athleteCopy = { ...athlete };

console.log(athleteCopy === athlete);

console.log(athleteCopy);

const foodArr = ["chicken", "burger"];

const foodArrCopy = [...foodArr];

console.log(foodArrCopy);

function test(props = "default value") {
  console.log(props);
}

// test(12);

function test2(props = {}) {
  console.log(props);
}

test2();
