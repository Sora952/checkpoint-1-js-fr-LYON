# Gérer les droits 

#sudo

**Définition**

- Sudo = substitute user Do.La commande sudo mise avant une autre commande la lance en tant qu'administrateur!

**Utilisation**

-Pour lancer une commande en mode superutilisateur,il faut écrire

>$ sudo <commande>

- UN MDP est requis pour pouvoir exécuter la commande,disponible seulement pour 15 minutes il faut redonner le MDP aprés ces 15 minutes.

-Pour kill la session avant les 15 minutes.

>$ sudo -k


#Chown

**Définition**

- Chown = change the owner,il change le propriétaire d'un fichier ou d'un dossier.

**Utilisation**

>$ chown nouveau_propriétaire nom_du_fichier

les options disponibles

- -R : opère le changement sur tous les fichiers et sousdossiers du dossier choisi de manière récursive
- -v : décrit les changements de propriétaire
- -version : donne le numéro de la version de chown
- c, --changes : ne décrit que les fichiers dont le propriétaire est modifié

**Exemple**

chown Lancelot /home/dossier-important : fait de l'utilisateur "Lancelot" le nouveau propriétaire du dossier "dossier-important".


#Chmod

**Définition**

Chmod= Change mode,il change les permissions d'accès d'un fichier ou d'un repertoire. 

**Utilisation**

 prerequis
- Passer en mode superutilisateur
- Être le propriétaire du fichier en question

> $ chmod options modes fichiers

**Options**

- -v, --recursive : afficher la liste de tous les fichiers en cours de modification
- -help : affiche l'aide de la commande chmod
- -version : affiche les informations sur la version de chmod
- -R, --recursive: change les modes de tous les fichiers dans les sous-répertoires de manière récursive

**Modes**

Les modes définisent les utilisateurs qui vont bénéficier des permissions

**Les utilisateurs**

Les raccourcis utilisateurs :

- u pour user (propriétaire)
- g pour group (groupe)
- o pour others (les autres)
- a pour all (tous)

**Les permissions**

Manière 1:

- Avec des lettres: ont utilise les opérateur +,- et = pour ajouter, supprimer ou écraser des permissions.

Manière 2:

- Les nombres : un chiffre par type d'utilisateur : u g o .
Ainsi, la permission 720 donne l'ensemble des droits au propriétaire d'un fichier, des droits d'écriture aux menbres du groupe et aucun droit aux autres utilisateurs.

Elles se donnent avec :

- r (4) : autorisation de lecture
- w (2) : autorisation d'écriture
- x (1) : autorisation d'exécution. Si l'autorisation d'exécution n'est pas accordée à un utilisateur, il ne pourra pas non plus accéder au contenu du répertoire.
- -=0

l'ensemble des combinaison possible:

- 0 : - - - (aucun droit)
- 1 : - - x (exécution)
- 2 : - w - (écriture)
- 3 : - w x (écriture et exécution)
- 4 : r - - (lecture seule)
- 5 : r - x (lecture et exécution)
- 6 : r w - (lecture et écriture)
- 7 : r w x (lecture, écriture et exécution)

avec méthode octale, la permission corespond à 750

  rwx        r-x        ---
 7(4+2+1)   5(4+0+1)   0(0+0+0)

> chmod 750 monfichier
 

- passer en recusirve 

> chmod -R 750 monrépertoire


**Gérer les paquets et mettre à jours le système**


**Mettre à jour la liste des paquets**

> $ sudo apt update

**Afficher les paquets pour lesquels une mise à jour est disponible**

 >$ sudo list --upgradable 

**Mettre à jour les paquets sans ajouter ou supprimer des paquets**

 >$ sudo apt upgrade

**Mettre à jour des paquets en supprimant des paquets si nécessaire pour en installer de nouvelles versions**

 >$ sudo apt full-upgrade

**Supprimer les paquets devenus obsolètes**

 >$ sudo apt autoremove

**Supprimer le cache des paquets qui ne peuvent plus être réléchargés**

>sudo apt autoclean 

**Géerer les processus et le multi-tâche**

l'exécution des programmes à executer en priorité, aide à repondre aux attente de l'utilisateur.

**La commande PS**

il donne l'information des processus actifs du système.

**La commande top** 

La commande top permet de lancer un gestionnaire de tâches qui liste en temps réel les processus et les ressources qui leurs sont consacrées.

**La commande kill**


elle permet de tuer un processus et de récupérer un PID  si on rajoute

(pidof firefox).


exemple 

> kill 1234 

cela tuera le processus du nom de pid "1234"


