# Gérer les droits

## Sudo

### Définition

Sudo correspond à l'abréviation de **S**ubstitute **U**ser **Do**.
La commande Sudo permet de lancer une commande en tant qu'administrateur.

### Utilisation 

Pour éxécuter une commande en mode superutilisateur, il suffit de préciser avant le nom de la commande l'expression sudo comme ceci

```shell
$ sudo <commande>
```

Un mot de passe est demandé et la commande ne sera executé qu'une fois qu'il aura été renseigné. Ce dernier n'est mémorisé que pour une durée de 15 minutes et il faudra le donner à nouveau au delà de cette durée.

Pour mettre fin à une session sudo avant la fin des 15 minutes, il faut taper la commande suivante :

```shell
$ sudo -k
```

## Chown

### Définition

La commande chown correspond à l'abréviation de **ch**ange the **own**er et permet de changer le propriétaire d'un fichier ou d'un dossier.

### Utilisation

La commande chown prend la syntaxe suivante :

```chown nouveau_propriétaire nom_du_fichier```

Elle peut prendre plusieurs options dont les suivantes : 

* ```-R``` : opère le changement sur tous les fichiers et sous-dossiers du dossier choisi de manière récursive
* ```-v``` : décrit les changements de propriétaire
* ```--version``` : donne le numéro de la version de chown
* ```-c, --changes``` : ne décrit que les fichiers dont le propriétaire est modifié

### Exemple

```chown geoffroy /home/dossier-important``` : fait de l'utilisateur "geoffroy" le nouveau propriétaire du dossier "dossier-important".

## Chmod

### Définition

La commande **chmod** correspond à l'abréviation de **ch**ange **mod**e et permet de changer les permissions d'accès d'un fichier ou d'un répertoire.

### Utilisation

Pour faire appel à la commande chmod, il faut : 

* Passer en mode superutilisateur
* Être le propriétaire du fichier en question

La structure de la commande chmod est la suivante : 

```shell
$ chmod options modes fichiers
```

### Options

La commande chmod possède plusieurs options. Les plus courantes sont les suivantes : 

* ```-v, --recursive``` : afficher la liste de tous les fichiers en cours de modification
* ```--help``` : affiche l'aide de la commande chmod
* ```--version``` : affiche les informations sur la version de chmod
* ```-R, --recursive```: change les modes de tous les fichiers dans les sous-répertoires de manière récursive

### Modes

Les modes servent à définir les utilisateurs auxquels les permissions vont s'appliquer ainsi que les dites permissions.

#### Les utilisateurs

Les utilisateurs sont précisés de la manière suivante : 

* u pour user (propriétaire)
* g pour group (groupe)
* o pour others (les autres)
* a pour all (tous)

#### Les permissions

Les permissions peuvent être accordées de deux manières : 

* Avec des lettres : on peut utiliser les opérateurs ```+```, ```-``` et ```=``` pour ajouter, supprimer ou écraser des permissions.
* Avec des nombres : on précise un chiffre par type d'utilisateur dans l'ordre suivant : ```u g o```. Ainsi, la permission 720 donne l'ensemble des droits au propriétaire d'un fichier, des droits d'écriture aux membres du groupe et aucun droit aux autres utilisateurs.

Elles se donnent de la manière suivantes : 

* ```r``` (4) : autorisation de lecture
* ```w``` (2) : autorisation d'écriture
* ```x``` (1) : autorisation d'exécution. Si l'autorisation d'exécution n'est pas accordée à un utilisateur, il ne pourra pas non plus accéder au contenu du répertoire.

#### Exemple

* ```chmod -R a+rw dossier``` : donne à tous les utilisateurs des autorisations de lecture et d'écriture au dossier choisi ainsi qu'à tous les fichiers et dossiers qu'il contient.
* ```chmod 755 fichier``` : donne au propriétaire du fichier tous les droits (4 + 2 + 1 = 7), aux membres du groupe et aux autres utilisateurs les droits de lecture et d'accès au fichier (4 + 1 = 5).

# Gérer les paquets et mettre à jour le système

## Mettre à jour la liste des paquets

```shell
 $ sudo apt update
 ```

## Afficher les paquets pour lesquels une mise à jour est disponible

```shell
 $ sudo list --upgradable 
 ```

## Mettre à jour les paquets sans ajouter ou supprimer des paquets

```shell
 $ sudo apt upgrade
 ```

## Mettre à jour des paquets en supprimant des paquets si nécessaire pour en installer de nouvelles versions

```shell
 $ sudo apt full-upgrade
 ```

## Supprimer les paquets devenus obsolètes

```shell
 $ sudo apt autoremove
 ```

## Supprimer le cache des paquets qui ne peuvent plus être réléchargés

