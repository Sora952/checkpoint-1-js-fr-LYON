
// Exemple :
// sumArr( ["1", "2", "3"], ["2", "4", "1"] ) doit renvoyer ["3", "6", "4"]
// sumArr( ["2", "7", "3"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12"]
// sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12", "8", "2"]

 let arrA = ["2", "7", "3", "8", "2"]
 let arrB = ["2", "4", "9"]

function sumEqualLengthArray (arr1,arr2) {
  let totalNumbarr = [];
  let outputArray = [];
  let arr1Numb = arr1.map( stringnum => parseInt(stringnum));
  let arr2Numb = arr2.map( stringnum => parseInt(stringnum));
  for ( let i = 0 ; i < arr1.length ; i++) {
    totalNumbarr.push(arr1Numb[i]+arr2Numb[i])
  }
  outputArray = totalNumbarr.map(num => num.toString())
  return outputArray
}

function sumArr(arrayA, arrayB) {
  // Your code here !
  let outputArray = [];
  let result = []
  let alength = arrayA.length;
  let blength = arrayB.length;

  if (alength === blength) {
    outputArray = sumEqualLengthArray(arrayA,arrayB)
  }

  else if (blength < alength) {
    let aSliceArray = arrayA.slice(0, blength); 
    outputArray = sumEqualLengthArray(aSliceArray,arrayB)
    let restOfAArray = arrayA.slice(blength)
    outputArray = outputArray.concat(restOfAArray)
    return outputArray
  }


  else  {
    let bSliceArray = arrayB.slice(0, alength); 
    outputArray = sumEqualLengthArray(bSliceArray,arrayA)
    let restOfAArray = arrayB.slice(alength)
    outputArray = outputArray.concat(restOfAArray)
    return outputArray
  }
}
console.log(sumArr(arrB,arrA))
