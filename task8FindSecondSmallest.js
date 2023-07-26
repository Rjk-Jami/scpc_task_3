const findSecondSmallest=(arr)=> {
    if (!Array.isArray(arr) || arr.length < 2) {
      throw new Error("Input should be an array with at least two elements.");
    }
  
    let firstSmallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < firstSmallest) {
        secondSmallest = firstSmallest;
        firstSmallest = num;
      } else if (num < secondSmallest && num !== firstSmallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("No second smallest element found.");
    }
  
    return secondSmallest;
  }
  
  // Example usage:
  const numbers = [5, 9, 1, 5,3, 6];
  const secondSmallest = findSecondSmallest(numbers);
  console.log("Second Smallest:", secondSmallest); 
  