```shell 
sudo apt autoclean 
```

# Gérer les processus et le multi-tâche

Ont dit d'un système d'exploitation comme Unix qu'il est multi-tâche car plusieurs programmes semblent s'exécuter simultanément. 

En effet, étant donné qu'un seul processeur ne peut éxecuter qu'une instruction à la fois, il est dans les fait impossible de lui demander d'en éxecuter plusieurs en même temps. Si plusieurs programmes sont lancés en même temps, la machine leur accordera tour à tour les ressources nécessaires selon le principe du *time sharing* (partage du temps).

Un système devra donc définir les programmes à exécuter en priorité pour répondre correctement aux attentes de son utilisateur.

## La commande ```ps```

Cette commande permet d'obtenir des informations sur les processus actifs sur le système. 

Une fois l'affichage long activé grâce aux options, la commande ps donnera entre autre les renseignements suivants : 

* Date de lancement
* Taille du processus
* Ligne de commande
* Propriétaire
* Priorité

## La commande ```top```

La commande top permet de lancer un gestionnaire de tâches qui liste en temps réel les processus et les ressources qui leurs sont consacrées.

## La commande ```kill```

### Définition

Avant de s'intéresser à la commande Kill, il faut comprendre ce qu'est un signal. 

Un signal n'est autre qu'un message envoyé à un processus. Chaque signal correspond à un évènement particulier. Il peut s'agir par exemple de demander l'interruption d'un processus 

La commande ```kill``` a deux fonctions principales : 

* Obtenir la liste des signaux disponibles sur le système
* Envoyer un signal à un ou plusieurs processus

Par défaut, la commande kill envoi un signal demandant l'interruption d'un processus en cours d'exécution. 

### Utilisation 

La syntaxe la plus simple de la commande Kill est la suivante : 

```shell
 kill PID_du_processus
 ```

Chaque processus répond en effet à un identifiant PID qui lui correspond.

### Exemple

```shell
 kill 1234
 ```

Cet exemple va mettre fin à l'exécution du processus répondant au PID "1234".

# Savoir utiliser les tags de Git

Il est possible avec git d'attribuer un tag à un commit pour l'identifier plus facilement. Généralement, on leur donne un numéro de version. 

Pour lister les tags existant, on utilise la commande suivante : 

```shell
 $ git tag
 ```

Les tags affichés sont listés par ordre alphabétique. 

On distingue deux types de tags : 

1. Les tags légers
1. Les tags annotés

## Tags légers

Les tags légers ressemblent à une branche, à la différence de cette dernière qu'ils ne changeront jamais. Il permet simplement de nommer un commit en particulier.

Pour créer un tag léger, on utilise la commande suivante : 

```shell
 $ git tag numéro_version
 ```

## Tags annotés 

Les tags annotés sont stockés en tant qu'objet et peuvent donc contenir diverses informations comme le nom et l'adresse e-mail de son créateur, la date du commit en question ou un message en particulier.

Pour créer une étiquette annotées, on utilise la commande suivante :

```shell
 $ git tag -a numéro_version -m "message"
 ```

L'option -a sert à attribuer un numéro de version au tag. L'option -m permet quant à elle de préciser un message entre guillemet.

Pour afficher les données d'un commit tagué, on utilise la commande ```$ git show numéro_version```

# Faire des commits atomiques correctement commentés

Les commits atomiques consistent en la ségmentation d'un travail en petites tâches. Utiliser l'approche des commits atomiques revient donc à faire régulièrement de petits commits. 

## Avantages

En cas de bug, il est plus facile d'en déterminer la source si plusieurs petits commits ont été réalisés tout au long du projet, plutôt que de gros commits. Les commentaires ajoutés aux commits sont également indispensable pour comprendre précisément à quoi ils correspondent.

Faire des commits atomiques bien commentés permet donc de gérer plus simplement et plus rapidement les problèmes.

#  Faire des PR de taille humaine

Une Pull Request consiste à demander au détenteur d'un dépôt Git de prendre en compte les modifications apportées sur un fork. 

Faire des PR de taille humaine représente donc un gain de temps important du point de vue du détenteur du dépôt puisqu'il pourra plus rapidement vérifier et tester les modifications envoyées. 

# Utiliser un framwork CSS

Un framwork, en programmation, consiste en un ensemble de composants permettant de créer un logiciel. Un Framwork CSS pose donc un cadre quant au design d'une application web.

## Bootstrap

Bootstrap est probablement le plus connu des framworks CSS. Il propose : 

* Une mise en page basée sur une grill de 12 colonnes. Leur nombre est bien sûr configurable selon les besoins
* Une bibliothèque entièrement open source
* Un code tenant compte des problématiques de responsive design
* La garantie d'une compatibilité avec la majorité des navigateurs
* Une documentation très complète

