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

function sumArr (arrayA, arrayB) {
  // Your code here !
  let longArr = [];
  if (arrayA.length >= arrayB.length) {
    longArr = arrayA;
  } else {
    longArr = arrayB;
  }

  const outputArray = [];
  for (let i = 0; i < longArr.length; i++) {
    if (typeof arrayA[i] === 'undefined') {
      outputArray.push(Number(arrayB[i]));
    } else if (typeof arrayB[i] === 'undefined') {
      outputArray.push(Number(arrayA[i]));
    } else {
      outputArray.push(Number(arrayA[i]) + Number(arrayB[i]));
    }
  }

  for (let i = 0; i < outputArray.length; i++) {
    outputArray[i] = outputArray[i].toString();
  }
  return outputArray;
}

console.log(sumArr(["1", "2", "3"], ["2", "4", "1"]));
console.log(sumArr(["2", "7", "3"], ["2", "4", "9"]));
console.log(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"]));
