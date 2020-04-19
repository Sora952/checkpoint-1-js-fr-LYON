HELPPPPP

# UNIX
====

Savoir gérer les droits (sudo, chown, chmod) : 
===============================================

    - **Sudo**  : Cette commande permet d'effectuer des tâches "administratives". Elle permet d'utiliser et d'executer les droits de super utilisateur. 
  
    -**chown** : Cette commande permet de modifier le propriétaire d'un fichier ou d'un dossier. 

    -**chmod** : Cette commande permet de définir les droits d'un fichier ou dossier pour 3 types d'utilisateurs différents (droits concernant le propriétaire, le groupe propriétaire, et les autres utilisateurs).
    
     La syntaxe de la commande est la suivante : 

    > chmod xxx chemin_vers_fichier 

     Le premier x est la valeur es droits du propriétaire.
     Le second x est la valeur des droits du groupe propriétaire.
    Et le dernier est la valeur des droits des autres utilisateurs.
    
Gérer les processus et le multi-tâche (ps, top, kill ...)	 : 
==============================================================

La commande **ps** permet d'afficher la liste des processus associés au terminal.

La commande **top** (ou htop) permet d'afficher les processus qui consomment le plus de ressources sur la machine.

La commande **kill** permet d'arrêter un processus avec son numéro PID obtenu via la commande **ps**.

## **Git**
=========

Faire relire mon code à mon équipe avec une pull request (PR) : 
=============================================================
Une pull request a pour but de demander au propriétaire d'un dépôt, ou aux différents développeur d'un projet de prendre en compte les modifications qu'on a effectué sur une branche. Suite à une pull request, le propriétaire peut acceder aux modifications pour faire une vérification, S'il estime que les modifications ne sont pas correctes, il peut refuser la PR en explicitant les raisons. Ou à contrario l'accepter pour merge les modifications. 

Faire des merges réguliers et gérer les conflits :
===================================================
Git mmerge permet de fusionner notre branche à la branche master. 
Lors des merges, des conflits peuvent apparaître. un git status permet d'observer les fichiers qui n'ont pas été fusionnés. Il faut donc choisir manuellement les données à garder. 

Faire des commits atomiques correctement commentés et des PR de 
taille humaine : 
====================================================================
Effectuer des commits atomiques revients à décomposer les modifications. Et donc d'utiliser plusieurs commits afin de mieux suivre, et comprendre les modifications apportées. Ou encore de retrouver plus facielment une modification et de la "reverse" sans impacter les autres modifications. 

### Intégration : 
================

Structurer une page en HTML5 :
================================= 
En premier lieu, il convient de de faire une déclaration du type du document (doctype). Cela permet d'informer le navigateur du type utilisé.
<!Doctype html>

Ensuite, on a l'élément <html> avec a langue, pour informer le navigateur que c'est un document HTML : 
<html lang="FR">

</html>

Il s'ensuit la section <head> qui contient les métadonnées (titre du document, caractères, styles, liens, scripts), l'information spécifique sur la page Web qui n'est pas affiché à l'utilisateur.

<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
</head>

Puis on a la section <body> qui regroupe le contenu avec les titres, le header, la nav si elle existe et le footer.

<body>
  ...
  <!-- Le reste du contenu -->
  ...
</body>
</html>

Styliser efficacement avec CSS	:
==================================
Il peut être judicieux de séparer le CSS en plusieurs fichiers. Chacun correspondra à une page de l'application par exemple. 

Il faut établir une convention de Nommage et s'y tenir. Par exemple utiliser la convention BEM (bloc, element, modifier) :

    La méthodologie BEM perment de découper les entités des pages html en blocs et éléments. Une page peut avoir plusieurs blocs, chaques blocs peut avoir plusieurs éléments qui lui sont propres. Et enfin chaque éléments peut avoir un état qui est modifié selon un évènement, c'est le modifier.

Il est recommandé d'utiliser un css orienté objet, d'autant plus qu'on fait du js. La méthodologie consiste à regrouper les propriétés d'une classe. Et rajouter des classes supplémentaires qui correspondes à leurs spécificités  : 

    `
    .bouton{
    display: block;
    font-size: 12px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    }
    .bouton-rouge{
    border-color: red;
    color: red;
    }
    .bouton-vert{
    border-color: green;
    color: green;
    } 

####Javascript : 
=================

ES6+ (fléchées, destructuring, spread operator, rest parameters...) :
=======================================================================
ES6+ a été pensé pour créer des applications web facilement maintenables. 
 Fléchées : 
Les fonctions fléchées permettent d'écrire des fonctions plus courtes, et elles sont souvents annonymes : 
Exemple  : 
    
```
    hello = function() {
      return "Hello World!"
    }

```
Le même code avec une fonction fléchée : 

```
hello = () => {
  return "Hello World!";
}

```
Ou encore  : 

```
hello = () => "Hello World!";

```
Si une fonction dispose d'une paramètre, on peut l'écrire de la manière suivante : 
```
hello = x => "Hello " + x;

```
**Destructuring** : 
La destructuration permet d'acceder à certaines informations d'un objet (ou tableau) dans des variables.  
```

let identite = { 
nom: 'Durand', 
prenom: 'Pierre' 
};
    

```
```
let {nom, prenom} = identite;
console.log(nom);  // Durand
console.log(prenom);  // Pierre

```
On a plus besoin de créer la variable "nom"et "prenom" pour acceder à ces propriétés.

**Spread operator**
 :
Le spread oerator permet de développer un objet itérable, un tableau par exemple, lorsqu'on a besoin de plusieurs arguments.
```
const myArray = [1991, 8, 1]
new Date(...myArray) // object Date - équivaut à: new Date(1991, 8, 1)

```



Maitrise de la fonction (fonction anonyme, fonctions fléchée, callback et closure) :
  * Une fonction anonyme est une fonction qui n'a pas de nom, exemple  :
```
function(){
    alert('rouge');
}
```
  * Une fonction fléchée est une façon plus courte d'écrire une fonction anonyme : 
```
const alphabets = [
  'a',
  'bb',
  'ccc',
  'dddd'
];
console.log(alphabets.map(alphabet => alphabet.length));

```
  * Callback : 
  Les callbacks permetent d'executer une fonction b une fois que la fonction A est terminée. La fonction b est passé dans la fonction A en tant qu'argument. 

```
  function salutation(name) {
  alert('Bonjour ' + name);
}

function processUserInput(callback) {
  var name = prompt('Entrez votre nom.');
  callback(name);
}

processUserInput(salutation);

```
* Closure  : 
  Une fermeture (closure ) est la paire formée d'une fonction et des références à son environnant (la portée). 

* Maîtrise des événements utilisateurs VanillaJS :

Maîtrise du DOM :



Orienté Objet en ES6(Classe, Inheritance, Interface, Staticité)

##### React : 


** Utiliser JSX : **


* Savoir implémenter un routing :
  1. Faire appel et installer  react-router-dom
`   npm install --save react-router-dom
`
  2. Dans app.js mettre en place le routing pour pouvoir naviguer sur les pages home et About: 
```
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <nav>
          <ul>          
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>         
          </ul>
        </nav>
        <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />            
            </Switch>
          </main>
      <div>

```

* Afficher une liste de composants avec map: 

