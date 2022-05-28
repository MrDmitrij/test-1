/* function isIsogram(str){
  let arr = [];
  let arr1 = str.split('');
  for (let i = 0; i < arr1.length; i++) {
    if (arr.includes(arr1[i].toUpperCase())) return false;
    arr.push(arr1[i].toUpperCase());
  }
  return true;
} */

function isIsogram(str){
  return !str.match(/(.).*\1/i);
}

alert( isIsogram("Dermatoglyphics") );
alert( isIsogram("aba") );
alert( isIsogram("moOse") );
alert( isIsogram("") );



 
