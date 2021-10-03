//Взял функцию с mdn и добавил к ней условия
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#получение_случайного_целого_числа_в_заданном_интервале_включительно
function getRandomIntInclusive (min, max) {
  if ((min >= 0) && (max >= 0) && (min < max)) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (min == max) {
    return min;
  }

  return undefined;
}

getRandomIntInclusive();

function isValidStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }

  return false;
}

isValidStringLength();
