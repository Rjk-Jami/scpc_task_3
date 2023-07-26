const romanToInt=(roman)=> {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let total = 0;
    let prevValue = 0;
  
    for (let i = roman.length - 1; i >= 0; i--) {
      const currentValue = romanNumerals[roman[i]];
        // console.log(currentValue)
      if (currentValue < prevValue) {
        total -= currentValue;
      } else {
        total += currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return total;
  }
  
  // Test examples:
  console.log(romanToInt("III")); 
  console.log(romanToInt("IV")); 
  console.log(romanToInt("IX")); 
  console.log(romanToInt("XXI")); 
  console.log(romanToInt("MDCLCMXCIV")); 
  