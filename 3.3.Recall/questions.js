let selectElementsStartingWithA = (array) => {
  return array.filter((fruit) => fruit.startsWith("a"));
};

let selectElementsStartingWithVowel = (array) => {
  return array.filter((str) => /^[aeiou]/i.test(str));
};

let removeNullElements = (array) => {
  return array.filter((el) => el != null);
};

let removeNullAndFalseElements = (array) => {
  return array.filter((n) => n !== null && n !== false);
};

let reverseWordsInArray = (array) => {
  return array.map((str) => str.split("").reverse().join(""));
};

let everyPossiblePair = (array) => {
  array.sort();
  const pair = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      pair.push([array[j], array[i]]);
    }
  }
  return pair;
};

let allElementsExceptFirstThree = (array) => {
  return array.slice(3);
};

let addElementToBeginning = (array, element) => {
  array.unshift(element);
  return array;
};

let sortByLastLetter = (array) => {
  return array.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

let getFirstHalf = (string) => {
  let stringNbr = string.length / 2;
  let temp = "";
  for (let i = 0; i < stringNbr; i++) {
    temp += string[i];
  }
  return temp;
};

let makeNegative = (number) => {
  return -Math.abs(number);
};

let numberOfPalindromes = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let a = array[i].split("");
    a = a.reverse();
    a = a.join("");
    if (array[i] === a) {
      count++;
    }
  }
  return count;
};

let shortestWord = (array) => {
  return array.reduce((a, b) => (a.length <= b.length ? a : b));
};

let longestWord = (array) => {
  return array.reduce((a, b) => (a.length >= b.length ? a : b));
};

let sumNumbers = (array) => {
  return array.reduce((y, z) => y + z, 0);
};

let repeatElements = (array) => {
  return array.concat(array);
};

let stringToNumber = (string) => {
  return parseInt(string);
};

let calculateAverage = (array) => {
  return array.reduce((a, b) => a + b, 0) / array.length;
};

let getElementsUntilGreaterThanFive = (array) => {
  return array.slice(0, 6);
};

let convertArrayToObject = (array) => {
  const arr = [];
  while (array.length > 0) {
    arr.push(array.splice(0, 2));
  }
  return Object.fromEntries(arr);
};

let getAllLetters = (array) => {
  //stolen from SarahDade
  let res = [];
  for (let i = 0; i < array.length; i++) {
    let strTemp = array[i].split("");
    for (let j = 0; j < strTemp.length; j++) {
      res.push(strTemp[j]);
    }
  }
  res.sort();
  res = res.filter(function (item, index, inputArray) {
    return inputArray.indexOf(item) === index;
  });
  return res;
};

let swapKeysAndValues = (object) => {
  let obj = {};
  Object.keys(object).forEach((key) => {
    obj[object[key]] = key;
  });
  return obj;
};

let sumKeysAndValues = (object) => {
  let sum = 0;
  Object.keys(object).forEach((key) => {
    sum = sum + Number(object[key]) + Number(key);
  });
  return sum;
};

let removeCapitals = (string) => {
  return string.replace(/[A-Z]/g, "");
};

let roundUp = (number) => {
  return Math.ceil(number);
};

let formatDateNicely = (date) => {
  let datum = new Date(date);
  let d = datum.getDate();
  let m = datum.getMonth() + 1;
  let y = datum.getFullYear();
  return "0" + d + "/0" + m + "/" + y;
};

let getDomainName = (string) => {
  return string.replace(".com", "").split("@")[1];
};

let titleize = (string) => {
  let up = string.split("");
  for (let i = 1; i < up.length; i++) {
    if (up[i - 1] == "the" || up[i - 1].slice(-1) == ".") {
      up[i] = up[i].charAt(0).toUpperCase() + up[i].slice(1);
    }
  }
  up[0] = up[0].charAt(0).toUpperCase() + up[0].slice(1);
  return up.join(" ");
};

let checkForSpecialCharacters = (string) => {
  return !/^[A-Za-z0-9]+$/.test(string);
  /*if (format.test(string)) {
    return false;
  } else {
    return true;
  }*/
};

let squareRoot = (number) => {
  return Math.sqrt(number);
};

let factorial = (number) => {
  if (number == 0 || number == 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

let findAnagrams = (string) => {
  /*stolen at David*/
  let newString = [];
  if (string.length === 2) {
    newString.push(string[0] + string[1]);
    newString.push(string[1] + string[0]);
  }
  if (string.length === 3) {
    newString.push(string[0] + string[1] + string[2]);
    newString.push(string[0] + string[2] + string[1]);
    newString.push(string[1] + string[0] + string[2]);
    newString.push(string[1] + string[2] + string[0]);
    newString.push(string[2] + string[0] + string[1]);
    newString.push(string[2] + string[1] + string[0]);
  }

  return newString.sort();
};

let convertToCelsius = (number) => {
  return Math.ceil(((number - 32) * 5) / 9);
};

let letterPosition = (array) => {
  let text = array.join("");
  function alphabetPosition(text) {
    let alpha = [
      "",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let numalpha = [];
    text = text.toLowerCase();
    for (let i = 0; i < text.length + 1; i++) {
      if (alpha.indexOf(text[i]) !== -1) {
        numalpha.push(alpha.indexOf(text[i]));
      }
    }
    return numalpha;
  }
  return alphabetPosition(text);
};
