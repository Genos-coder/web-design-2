console.log("Hello");

const arr1 = [1, 2, 3, 4];

arr1.push(2);

// console.log(arr1);

//Map function in array

const arr2 = [1, 2, 3, 4];
// Map function will iterate over each and every element in array ans perform operation on it and will make another array out of it
const arr3 = arr2.map((item) => {
  return item + 2;
});

// console.log(arr3);

//Filter
// the filter function will iterate over each and every element and will reason out element and filter them
const arr4 = [10, 12, 23, 11, 2, 3, 4];
const arr5 = arr4.filter((item) => item > 10);
console.log(arr5);
