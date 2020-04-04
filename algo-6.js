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

const arr1 = ["1", "2", "3"];
const arr2 = ["2", "7", "3", "8", "2"];

function sumArr(arrayA, arrayB) {
  // Your code here !
  const reducer = (accumulator, currentValue) =>
    parseInt(accumulator) + parseInt(currentValue);
  let sumA = 0;
  let sumB = 0;
  if (arrayA.length !== 0) {
    sumA = arrayA.reduce(reducer);
  } else {
    arrayA = 0;
    sumA = arrayA;
  }

  if (arrayB.length !== 0) {
    sumB = arrayB.reduce(reducer);
  } else {
    arrayB = 0;
    sumB = arrayB;
  }

  return (sumA + sumB).toString();
}

console.log(sumArr(arr1, arr2));
