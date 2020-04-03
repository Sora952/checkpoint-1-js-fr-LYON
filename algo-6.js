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

arrayNbr1 = ["1", "2", "3", "6"];
arrayNbr2 = ["4", "7", "2", "4"];

function sumArr(arrayA, arrayB) {
  const result = [arrayA, ...[arrayB]];
  let a = [];
   result.forEach(item => {
     for(let i = 0; i <= result[0].length; i++){
      a.push(Number(item[0][i]) + Number(item[1][i]));
  }
})
  return a
}
console.log(sumArr(arrayNbr1, arrayNbr2));