const reverseString=(input)=> {
  let reversedString = '';
  for (let i = input.length - 1; i >= 0; i--) {
    reversedString += input[i];
  }
  return reversedString;
}


const input = "hello world";
const output = reverseString(input);
console.log(output); 
