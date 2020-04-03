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
  // Your code here !
  const columns = 26;
  const rows = 100;
  const theaterSeats = [];
  for (let i = 1; i <= columns; i++) {
    for (let j = 1; j <= rows; j++) {
      theaterSeats.push(i + " - " + j);
    }
  }
  return theaterSeats;
}

console.log(theaterSieges());
console.log(theaterSieges().reverse());
