/*
Voici un tableau de personnes.

Tu dois écire le code de la fonction findAdult, qui renvoie un
nouveau tableau avec 2 tableaux à l'intérieur: 
- Le premier avec uniquement les femmes adultes.
- Le deuxième avec uniquement les hommes adultes.
(Compte tenu qu'on est adulte à 18 ans)

Exemple : output [ [femmes adultes], [hommes adultes] ]

*/
function findAdults(arr) {
  let array = [[], []];

  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age > 17) {
      if (persons[i].sex === "female") {
        array[0].push(persons[i]);
      } else {
        array[1].push(persons[i]);
      }
    }
  }

  return array;
}
