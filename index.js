function minimal(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
  console.log(minimal(1, 4));
  console.log(minimal(3, 2));
  console.log(minimal(3, 3));
  
  function power(a, b) {
    return Math.pow(a, b);
  }
  
  console.log(power(7, 3)); 
  console.log(power(3, 3)); 
  console.log(power(4, 0.5));