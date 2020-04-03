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
  let output=[];
  if ( arrayA.length >= arrayB.length ){
    for (i=0 ; i < arrayA.length ; i++){
      if (arrayB[i] === undefined){
        const nb = parseInt(arrayA[i], 10);
        const str = nb.toString();
        output.push(str);
      }
      else{
        const nb = parseInt(arrayA[i], 10) + parseInt(arrayB[i], 10);
        const str = nb.toString();
        output.push(str);
      }
    }
  }
  else {
    for (i=0 ; i < arrayB.length ; i++){
      if (arrayA[i] === undefined){
        const nb = parseInt(arrayB[i], 10);
        const str = nb.toString();
        output.push(str);
      }
      else{
        const nb = parseInt(arrayA[i], 10) + parseInt(arrayB[i], 10);
        const str = nb.toString();
        output.push(str);
      }
    }
  }
  return(output);
}

console.log(sumArr( ["1", "2", "3"], ["2", "4", "1"] ));
console.log(sumArr( ["2", "7", "3"], ["2", "4", "9"] ));
console.log(sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ));
console.log(sumArr( ["2", "4", "9"], ["4", "7", "3", "8", "2"] ));