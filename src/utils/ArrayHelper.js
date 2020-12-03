export const sortingWords = (array) => {
  //сортировка массива ключевых слов по уменьшению совпадений
  let keywordsArray = [];
  array.map((item, i) => {
    keywordsArray[i] = item.keyword;
    return keywordsArray;
  });
  const result = keywordsArray.reduce(function (prevVal, item) {
    if (!prevVal[item]) {
      prevVal[item] = 1;
    } else {
      prevVal[item] += 1;
    }
    return prevVal;
  }, {});

  return Object.keys(result).sort(function (a, b) {
    return result[b] - result[a];
  });
};

export const ending = (number) => {
  //склонение числительных подстановка окончаний
  const numberString = number.toString();
  const lastNumeral = parseInt(numberString[numberString.length - 1]);
  switch (lastNumeral) {
    case 1:
      return "му";
    case 2:
      return "м";
    case 3:
      return "м";
    case 4:
      return "м";
    case 7:
      return "ми";
    case 8:
      return "ми";
    default:
      return "ти";
  }
};
