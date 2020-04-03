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
  // Your code here !
  const outputArray = [];
  if (arrayA.length >= arrayB.length) {
    arrayA.forEach((element, index) => {
      let sum = 0;
      let currentNumberA = parseInt(element);
      let currentNumberB = parseInt(arrayB[index]);
      if (isNaN(currentNumberA) && !isNaN(currentNumberB)) {
        currentNumberA = 0;
      } else if (!isNaN(currentNumberA) && isNaN(currentNumberB)) {
        currentNumberB = 0;
      }
      sum = currentNumberA + currentNumberB;
      outputArray.push(sum.toString());
    });
    return outputArray;
  } else {
    arrayB.forEach((element, index) => {
      let sum = 0;
      const currentNumberB = parseInt(element);
      let currentNumberA = parseInt(arrayA[index]);
      if (isNaN(currentNumberA)) {
        currentNumberA = 0;
      }
      sum = currentNumberA + currentNumberB;
      outputArray.push(sum.toString());
    });
    return outputArray;
  }
}

console.log(sumArr(["2", "7", "3", "8", "2"],["2", "4", "9"]));