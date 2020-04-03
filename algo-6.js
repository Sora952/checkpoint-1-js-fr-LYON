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

function sumArr(arrayA, arrayB) {
  let index = 0;
  let arrA;
  let arrB;

  const sumArray = [];
  if (arrayA.length >= arrayB.length) {
    arrA = arrayA;
    arrB = arrayB;
  } else {
    arrB = arrayA;
    arrA = arrayB;
  }

  for (const inputA of arrA) {
    let inputB = arrB[index];
    if (typeof inputB === 'undefined') {inputB = 0; }

    const sum = parseInt(inputA) + parseInt(inputB);
    sumArray.push(sum.toString());
    index++;
  }
  
  return sumArray
}
