/*
écris une fonction, qui prend deux paramètres.
Ces deux paramètres sont des arrays de string numbers.
Ta fonction doit renvoyer un seul array avec la somme des
éléments correspondants en string.
Si l'un des deux éléments est vide, il doit être considéré comme 0.

Exemple :
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) doit renvoyer ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12", "8", "2"]

*/
firstArray = ["2", "4", "9"];
secondArray = ["2", "7", "3", "8", "2"];

function sumArr(arrayA, arrayB) {
  
  let globalArray = [];
  
  if(arrayA.length < arrayB.length) {
    let arrayAInteger = [];
    let arrayBInteger = [];
    
    for (let i = 0; i < arrayB.length; i++) {
      if(typeof arrayA[i] === "undefined") {
        arrayA[i] = 0;
      } else if (typeof arrayB[i] === "undefined") {
        arrayB[i] = 0;
      }
      arrayAInteger.push(parseInt(arrayA[i]));
      arrayBInteger.push(parseInt(arrayB[i]));
      globalArray.push(arrayAInteger[i] + arrayBInteger[i]);
    }
  } else if (arrayB.length < arrayA.length) {
      let arrayAInteger = [];
      let arrayBInteger = [];
    
      for (let j = 0; j < arrayA.length; j++) {
        
        if(typeof arrayA[j] === "undefined") {
        arrayA[j] = 0;
      } else if (typeof arrayB[j] === "undefined") {
        arrayB[j] = 0;
      }
        
        arrayAInteger.push(parseInt(arrayA[j]));
        arrayBInteger.push(parseInt(arrayB[j]));
        globalArray.push(arrayAInteger[j] + arrayBInteger[j]);
    }
  }
  return globalArray;
}

console.log(sumArr(firstArray, secondArray));