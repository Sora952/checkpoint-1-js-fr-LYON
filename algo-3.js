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

function theaterSieges (maximumRow, maximumColumn) {
  for (let rowActuelle = 1; rowActuelle <= maximumRow; rowActuelle++) {
    for (let colonneActuelle = 1; colonneActuelle <= maximumColumn; colonneActuelle++) {
      console.log(rowActuelle + ' - ' + colonneActuelle);
    }
  }
}

const CombienDeRow = 26;
const CombienDeColumn = 100;

console.log(theaterSieges(CombienDeRow, CombienDeColumn));
