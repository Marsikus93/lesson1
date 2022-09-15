function toCamelCase(str){
if (str.search ("-")>= 0) {
    return str
      .split("-")
      .map(
      (word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)
      )
      .join ("");
    }
      
    else {
      return str
        .split("_")
        .map(
        (word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)
        )
        .join ("");
    }
      }