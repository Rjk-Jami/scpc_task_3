const sumPositiveNumbers=(arr)=> {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  const input = [2, -5, 10, -3, 7];
  const output = sumPositiveNumbers(input);
  console.log(output); 
    