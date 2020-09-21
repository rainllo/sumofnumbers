const listOfNumbers = [1, 2, 3, 4, 5];

function sumFor(list) {
  let totalFor = 0;
  for (let i = 0; i < list.length; i++) {
    totalFor += list[i];
  }
  return totalFor;
}

console.log(sumFor(listOfNumbers));

function sumWhile(list) {
  let totalWhile = 0;
  let i = 0;
  while (i <= list.length) {
    totalWhile += i;
    i++;
  }
  return totalWhile;
}

console.log(sumWhile(listOfNumbers));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1));
}

console.log(sumRecursion(listOfNumbers));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(listOfNumbers));
