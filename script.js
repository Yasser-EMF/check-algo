function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 !== 0 || year % 400 === 0) {
        return true;
      }
    }
    return false;
  }
  
  // Example usage
  console.log(isLeapYear(2020)); 
  console.log(isLeapYear(1900)); 
  console.log(isLeapYear(2000)); 
  

  function getTicketPrice(age) {
    if (age <= 12) {
      return "$10";
    } else if (age >= 13 && age <= 17) {
      return "$15";
    } else {
      return "$20";
    }
  }
  
  // Example usage
  console.log(getTicketPrice(10)); // $10
  console.log(getTicketPrice(15)); // $15
  console.log(getTicketPrice(25)); // $20

  

  function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
  }
  
  // Example usage
  console.log(power(2, 3)); // 8
  console.log(power(5, 4)); // 625

  

  function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z]/g, '');
  
    function check(start, end) {
      if (start >= end) return true;
      if (str[start] !== str[end]) return false;
      return check(start + 1, end - 1);
    }
  
    return check(0, str.length - 1);
  }
  
  // Example usage
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
  console.log(isPalindrome("Hello")); // false
  