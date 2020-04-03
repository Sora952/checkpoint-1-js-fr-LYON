/*
Voici un tableau de personnes.

Tu dois écire le code de la fonction findAdult, qui renvoie un
nouveau tableau avec 2 tableaux à l'intérieur: 
- Le premier avec uniquement les femmes adultes.
- Le deuxième avec uniquement les hommes adultes.
(Compte tenu qu'on est adulte à 18 ans)

Exemple : output [ [femmes adultes], [hommes adultes] ]

*/
const persons = [
  { name: "Mary Poppins", age: 32, sex: "female" },
  { name: "Tony Stark", age: 36, sex: "male" },
  { name: "John Doe", age: 12, sex: "male" },
  { name: "Jane Doe", age: 6, sex: "female" },
  { name: "Homer Simpson", age: 45, sex: "male" },
  { name: "Leonardo Di Caprio", age: 42, sex: "male" },
  { name: "Carla Bruni", age: 54, sex: "female" },
  { name: "Lisa Simpson", age: 13, sex: "female" },
  { name: "Millie Bobby Brown", age: 15, sex: "female" },
  { name: "Penelope Cruz", age: 47, sex: "female" }
];

function findAdults(arr) {
  let output=[];
  const adultFemale = arr.filter( a => a.sex === "female" && a.age >= 18);
  const adultMale = arr.filter( a => a.sex === "male" && a.age >= 18);
  output.push(adultFemale, adultMale);
  return output;
}

console.log(findAdults(persons));