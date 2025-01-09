//Rest parameter

function sumOfNums(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(sumOfNums(1, 2, 3));

function takeInput(props = { ...rest }) {
  for (let item in props) {
    console.log(props[item]);
  }
}

takeInput({ name: "tim", age: 12 });

//Spread syntax with destructuring
const avenger = {
  name: "Iron man",
  superpower: "rich",
};

const copyAvenger = { ...avenger };

const peoples = ["firstP", "secondP", "thirdP", "fourthP", "fifthP"];
const peoplesCopy = [...peoples];

const { name: ourHero } = { ...avenger };
