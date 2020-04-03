
// Exemple :
// sumArr( ["1", "2", "3"], ["2", "4", "1"] ) doit renvoyer ["3", "6", "4"]
// sumArr( ["2", "7", "3"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12"]
// sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12", "8", "2"]

 let arrA =  ["1", "2", "3"]
 let arrB = ["2", "4", "1"] 
  
 function sumEqualLengthArray (arr1,arr2) {
  let totalarr = [];
  let arr1Numb = arr1.map( stringnum => {
    parseInt(stringnum)
  });
  console.log(arr1Numb)
  let arr2Numb = arr2.map( stringnum => {
    parseInt(stringnum)
  });
  for ( let i = 0 ; i < arr1Numb.length ; i++) {
    totalarr.push(arr1Numb[i]+arr2Numb[i])
  }
  // outputArray =  totalarr;
  console.log(totalarr)
}
sumEqualLengthArray(arrA,arrB)

// function sumArr(arrayA, arrayB) {
//   // Your code here !
//   let outputArray = [];
//   let alength = arrayA.length;
//   let blength = arrayB.length;
  
//   function sumEqualLengthArray (arr1,arr2) {
//     let totalarr = [];
//     let arr1Numb = arr1.map( stringnum => {
//       parseInt(stringnum)
//     });
//     let arr2Numb = arr2.map( stringnum => {
//       parseInt(stringnum)
//     });
//     for ( let i = 0 ; i < arr1Numb.length ; i++) {
//       totalarr.push(arr1Numb[i]+arr2Numb[i])
//     }
//     outputArray =  totalarr;
//     return outputArray
//   }

//   if (alength === blength) {
//     sumEqualLengthArray(arrayA,arrayB)
//   }

//   else if (blength < alength) {
//     let aSliceArray = arrayA.slice(0, blength); 
//     outputArray = sumEqualLengthArray(aSliceArray,arrayB)
//     for (let i=0; i <= (alength-blength); i++) {
//       outputArray = outputArray.push(arrayA(i+blength))
//     }
//     return outputArray
//   }
// }
// console.log(sumArr(arrA,arrB))
