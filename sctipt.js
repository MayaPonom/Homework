'use strict';

 // Homework 21.01 //
// Задание 2//
const forEachArr = ['Anna', 12, 'Sam', 9, 'Kate', 10, 'Ron', 9];
forEachArr.forEach(forEach => {
  if (typeof forEach === "string") {
    console.log(forEach + " - string value");
  } else {
    console.log(forEach + " - number value");
  }
});

// Задание 3//
const mapArr = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];
const mapArr_1 = mapArr.map(elem => {
    return elem + 10;
});
console.log(mapArr_1);
console.log(mapArr);

const arr = new Array('hi, 2, 3, true');
console.log(arr.length);