#les tags de git

liste les tag

>$ git tag 


tag léger


>$ git tag numéro_version


Tag annotés

>$ git tag -a numéro_version -m "message"


afficher un commit tagué

>$ git show numéro_version

**Faire des commits atomiques correctement commentés**

Les commits atomiques consistent en la ségmentation d'un travail en petites tâches. Utiliser l'approche des commits atomiques revient donc à faire régulièrement de petits commits.

**Faire des PR de taille humaine**

permet de meiux travailler en groupe 

Donne un gain de temps énorme


**Utiliser un framwork css**

le framwork est cheat code permmetant de simplifier le design web!

**Boostrap**

- Une mise en page basée sur une grill de 12 colonnes. Leur nombre est bien sûr configurable selon les besoins

- Une bibliothèque entièrement open source

- Un code tenant compte des problématiques de responsive design

- La garantie d'une compatibilité avec la majorité des navigateurs

- Une documentation très complète

**Materialize css**

autre framwork css:

- Un code répondant aux problèmatiques de responsive design

- Une compatibilité avec la majorité des navigateurs

- Un design dans le style du Material Design

**Connaitres les proprecesseur de code css**

il génére des fichier css, il améliore l'écriture des fichiers css.

IL s'active avant le traitement des fichier css par les navigateur web.

**scss**

permet d'acrire plus vite du css, sa structure se raproche d'un lenguage de code clasique. il est rétro copatible avec un fichier css en mettant en renommant le css en .scss!!

**Connaître les metiers web**

ESn

AGence web

**Es6+**


**Fonctions fléchées**

siimplifie un javascript return

> const javascript = (x) => {x + z }

**Destructuring**

il assigne des variables venant d'un objet ou d'un tableau.

>const myObject = { num1: 1, num2: 2 }

les deux manières possibles 

>// ES5
var num1 = myObject.num1;
var num2 = myObject.num2;

num1; // 1
num2; // 2

>// ES6
const { num1, num2 } = myObject;

num1; // 1
num2; // 2


**Spread operator**


il développe un objet itérable(comme un array),lorqu'on à besoin de plusieurs arguments.

> const myArray = [1991, 8, 1]
new Date(...myArray) // object Date - équivaut à: new Date(1991, 8, 1)

const myString = "foo bar"
// les objets String étant itérables
[...myString] // ["f", "o", "o", " ", "b", "a", "r"]


il se dénotte de rest en pouvant se mélanger aux autres arguments d'une fonction


**Concaténer plusieurs itérables**



> const stronglyTyped = ["scala", "haskell"]

// ES5
["go", "rust"].concat(stronglyTyped) // ["go", "rust", "scala", "haskell"]

// ES6 / ES2015
["go", "rust", ...stronglyTyped] // ["go", "rust", "scala", "haskell"]

**Rest parameters**

représente un nombre indéfini d'arguments sous forme d'un tableau.

> function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10


##Maîtrise de la fonction##

**Fonction anonyme**

Une fonction anonyme, permise dans certains langages de programmation, est une fonction n'ayant pas de nom. Parce que ces fonctions n'ont pas de nom, à l'endroit où l'on voudrait mettre leur nom, on trouve directement les instructions définissant la fonction introduites par une syntaxe particulière.


**Callback**


callback=Une fonction de rappel: est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action.


> function salutation(name) {
  alert('Bonjour ' + name);
}

function processUserInput(callback) {
  var name = prompt('Entrez votre nom.');
  callback(name);
}

processUserInput(salutation);

**Closure**

Une fermeture est la paire formée d'une fonction et des références à son état environnant (l'environnement lexical). En d'autres termes, une fermeture donne accès à la portée d'une fonction externe à partir d'une fonction interne (on dit aussi que la fonction « capture son environnement »). En JavaScript, une fermeture est créée chaque fois qu'une fonction est créée.


> function ajouteur(nombre) {
    function ajoute(valeur) {
        return valeur + nombre;
    }

    return ajoute;
}

var ajoute10 = ajouteur(10);
ajoute10(1); // renvoie 11

// ES6

let ajouteur =  nombre => valeur => valeur + nombre

let ajoute10 = ajouteur(10);
ajoute10(1); // renvoie 11


**ESLint avec un StyleGuide**


ESLint est un outil qui analyse du code pour y corriger les potentielles erreurs ou pour en améliorer la lisibilité.

ESLint va donc comparer le code qu'on lui soumet à un ensemble de règles qui lui ont été données.










**Définition**

**Utilisation**

les cignes sont sur la mer du Nord 
























