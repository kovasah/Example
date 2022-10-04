// let myAlphabet = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
//   "$",
//   "*",
//   "/",
//   "-",
//   "+",
// ];

// function myAlphabetLength() {
//   console.log(myAlphabet.length)
// }

// myAlphabetLength();

// let planets = [
//   "Terre", "Mars", "Venus", "Mercure", "Jupiter"
// ]

// planets.forEach((planet) => {
//   console.log(planet);
// });

// planets.forEach((planet) => {
//   console.log(planets.indexOf(planet));
// });

// let someDataTypes = [1, "coucou", true, undefined];

// someDataTypes.forEach((Element) => {
//   console.log(typeof Element)
// });

// someDataTypes.forEach((dataType) => {
//   console.log(someDataTypes.indexOf(dataType));
// });

// let emptyArray = [];

// console.log(emptyArray);

// let copyArray = emptyArray.slice();

// copyArray = [1, 2, 3, 4];

// console.log(copyArray);

// let furnitures = ['Table', 'Chairs', 'Couch'];

// furnitures.forEach(element => {
//   console.log(element.split(''))
// });


let values1 = ["Apple", 1, false, "2"];
let values2 = [`5`, "Fries", 2, true];
let values3 = ["Mars", "Strawberry", 9];

// values1.splice(2, 2);
// values1.shift();
// values2.splice(0, 2);
// values2.pop();
// values3.splice(0, 2);



function isNumber(array) {
  array.forEach((arrayElement) => {
    if (typeof arrayElement === "number") {
      console.log(arrayElement);
    }
  });
}

console.log(values1);
console.log(values2);
console.log(values3);



let studentCoursesA = ['Math', 'English', 'Programming'];
let studentCoursesB = ['Geography', 'Spanish', 'Programming'];

