function findMostFrequentElement(arr) {
    let maxFrequency = 0; // Variable to keep track of the maximum frequency found so far.
    let maxFrequencyElement; // Variable to store the element with the highest frequency.
  
    const countMap = {}; // Object to store the frequency of each element.
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      countMap[element] = (countMap[element] || 0) + 1; // Increment the frequency count for the current element.
      if (countMap[element] > maxFrequency) {
        // Check if the current element's frequency is higher than the current maximum.
        maxFrequency = countMap[element]; // If so, update the maximum frequency.
        maxFrequencyElement = element; // Also update the most frequent element.
      }
    }
  
    return maxFrequencyElement; // Return the element with the highest frequency.
  }
  const input = [3, 5, 2, 5, 3, 3, 1, 4, 5, 2, 5, 2, 1, 2,1,2];
  const output = findMostFrequentElement(input);
  console.log(output); 
    