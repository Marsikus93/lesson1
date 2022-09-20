function createPhoneNumber(numbers){
    result = '(' + String(numbers[0]) + String(numbers[1]) + String(numbers[2]) +
      ') ' + String(numbers[3]) + String(numbers[4]) + String(numbers[5]) + "-" +
      String(numbers[6]) + String(numbers[7]) + String(numbers[8]) 
    + String(numbers[9]);
    return result
  }