//Problem 0 : Part B

var myCar = {
  make: 'Bugatti',
  model: 'Bugatti La Voiture Noire',
  year: 2019,
  accidents: [
    {
      date: '3/15/2019',
      damage_points: '5000',
      atFaultForAccident: true,
    },
    {
      date: '7/4/2022',
      damage_points: '2200',
      atFaultForAccident: true,
    },
    {
      date: '6/22/2021',
      damage_points: '7900',
      atFaultForAccident: true,
    },
  ],
};

//Loop over the accidents array.
//Change atFaultForAccident from true to false.

for (let i in myCar.accidents) {
  myCar.accidents[i].atFaultForAccident = false;
}
console.log(myCar.accidents);

//Print the dates of my accidents
for (let i in myCar.accidents) {
  console.log(myCar.accidents[i].date);
}

//Problem 1
//Write a function called “printAllValues”
//which returns an newArray of all the input object’s values.

let object = { name: 'RajiniKanth', age: 33, hasPets: false };

function printAllValues(obj) {
  let array = [];
  for (let key in obj) {
    array.push(obj[key]);
  }
  return array;
}
console.log(printAllValues(object));

//Problem 2
//Write a function called “printAllKeys”
//which returns an newArray of all the input object’s keys.

let object2 = { name: 'RajiniKanth', age: 33, hasPets: false };

function printAllKeys(obj) {
  let keys = Object.keys(obj);
  return keys;
}
console.log(printAllKeys(object2));

//Problem 3
//Write a function called “convertObjectToList”
//which converts an object literal into an array of arrays.

let object3 = { name: 'ISRO', age: 35, role: 'Scientist' };

function convertListToObject(obj) {
  let array = [];
  for (let key in obj) {
    let child = [key, obj[key]];
    array.push(child);
  }
  return array;
}
console.log(convertListToObject(object3));

//Problem 4

//Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
//1) the first element of the array as the object’s key, and
//2) the last element of the array as that key’s value.

let guvi_array = ['GUVI', 'I', 'am', 'Geek'];
function transformFirstAndLast(arr) {
  let newObject = {};

  newObject[arr[0]] = arr[arr.length - 1];
  return newObject;
}
console.log(transformFirstAndLast(guvi_array));

//Problem 5
//Write a function “fromListToObject” which takes in an array of arrays,
//and returns an object with each pair of elements in the array as a key-value pair.

let carArray = [
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', 1964],
];

function fromListToObject(arr) {
  let newObject = {};
  for (let i in arr) {
    newObject[arr[i][0]] = arr[i][1];
  }
  return newObject;
}
console.log(fromListToObject(carArray));

//Problem 6
//Write a function called “transformGeekData”
//that transforms some set of data from one format to another.

let namesArray = [
  [
    ['firstName', 'Vasanth'],
    ['lastName', 'Raja'],
    ['age', 24],
    ['role', 'JSWizard'],
  ],
  [
    ['firstName', 'Sri'],
    ['lastName', 'Devi'],
    ['age', 28],
    ['role', 'Coder'],
  ],
];

function transformEmployeeData(arr) {
  let transformEmployeeList = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    let obj = {};
    for (let j = 0; j < arr[i].length; j++) {
      obj[arr[i][j][0]] = arr[i][j][1];
    }
    transformEmployeeList.push(obj);
  }

  return transformEmployeeList;
}
console.log(transformEmployeeData(namesArray));

//Problem 7
// Write an “assertObjectsEqual” function from scratch.
// Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
function assertObjectsEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    return 'passed';
  } else {
    return 'FAILED [' + testName + '] Expected "' + JSON.stringify(expected) + '", but got "' + JSON.stringify(actual) + '"';
  }
}

let expected = { foo: 5, bar: 6 };
let actual = { foo: 5, bar: 6 };
console.log(assertObjectsEqual(actual, expected, 'detects that two objects are equal'));
let expected1 = { foo: 6, bar: 5 };
let actual1 = { foo: 5, bar: 6 };
console.log(assertObjectsEqual(actual1, expected1, 'detects that two objects are equal'));

//Problem 8
//I have a mock data of security Questions and Answers.
//You function should take the object and a pair of strings and should
//return if the quest is present and if its valid answer

let securityQuestions = [
  {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter',
  },
  {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985',
  },
  {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC',
  },
];

function chksecurityQuestions(sq, question, ans) {
  let res = false;
  for (let i = 0; i < sq.length; i++) {
    if (sq[i].question === question) {
      if (sq[i].expectedAnswer === ans) {
        res = true;
        break;
      }
    }
  }
  return res;
}

//Test case1:
var ques = 'What was your first pet’s name?';
var ans = 'FlufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true

//Test case2:
var ques = 'What was your first pet’s name?';
var ans = 'DufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // false

//Problem 9
//Write a function to return the list of characters below 20 age

let students = [
  { name: 'Siddharth Abhimanyu', age: 21 },
  { name: 'Malar', age: 25 },
  { name: 'Maari', age: 18 },
  { name: 'Bhallala Deva', age: 17 },
  { name: 'Baahubali', age: 16 },
  { name: 'AAK chandran', age: 23 },
  { name: 'Gabbar Singh', age: 33 },
  { name: 'Mogambo', age: 53 },
  { name: 'Munnabhai', age: 40 },
  { name: 'Sher Khan', age: 20 },
  { name: 'Chulbul Pandey', age: 19 },
  { name: 'Anthony', age: 28 },
  { name: 'Devdas', age: 56 },
];

function returnMinors(arr) {
  return arr.filter(function (obj) {
    return obj.age < 20;
  });
}
console.log(returnMinors(students));
