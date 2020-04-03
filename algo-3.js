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
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
  let numOfSeats = [];
  let column = [];
  	for (let i = 0; i < columns.length; i++) {
  		for (let j = 1; j <= 100; j++) {
  			column.push(columns[i] + '-' + j);
  		}
  	}
  numOfSeats.push(column);
  return numOfSeats;
};



console.log(theaterSieges());
