// Missing Numbers
// Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).

// The given array may be unsorted and may contain duplicates.
// The returned array should be in ascending order.
// If no integers are missing, return an empty array.

// Missing Numbers
// Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).

// The given array may be unsorted and may contain duplicates.
// The returned array should be in ascending order.
// If no integers are missing, return an empty array.

function findMissingNumbers(arr) {
  console.log('Starting arr: ', arr);
  // const testArr = [];
  // unsorted may contain duplicates
  const testSet = new Set(arr);
  console.log('TestSet: ', testSet);
  // ordered arr
  const ordArr = Array.from(testSet).sort();
  console.log('OrdArr: ', ordArr);

  // take arr.length and loop to create all numbers arr
  const testArr = [];
  for (let i = 1; i <= ordArr[ordArr.length - 1]; i++) {
    testArr.push(i);
  }

  // check if ordArr.includes(testArr[i])
  const resultArr = [];
  for (let i = 0; i < testArr.length; i++) {
    if (!ordArr.includes(testArr[i])) {
      resultArr.push(testArr[i]);
    }
  }
  console.log('Result: ', resultArr);
  return resultArr;

  console.log(testArr);

  //  return arr;
}
findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]);
findMissingNumbers([3, 1, 4, 1, 5, 9]);
