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
  const listeSiege = []

  for (let colSiege = 1; colSiege <= 26; colSiege++) {
    for (let siege = 1; siege <= 100; siege++) {
      listeSiege.push(`${colSiege} - ${siege}`)
    }
  }

  return listeSiege.join("\n")
}
