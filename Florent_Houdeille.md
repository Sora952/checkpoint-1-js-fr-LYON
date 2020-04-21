# Compétences à acquérir

## UNIX

### 1. Connaitre l'architecture des dossiers du système Linux

On commence par la racine (ayant pour raccourcis : **/**). Ensuite vient les dossiers enfants : 
- home
- usr
- root
- tmp

S'en suit tout un arbre accessible en faisant ``` tree ``` dans le terminal Linux.
Pour se déplacer d'un répertoire vers un autre, il faut utiliser cette commande :
``` cd Directory``` Directory étant le chemin d'accès au répertoire voulu.
Il existe un raccourcis pour se rendre dans le répertoire "user" :
```
~
```

Pour consulter le contenu d'un répertoire, il faut utiliser cette commande :
``` 
ls 
```

Pour afficher le répertoire courant, il faut utiliser cette commande :
```
pwd 
```

### 2. Savoir gérer les droits (sudo, chown, chmod)
**Sudo:**
Commande de super utilisateur pour les OS sous UNIX. Permet d'exécuter des commandes en tant qu'administrateur de la machine.
Exemple:
```
sudo mkdir Fichier
```
_Permet de supprimer un fichier vide_

**Chown:**
Cette commande permet de changer les autorisations d'un utilisateur et/ou d'un groupe d'utilisateur sur un fichier ou un dossier. 
Exemples:
```
chown USER FILE
```
_Permet de changer les droits de USER sur le fichier FILE._

**Chmod:**

Cette commande UNIX permet de modifier les permissions de lecture, d'écriture et d'exécution des utilisateurs, des groupes d'utilisateurs et du public sur un fichier ou un répertoire.
- Pour voir les permissions de tous les fichiers et répertoires d'un dossier, il faut d'abord se rendre dans le dossier en question à l'aide de ``` cd ```. Pour voir le contenu de se dossier on peut faire simplement ``` ls ``` mais si on souhaite voir plus de détails, il faut faire ``` ls -la ```.
- Des caractères s'affichent sur le côté de cette façon :
	- -rwx------ ce groupe correspond au propriétaire,
	-  ----rwx--- ce groupe correspond à un groupe d'utilisateur,
	- -------rwx ce groupe correspond au public (autres utilisateurs)
    	- r = read (lire)
    	- w = write (écrire)
    	- x = execute (executer)
- Ensuite, on va pouvoir changer les permissions avec par exemple les commandes suivantes:
  - (+) : Ajoute une permission
  - (-) : Enlève une permission
  - = : Autorise uniquement l'autorisation indiquée
  - r : Lecture ; Valeur octale 4
  - w : Écriture ; Valeur octale 2
  - x : Exécution ; Valeur octale 1
  - s : Utilise les droits du propriétaire ou du groupe lors de l'exécution
  - u : Propriétaire du fichier
  - g : Groupe propriétaire du fichier
  - o : Tous les autres utilisateurs
  
Les options les plus fréquentes:
  - -R : Récursif, modifie les autorisations d'un répertoire et tout ce qu'il contient
  - -c : Ne montrer que les fichiers ayant été réellement modifiés
  - -f : Ne pas afficher les messages d'erreur

**apt :**

Cette commande du terminal git permet d'installer des paquets. C'est à dire d'installer des logiciels depuis le terminal git. 

Cet acronyme signifie _Advance Package Tool_.

L'utilisation basique de cette commande permet de mettre à jour le système en faisant :
```
sudo apt update
```

Une autre utilisation consiste à installer des logiciels externes en faisant cette commande :
```
sudo apt install <package_name>
```

--------------------------------------

## GIT

### 1. Faire relire mon code à mon équipe avec une pull request (PR) :

Les PR permettent de signaler aux autres personnes travaillant sur le projet les changements effectués sur la branche en question. Grâce à la PR, on peut examiner le code avec l'équipe concernée et valider le code avant de fusionner sur la branche de base.

### 2. Faire des merges réguliers et gérer les conflits :

#### a) Gestion des conflits 

Les conflits de fusion se produisent lorsqu'on fusionne des branches qui ont des validations concurrentes. Git a besoin de l'aide des développeurs ayant travaillé sur la branche pour décider des modifications à intégrer dans la fusion finale. La gestion se fait directement depuis l'IDE 

#### b) Intéret des merge réguliers

Il faut faire des merges réguliers afin d'éviter d'avoir à apporter trop de modifications d'un coup et ainsi, faciliter la gestion des conflits.

### 3. Savoir utiliser les tags de Git

////////////////////////////////////////////////////////////////
|ouaf | miam |
| :--------- | -------------: |
| miam | wouf |
| sqdqs | sqdq |

### 4. Faire des commits atomiques correctement commentés et des PR de taille humaine

Le principe des commits atomiques est de commit son code dès qu'il n'y a plus d'erreur une fois qu'on a ajouté une fonction, ou un bout de code. De cette façon, si on est confronté à une erreur, on peut facilement remonté à partir de quel bout de code ça nous pose problème.
Il faut veiller à bien commenter nos commits afin de comprendre ce qui a été ajouté comme code.

-----------------------

## Intégration

### 1. Structurer une page HTML5 

Pour structurer une page avec cette sémantique, HTML fournit des balises dédiées :

| Balises | sémantique |
| :-----: | :--------: |
| ```<header>``` | en-tête |
| ```<nav>``` | barre de navigation |
| ```<main>``` | contenu principal |
| ```<article>``` | élément contenu dans ```<main>``` |
| ```<section>``` | élément contenu dans ```<main>``` |
| ```<div>``` | élément contenu dans ```<main>``` |
| ```<aside>``` | barre latérale |
| ```<footer>``` | pied de page |

### 2. Utiliser un framework CSS (Bootstrap, MaterializeCSS, ...)

Un framework CSS permet d'implanter des snippets (bout de code) pour un meilleur rendu et un gain de temps au niveau du code. Ainsi, en suivant les instructions de ces framework, on peut insérer des composants dans notre page internet permettant d'ajouter des fonctionnalités.

### 3. Respecter les bonnes pratiques SEO

l'acronyme SEO veut dire **S**earch **E**ngine **O**ptimization. Ce sont des bonnes pratiques permettant de rendre plus visible notre site internet dans un outil de recherche comme Google. 
Voici quelques exemples de bonnes pratiques SEO :

1) Vérifier que toutes les pages aient une balise META ```<title>``` qui ne dépasse pas 65 caractères.

2) Rédiger des balises META ```<description>``` entre 70 et 320 caractères qui donnent envie aux internautes de cliquer.

3) Utiliser des images dans les contenus, en prenant soin de renseigner les balises ```<alt>``` et ```<title>``` de vos visuels.

4) Prendre soins de garder la taille des images la plus légère possible pour ne pas impacter défavorablement le temps de chargement.

5) Structurer le contenu avec des titres h1 – h6.

### 4. Connaître les différents métiers du developpement web (ESN, agence web, freelance...)

1) ESN

C'est une Entreprise de Service du Numérique. Le principe est de réaliser une prestation directement auprès d'un client. C'est un métier avec beaucoup de déplacement sur des missions plus ou moins longue.

2) Agence Web

C'est une entreprise spécialisée dans les différentes formes de communication et de promotion sur le web.

3) Freelance

C'est un développeur travaillant pour son propre compte.

---------------------------------------------

## Javascript

### 1. ES6+ (fléchées, destructuring, spread operator, rest parameters...)

Voici une liste des nouvelles fonctionnalitées implémantées par ES6+ :

1) Rest Parameters ou destructuring ou spread operator

Cette expression Javascript permet d'extraire des données d'un tableau ou d'un objet. 
Il s'exprime comme ceci : ```...``` 

_Exemple_ : 
```javascript
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
```

2) Fonctions fléchées

Si une fonction ne comporte qu'une instruction de retour, on peut ommettre les accolades et le mot-clé _return_.

_Exemple_ :

```javascript
const add = (a, b) => a + b;
const result = add(4, 6);
```
3) Classes

Avant ES6, les class apparaissaient sous la forme de fonction.
Maintenant, la class est bien définie et est plus concise dans le code.

4) Compilateurs

On peut utiliser ES6 même si des navigateurs sont incapable de le décoder grâce à des compilateurs qui vont traduire les nouvelles normes pour que tous les navigateurs puissent supporter ES6+.

5) Les template string

```
const myString = "Bonjour";
```

Avant ES6+ :
```
const nextString = myString + " " + "comment ça va ?";
```

Avec ES6+ :
```
const nextString = `${myString} comment ça va ?`;
```



### 2. Maitrise de la fonction (fonction anonyme, fonctions fléchée, callback et closure)

1) Fonction anonyme 

On peut écrire une fonction sans lui donner de nom. Cette fonction sera dite _anonyme_.
On l'utilise souvent quand on doit passer une fonction en paramètre d'une autre fonction.

2) Fonction fléchée

Voir plus haut.

3) callback

Une fonction de rappel (aussi appelée callback en anglais) est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action.

_Exemple_ :

```javascript
function salutation(name) {
  alert('Bonjour ' + name);
}

function processUserInput(callback) {
  var name = prompt('Entrez votre nom.');
  callback(name);
}

processUserInput(salutation);
```

4) closure

Les closure font références au scope d'une fonction. Un scope est le bloc entre les {} de la fonction. Une variable assignée dans un scope ne pourra pas être utilisée à l'extèrieur de celle-ci. ???????????????????????

### 3. Maîtrise des événements utilisateurs VanillaJS

La méthode ```.addEventListener``` sert à appeler une fonction lorsqu'un utilisateur l'active.

_Exemple_ :

```html
<!DOCTYPE html>
<html>
<body>

<p>This example uses the addEventListener() method to attach a click event to a button.</p>

<button id="myBtn">Try it</button>

<p><strong>Note:</strong> The addEventListener() method is not supported in Internet Explorer 8 and earlier versions.</p>

<p id="demo"></p>
<script>
document.getElementById("myBtn").addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});
</script>

</body>
</html>
```
_En cliquant sur le bouton "Try it" ça ajoute la chaîne de caractère "Hello World" dans le HTML._

4) Maîtrise du DOM

Le DOM (Document Object Model) permet de changer le contenu d'un élément HTML.

_Exemple_ :

```javascript
document.body.innerHTML = '<h1>Oops ! I broke it all !</h1>';
//remplace le contenu du body avec le notre

document.body.style.color = 'red';
document.body.style.fontSize = '60px';
//applique un style sur le body.
```

On peut aussi récupérer une balise en passant par son id.

```document.getElementById()``` permet de récupérer un élément via son id.

_Exemple_ :

```html
<body>
	<p id="first">First paragraph.</p>
	<p id="seconde">Second paragraph.</p>
	<p id="third">Third paragraph.</p>
</body>
```
```javascript
const secondElem = document.getElementById("second");
//récupère le paragraphe avec l'id "second"

secondElem.innerHTML = '<em>Something</em> happened here !';
secondElem.style.fontWeight = 'bold';
//On peut, du coup, altérer son contenu et son style.
```

On peut aussi récupérer plusieurs éléments en un seul appel :

- par leur nom de balise ```document.getElementsByTagName()```
- par leur class avec ```document.getElementsByClassName()```

Il en ressort un tableau que l'on peut parcourir avec une boucle.

### 4. Orienté Objet en ES6(Classe, Inheritance, Interface, Staticité)

Une POO est un ensempble d'attributs et de méthodes situé dans une classe. 

1) Déclarer une classe

```javascript
class Person {
	constructor(lastName, firstName) {
		this.lastName = lastName;
		this.firstName = firstName;
	}
	sayHello() {
		console.log(`My Name is &{this.firstName}`);
	}
}
```

2) Instancier un objet :

A partir d'une classe, on va pouvoir créer un objet. On parle alors de créer une instance de cette classe.
Cette instance va alors avoir des données spécifiques relatifs aux attributs de la classe instanciée.
On va, alors, pour manipuler les données de cette instance, appeler des méthodes, etc...

```javascript
const john = new Person ('John', 'Smith');
john.sayHello();
```

Le mot clé **THIS** sert à nous référencer à l'instance courante.

3) Notion d'héritage :

- Permet de créer une nouvelle classe à partir d'une classe existante.
- Contient tous les attributs et les méthodes de la classe parente.
- Peut définir de nouveaux attributs / de nouvelles méthodes.
- Peut surcharger des méthodes existantes.

4) ESLint

C'est un outil qui analyse statiquement du code et vérifie que celui-ci respecte un certain nombre de règles afin de faire en sorte que notre code soit le plus propre possible et ne comporte pas d'erreur.

---------------------------

## REACT

### 1. Utiliser JSX

Le JSX est une syntaxe nous permettant de mélanger du javascript et du XML dans le même code.
Il y a quelques différences à noter avec le HTML :

- les noms des balises changent si elles ressemblent au nom des méthodes de javascript. _Exemple :_ class devient className.

On peut créer des balises (composants) dans un fichier externe au fichier App.jsx et l'appeler depuis App.jsx en l'exportant depuis le fichier d'origine et en l'important dans App.jsx.

Grâce au JSX, on peut insérer des balises HTML au sein du js.

### 2. Savoir implanter un routing

Le routing permet de simuler un changement de page sur l'appli internet. 

```javascript
class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/page1' component={page1} />
            <Route path='/page2' component={page2} />
          </Switch>
        </Router>
      </div>
    );
  }
}
```
Le _exact_ sert à éviter que le chemin confonde avec un autre chemin.

### 3. Communiquer entre les Composants (props, event emits ...)

1) Les Props

Les props servent à modifier dynamiquement, lors de l'appel du composant, les différentes clés du composant. Ainsi, en ayant créé une fois le composant, on peut l'appeler autant de fois que nécessaire en modifiant les valeurs des clés manuellement.

2) event

Les event permettent à l'utilisateur d'intéragir avec le site. 

- On peut gérer un click avec ```onClick```.
- On peut utiliser l’attribut ```onChange``` afin de lier un évènement à une fonction du composant qui a la charge de mettre à jour l’état par la méthode setState.
- On peut utiliser l'attribut ```onSubmit``` afin de soumettre ce qui a été mis dans un input.
- On peut utiliser l'attribut ```onMouseEnter``` afin de lier un évènement de souris passant sur un lien (sans cliquer) à une fonction du composant qui a la charge de mettre à jour l’état par la méthode setState.
- On peut utiliser l'attribut ```onMouseLeave``` afin de lier un évènement de souris sortant d'un lien (sans cliquer) à une fonction du composant qui a la charge de mettre à jour l’état par la méthode setState.

### 4. Utiliser l'affichage conditionnel en JSX

On peut faire un affichage conditionnel via un opérateur ternaire :
valeur à vérifier ? Validation : Annulation.

On peut aussi utiliser les if, if...else, if...else if, etc...

### 5. Afficher une liste de composants avec map

map permet de filtrer un tableau ou un objet et d'en lister les composants si on les sort dans une liste à puce via ```<li>```