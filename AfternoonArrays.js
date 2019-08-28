//===== URLify a String =====

function URLify(str){
  let result = str.replace(/ /g, '%20');
  console.log(result);
}

//URLify('tauhida parveen'); //expected output: 'tauhida%20parveen'

//URLify('www.thinkful.com /tauh ida parv een');
//expected output: 'www.thinkful.com%20/tauh%20ida%20parv%20een'

//===== Filtering an Array =====

function filterWithoutUsingFilter(arr) {
// removes all numbers less than 5
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}

//filterWithoutUsingFilter([1,2,3,4,5,6,7,8,9]);

//===== Max sum in the array =====
// ONLY UPDATE THE MAX IF THE CURRENT IS GREATER THAN MAX
function findMax(arr){

  let max = 0;

  let current = 0;

  for(let i = 0; i < arr.length; i++){
    console.log('=====');
    console.log('Current', current);

    current = current + arr[i];
    console.log('Array[i]', arr[i]);
    console.log('New Current', current);

    if(current > max){
      max = current;
      console.log('New max', max);
    }
  }

  return max;

}

//console.log(findMax([4, 6, -3, 5, -2, 1]));
//expected output: 12

// ===== Merge Arrays =====
function mergeArrays(arr1, arr2) {
  let newArray = [];

  const totalLength = arr1.length + arr2.length;

  for (let i = 0; i < totalLength; i++) {
    if (arr1[0] > arr2[0]) {
      newArray.push(arr2.shift());
    } else {
      newArray.push(arr1.shift());
    }
  }
  console.log(newArray);
}

//mergeArrays([1,3,6,8,11], [2,3,5,8,9,10]);
//expected output: [1,2,3,3,5,6,8,8,9,10,11]

// ===== Remove Characters =====
// Nested loop - experiment
// function removeCharacters(string, conditions){
//   let result = string;
//   for (let i = 0; i < conditions.length; i++) {
//   //look at each condition character
//     console.log('===== New Condition?');
//     for (let j = 0; j < string.length; j++) {
//     //look for condition character in string
//       console.log('=====');
//       console.log('Current Condition', conditions[i]);
//       console.log('Current Character', string[j], 'J: ', j,);
//       if (conditions[i] !== string[j]) {
//       //remove from string
//         result = result.slice(j, 1);
//         console.log('Result', result);
//       }
//     }
//   }
//   console.log('FINISHED: ',result);
// }

// THANKS ASHLEY :)
function removeCharacters(string, conditions){
  let result = '';

  for(let i = 0; i< string.length; i++){
    if(!conditions.includes(string[i])) {
      result += string[i];
    }
  }
  console.log(result);
}

removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');
//expected output: 'Bttl f th Vwls: Hw vs. Grzny'

// ===== Products =====
function products(arr){
  let products = [];

  for (let i=0; i < arr.length; i++){
    let product = 1;

    for (let j=0; j < arr.length; j++){
      if (j !== i){
        product *= arr[j];
      }
    }
    products.push(product);
  }
  console.log(products);
}

products([1,3,9,4]);
//expected output: [108, 36, 12, 27]

// ===== 2D Array =====

// ===== String Rotation =====