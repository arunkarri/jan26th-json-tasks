function addFive(num) {
  return num + 5;
}
var result1 = addFive(5);
var result2 = addFive(0);
var result3 = addFive(-5);
console.log(result1, result2, result3);

function getOpposite(num) {
  if (num % 1 === 0 && num !== 0) {
    return -num;
  }
  if (num === 0) {
    return 0;
  } else {
    return -1;
  }
}

var result4 = getOpposite(5);
var result5 = getOpposite(0);
var result6 = getOpposite(-5);
var result7 = getOpposite('5a');
var result8 = getOpposite(5.5);

console.log(result4, result5, result6, result7, result8);

function toSeconds(min) {
  return min * 60;
}
var secs = toSeconds(5);
console.log(secs);

function toInteger(mystr) {
  return parseInt(mystr);
}
var myint = toInteger('100');
console.log(myint);

function nextNumber(num) {
  return num + 1;
}
var myNextint = nextNumber(10);
console.log(myNextint);

function getFirstElement(arr) {
  return arr[0];
}
var array = [1, 2, 3];
var data = getFirstElement(array);
console.log(data);

function hourToSeconds(hr) {
  return hr * 60 * 60;
}
var htoSec = hourToSeconds(2);
console.log(htoSec);

function findPerimeter(num1, num2) {
  return 2 * (num1 + num2);
}
var peri = findPerimeter(6, 7);
console.log(peri);

function lessThan100(num1, num2) {
  let sum = num1 + num2;
  return sum > 100 ? false : true;
}
var res = lessThan100(22, 15);
console.log(res);

function remainder(num1, num2) {
  return num1 % num2;
}
var rem = remainder(-9, 45);
console.log(rem);

let turkey = 2;
let horse = 4;
let pigs = 4;

function CountAnimals(tur, hr, pg) {
  return turkey * tur + horse * hr + pigs * pg;
}
var legs = CountAnimals(2, 3, 5);
console.log(legs);

function frames(num1, num2) {
  return num1 * num2 * 60;
}
var fps = frames(10, 25);
console.log(fps);

function divisibleByFive(num) {
  return num % 5 === 0 ? true : false;
}

var divisible = divisibleByFive(37);
console.log(divisible);

function isEven(num) {
  return num % 2 === 0 ? true : false;
}
var even = isEven(5);
console.log(even);

function areBothOdd(num1, num2) {
  return num1 % 2 !== 0 && num2 % 2 !== 0 ? true : false;
}

let odd = areBothOdd(0, 0);
console.log(odd);

function getFullName(firstName, lastName) {
  firstName = firstName || '';
  lastName = lastName || '';
  return `${firstName} ${lastName}`.trim();
}

console.log(getFullName('GUVI', 'GEEK'), getFullName('GUVI'), getFullName('', 'GEEK'), getFullName('', ''));

function getLengthOfWord(word1) {
  return word1 === undefined || word1.length === undefined ? -1 : word1.length;
}

console.log(getLengthOfWord('guvi'), getLengthOfWord(''), getLengthOfWord(), getLengthOfWord(9));

function isSameLength(word1, word2) {
  return word1.length === word2.length;
}
console.log(isSameLength('GUVI', 'GEEK'));

function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

console.log(getDistance(100, 100, 400, 300));

function getNthElement(array, n) {
  return array.length === 0 ? undefiend : array[n];
}

console.log(getNthElement([1, 3, 5], 1));

function getLastElement(array) {
  return array.length === 0 ? -1 : array[array.length - 1];
}

console.log(getLastElement([1, 3, 5]));

var obj = {
  mykey: 'value',
};
function getProperty(obj, key) {
  return obj[key];
}
console.log(getProperty(obj, 'mykey'));

function addProperty(obj, key) {
  obj[key] = true;
  return obj;
}

console.log(addProperty(obj, 'newKey'));

function removeProperty(obj, key) {
  delete obj[key];
  return obj;
}

console.log(removeProperty(obj, 'mykey'));

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

var ar2 = function (arr) {
  let sumP = arr.reduce((acc, curr) => {
    if (curr >= 0) {
      return acc + curr;
    }
    return acc;
  }, 0);
  let sumN = arr.reduce((acc, curr) => {
    if (curr < 0) {
      return acc + curr;
    }
    return acc;
  }, 0);
  return [sumP, sumN];
};
console.log(ar2(arr));

function getPositives(ar) {
  return ar.filter((ele) => ele >= 0);
}
var ar2 = getPositives(arr);
console.log(ar2);

function powersOfTwo(n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    res.push(Math.pow(2, i));
  }
  return res;
}

console.log(powersOfTwo(0), powersOfTwo(1), powersOfTwo(2));

function findMax(ar) {
  let max = ar.sort((a, b) => b - a)[0];
  return max;
}

console.log('Max: ', findMax(arr));

// Function prints the first nPrimes numbers
function printPrimes(nPrimes) {
  var n = 0;
  var i = 2;

  while (n < nPrimes) {
    if (isPrime(i)) {
      console.log(n, ' → ', i);
      n++;
    }

    i++;
  }
}
// Returns true if a number is prime
function isPrime(n) {
  if (n === 2) {
    return true;
  } else {
    let count = 0;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        count++;
      }
    }
    return count === 0 ? true : false;
  }
}

printPrimes(100);

function getPrimes(nPrimes, startAt) {
  let res = [];
  let i = startAt;
  while (res.length !== nPrimes) {
    if (isPrime(i)) {
      res.push(i);
    }
    i++;
  }
  return res;
}
console.log(getPrimes(10, 100));

function reverseString(s) {
  return s.split('').reverse().join('');
}

console.log(reverseString('JavaScript'));

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

function mergeArrays(ar1, ar2) {
  var result = ar1.concat(ar2);

  return result;
}
console.log(mergeArrays(ar1, ar2));



function sumCSV(s)
{
  let arr = s.split(',');
  return arr.reduce((acc,curr) => acc+ parseFloat(curr), 0);
}
console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));