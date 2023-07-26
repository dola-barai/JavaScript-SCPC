const calculator = (num1, operator, num2) => {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      if (num2 === 0) {
        console.log("Division by zero is not allowed.");
      }
      return num1 / num2;
    } else {
      console.log("Invalid operator");
    }
  };
  
  console.log(calculator(5, '+', 3)); 
  console.log(calculator(10, '-', 4)); 
  console.log(calculator(3, '*', 6)); 
  console.log(calculator(15, '/', 3)); 
  