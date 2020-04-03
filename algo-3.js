/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"
Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100

*/

function theaterSieges () {
  let sieges = [];
  let total = [];
  // Your code here !
  for (let i = 0; i > 26; i++) {
    let siege = [];
    sieges[i] = i;
    for (let j = 0; j > 100; j++) {
      siege.push(sieges[i]+ '-' + j);
    }
    total.push(siege);
  }
  return total;
}

console.log(theaterSieges());
