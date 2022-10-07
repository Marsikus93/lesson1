function isSortedAndHow(array) {
    const copyArray = [...array];
    array.sort((a, b) =>  a - b);
    var assend;
    for (let i=0; i< array.length; i++){
      if (array[i] ===copyArray[i]){
          assend=true;
      }
      else {
        assend=false;
        break;
      }
    }
    if (assend === true) {
      return "yes, ascending"
    }
  
    array.sort((a, b) =>  b - a);
    var descend;
    for (let i=0; i< array.length; i++){
      if (array[i] ===copyArray[i]){
          descend=true;
      }
      else {
        descend=false;
        break;
      }  
    
      if (descend === true) {
       return "yes, descending"
       }
    }
    return "no";
    }
   