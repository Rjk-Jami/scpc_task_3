const findTwoNumbersWithSum=(arr, target)=> {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return [i, j];
        }
      }
    }
  
    // If no such pair is found, return an empty array.
    return [];
  }
  const inputArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 17;
  const output = findTwoNumbersWithSum(inputArray, targetValue);
  console.log(output); 
  