/*
Tu dois écrire une fonction permettant de déterminer si une année est bissextile.
Elle renverra true si l'année passée en paramêtre est bissextile et false si ce n'est pas le cas.

Pour rappel, une année est bissextile:
 - si elle est divisible par 4 sans être divisible par 100,
 ou
 - si elle est divisible par 400.
Les années 2004, 2016 et 2020 sont bissextiles.

Autre rappel: Tu dois utiliser l'opérateur modulo (%) pour vérifier si un nombre est divisible par un autre.
*/

function isLeapYear(year) {
    // TODO: Your code here
}

console.log("1900: ",isLeapYear(1900)); // should be false
console.log("2000: ",isLeapYear(2000)); // should be true
console.log("2004: ",isLeapYear(2004)); //should be true
console.log("2019: ",isLeapYear(2019)); // should be false
console.log("2020: ",isLeapYear(2020)); // should be true

