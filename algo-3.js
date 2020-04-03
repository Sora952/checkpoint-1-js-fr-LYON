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

function theaterSieges() {
  const array = [];

  for (let column = 1; column <= 26; column++) {
    for (let row = 1; row <= 100; row++) {
      const place = column + '-' + row;
      array.push(place); 
    }
  }
  return array;
}

console.log(theaterSieges());