## Materialize CSS

Materialize CSS est un autre framwork CSS proposant : 

* Un code répondant aux problèmatiques de responsive design
* Une compatibilité avec la majorité des navigateurs
* Un design dans le style du Material Design

## Connaître les préprocesseur de code CSS

Un préprocesseur CSS est un outil permettant de générer dynamiquement des fichiers CSS. Il vise donc à améliorer l'écriture des fichiers CSS. 

Il intervient, comme son nom l'indique, avant le traitement des fichiers CSS par les navigateurs web. Il existe plusieurs préprocesseur CSS comme SCSS, LESS, etc...

# SCSS

Le SCSS permet d'écrire plus rapidement du CSS et se rapproche davantage d'un langage de programmation. L'avantage du SCSS est qu'il est totalement compatible avec du CSS standard. Un fichier .css peut donc être renommé avec l'extension .scss et continuera de fonctionner normalement.

# Connaître les différents métiers du développement web

## ESN

Anciennement appelées SSII pour Société de Services en Ingénierie Informatique, les ESN (Entreprises de Services du Numériques) recrutent des consultants informatiques qu'elles envoient en mission directement chez leurs clients. Elle facture ensuite le travail de ses intervenant à la journée. 

Entre deux mission, on dit du consultant qu'il est en "intercontrat", période dont il profite généralement pour suivre des formations en attendant d'être envoyé sur une nouvelle mission.

## Agence Web

Contrairement aux ESN, les agences web gèrent en interne une partie ou l'intégralité d'un projet web. Elle est donc composé de nombreux profils (rédacteurs, community managers, graphistes, développeurs, responsable SEO etc...) qu'elle mettra au service des projets qu'elle doit réaliser pour ses clients. 

# ES6+

## Fonctions fléchées

Les fonctions fléchées ont été introduite dans ES6+ et permettent de réduire l'écriture des fonctions comprenant un ```javascript return```

Ainsi, les deux fonctions suivantes sont équivalentes : 

```javascript 
const ES5 = function(x, y) { return x + y; }
```

```javascript
 const ES6 = (x) => { x + y }
```

## Destructuring

Le destructuring consiste à assigner des variables provenant d'un objet ou d'un tableau.

Prenons l'objet suivante : 

```javascript
 const myObject = { num1: 1, num1: 2 }
 ```

Si en ES5, il fallait assigner les valeurs num1 et num2 à des variables pour les retourner, cela n'est plus nécessaire avec le destructuring.

```javascript 
// ES5
var num1 = myObject.num1;
var num2 = myObject.num2;

num1; // 1
num2; // 2
```

```javascript 
// ES6
const { num1, num2 } = myObject;

num1; // 1
num2; // 2
```

## Spread operator

Le Spread Operator permet de récupérer facilement chaque élément d'un tableau. 

Par exemple : 

```javascript 
let numbers1 = [1, 2, 3, 4];
let numbers2 = [5, 6, ,7, 8];

numbers1.push(...numbers2); // On ajoute chaque élément de l'array numbers2 à la suite de ceux de numbers1
console.log(numbers1); // On obtient donc [1, 2, 3 ,4, 5, 6, 7, 8] 
```

## Rest parameters

La syntaxe du rest parameters permet de représenter un nombre infini d'arguments sous forme d'un tableau.

On peut donc écrire : 

```javascript 
function addition(...arguments) {
	return arguments.reduce((previous, current) => {
		return previous + current;
	});
}

console.log(addition(1, 2, 3, 4)); // 1 + 2 + 3 + 4 = 10
```

# Maîtrise de la fonction

## Fonction anonyme

Une fonction anonyme est une fonction qui ne prend pas de nom. Cela est pratique dans certaines situations. On peut ainsi affecter une fonction à une variable ou en tant que paramètre d'une autre fonction. 

## Callback

Une fonction de retour (callback en anglais) est une fonction passée en paramètre dans une autre fonction. Elle est donc appelée par cette autre fonction. 

Exemple : 

```javascript
function sayHello(fonctionRetour) {
	fonctionRetour();
}

function hello() {
	alert('Hello');
}
sayHello(hello);
```

## Closure

Les closures en JS font référence à la portée des variables.

Lorsqu'une variable est définie à l'intérieur d'une fonction, cette première ne sera pas accessible en dehors de cette même fonction.

Cependant, lorsqu'une fonction retourne une autre fonction, les variables contenues dans celle-ci resteront accessibles. 

# ESLint avec un StyleGuide

ESLint est un outil qui analyse du code pour y corriger les potentielles erreurs ou pour en améliorer la lisibilité. 

ESLint va donc comparer le code qu'on lui soumet à un ensemble de règles qui lui ont été données.
