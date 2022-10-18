function XO(str) {

    str = str.toLowerCase();

    var arrayOfCharacters = str.split("");

    var countX = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'x');
      }, 0);
    
    var countO = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'o');
      }, 0);
    
    if ( countX == countO ) {
      return true;
    } else {
      return false;
    }
}