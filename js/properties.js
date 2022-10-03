var Obj= {
    gift: "pony", 
    pet: "kitten",
     bed: "sleigh",
     city: "Seattle",}
  function checkObj(obj, checkProp) {
  
  if(obj.hasOwnProperty(checkProp)){
    return Obj [checkProp];}
  else {return "Not Found";}
  }  