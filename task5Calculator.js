const calculator=(num1, operator, num2)=> {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return 'Error: Cannot divide by zero';
        }
        return num1 / num2;
      default:
        return 'Error: Invalid operator';
    }
  }
  console.log(calculator(5, '+', 3)); 
  console.log(calculator(10, '-', 4)); 
  console.log(calculator(3, '*', 7)); 
  console.log(calculator(15, '/', 3)); 
  console.log(calculator(10, '/', 0));
  console.log(calculator(5, '^', 3)); 
    