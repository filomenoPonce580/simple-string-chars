function solve(str){
//create empty array
  let final = [];

//create variables corresponding to the characters we are looking for. 
  let uppers = /[A-Z]/g;
  let lowers = /[a-z]/g;
  let nums = /[0-9]/g;
  let specials = /\W/g;
  
  //turn into an array to loop through
  let toMatch = [uppers, lowers, nums, specials]
  
  //for loop iterates through toMatch array
  for(let i = 0; i < toMatch.length; i++){
    //match the values in array to the string, use the .lenth propery of new arrays and push that into final array
    str.match(toMatch[i]) ? final.push(str.match(toMatch[i]).length) : final.push(0);
  }
  
  //return
  return final
}
