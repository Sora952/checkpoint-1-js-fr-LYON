# Compétences - En cours d’acquisition

<h1 style="color: #00874b" >UNIX</h1>

<h2 style="color: #005C89" >1. Savoir gérer les droits (sudo, chown, chmod)</h2>

**-Sudo :** (abréviation de substitute user do) est une commande informatique utilisée principalement dans les systèmes d'exploitation de type Unix.

Cette commande permet à un administrateur système d'accorder à certains utilisateurs (ou groupes d'utilisateurs) la possibilité de lancer une commande en tant qu'administrateur.

L'utilitaire sudo s'utilise en ligne de commande, dans un terminal. Il sert par exemple à exécuter, en mode superutilisateur, des commandes ou des applications en console. Il faut faire précéder chacune des commandes à exécuter en mode superutilisateur par la commande sudo, de la manière suivante :` sudo <commande>`

**-Chown :** (abréviation de change the owner) est un appel système et une commande UNIX nécessitant les droits de l'utilisateur racine pour changer le propriétaire d'un fichier ou d'un dossier.

Exemple pour modifier le propriétaire de tout le contenu d'un dossier : `chown -Rf utilisateur1 /home/dossier1`

**-Chmod :** (abréviation de change mode) est un appel système d'Unix ainsi que la commande correspondante qui permet de changer les permissions d'accès d'un fichier ou d'un répertoire.

Exemples pour donner au propriétaire les droits en écriture et en lecture au fichier mon_fichier : `chmod u+rw mon_fichier`

<h2 style="color: #005C89" >2. Savoir gérer les paquets et mettre à jour le système</h2>

-Pour maintenir à jour son système depuis un terminal, on peut utiliser la commande: `sudo apt update && sudo apt full-upgrade -y`

-Pour mettre à jour vos paquets, il vous faudra dans un premier temps, mettre à jour la liste des paquets disponibles. Cela se fait comme suit : `sudo apt-get update`

-Pour mettre à jour les paquets : `sudo apt-get upgrade`

-Pour rechercher des paquets : `apt-cache search PAQUET`

-Pour installer un paquet : `sudo apt-get install PAQUET`

-Faire un peu de ménage (désinstaller toutes les dépendances inutilisées) : `sudo apt-get autoremove`

-Désinstaller un paquet : `sudo apt-get remove PAQUET`

<h2 style="color: #005C89" >3. Gérer les processus et le multi-tâche (ps, top, kill ...)</h2>


**-Ps :** dans la majorité des systèmes Unix, la commande ps affiche les processus machines en cours d'exécution. 

Exemple :
```
~$ ps
  PID TTY          TIME CMD
 7431 pts/0    00:00:00 su
 7434 pts/0    00:00:00 bash
18585 pts/0    00:00:00 ps
```

**-Top :** est une commande Unix lançant un "gestionnaire des tâches", ce dernier affiche en temps réel la liste des processus et les ressources qu'ils utilisent. Les informations sont présentées en mode environnement en mode texte.

Exemple :
```
~$ top
top - 16:25:41 up 18 days, 18:51, 27 users,  load average: 0.33, 0.62, 0.47
Tasks: 338 total,   1 running, 332 sleeping,   5 stopped,   0 zombie
Cpu(s):  1.0%us,  0.7%sy,  0.0%ni, 97.9%id,  0.0%wa,  0.0%hi,  0.0%si,  0.3%st
Mem:   2051756k total,  1638272k used,   413484k free,   129108k buffers
Swap:  2097148k total,   428148k used,  1669000k free,   598568k cached

  PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND
23639 ganglia   20   0 79352 4448 1124 S  2.7  0.2 194:17.60 gmond
 8669 jackpott  20   0 12188 1308  824 R  0.7  0.1   0:00.28 top
 6137 petrb     20   0 58000 5044 1216 S  0.3  0.2   0:35.92 mosh-server
 8441 whym      20   0 66160  12m  996 S  0.3  0.6   4:32.70 mosh-server
 8966 liangent  20   0 57936 4512  904 S  0.3  0.2   9:56.52 mosh-server
15373 whym      20   0 66152  12m  900 S  0.3  0.6   9:38.18 mosh-server
    1 root      20   0 20228 1932 1028 S  0.0  0.1   1:20.34 init
    2 root      20   0     0    0    0 S  0.0  0.0   0:00.66 kthreadd
    3 root      20   0     0    0    0 S  0.0  0.0   4:46.56 ksoftirqd/0
    5 root      20   0     0    0    0 S  0.0  0.0   0:00.10 kworker/u:0
    6 root      RT   0     0    0    0 S  0.0  0.0   0:00.00 migration/0
    7 root      RT   0     0    0    0 S  0.0  0.0   0:08.78 watchdog/0
    8 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 cpuset
    9 root       0 -20     0    0    0 S  0.0  0.0   0:00.00 khelper
   10 root      20   0     0    0    0 S  0.0  0.0   0:00.00 kdevtmpfs
   ```

**-Kill :** en informatique, kill est une commande de certains systèmes d'exploitation utilisée pour demander l'arrêt d'un processus en cours d'exécution : `~$ kill [PID]`

<h1 style="color: #00874b" >Intégration</h1>

<h2 style="color: #005C89" >1. Connaître les différents métiers du developpement web (ESN, agence web, freelance...)</h2>

**-ESN :** (abréviation de entreprise de services du numérique, anciennement société de services en ingénierie informatique (anciennement SSII ou SS2I), est une société de services experte dans le domaine des nouvelles technologies et de l’informatique et a pour objectif principal d’accompagner une société cliente dans la réalisation d’un projet.

**-Agence web :** est une entreprise spécialisée dans les différentes formes de communication et de promotion sur le web. L'éventail des missions d’une agence web s'est considérablement élargi au cours des années : à la création de sites web se sont ajoutées les prestations en matière de communication en ligne, d'infographie, de gestion publicitaire en ligne, de web marketing, de community management, de réputation web, de référencement et de déploiement sur des applications mobiles notamment.

**-Freelance :** c'st un travailleur indépendant est à la fois entrepreneur, propriétaire et son propre employé (sans être pour autant salarié). Il est maître de ses décisions concernant son travail mais doit toutefois s'adapter aux demandes de sa clientèle.

<h1 style="color: #00874b" >Javascript</h1>


<h2 style="color: #005C89" >1. ES6+ (fléchées, destructuring, spread operator, rest parameters...)</h2>

**-Fonctions fléchée :** permet d’avoir une syntaxe plus courte que les expressions de fonction et sont souvent anonymes.

Exemple :
```
const names = ['Céline', 'Aurélie', 'Perrin', 'Alain'];

console.log(names.map(name => name.length)); // [6, 7, 6, 5]
```

**-Destructuring :** est une expression JavaScript qui permet d'extraire des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.

Exemple :
```
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20
```

**-Spread operator :** permet d'étendre un itérable en lieu et place de plusieurs arguments ou de plusieurs éléments ou de paires clés-valeurs.

Exemple :
```
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6
```

**-Rest parameters :** cette syntaxe permet de représenter un nombre indéfini d'arguments sous forme d'un tableau.

Exemple :
```
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3)); // 6

console.log(sum(1, 2, 3, 4)); // 10
```

<h2 style="color: #005C89" >2. Maitrise de la fonction (fonction anonyme, fonctions fléchée, callback et closure)</h2>

**-Fonction anonyme :** lorsqu'une fonction est définie sans nom, il s'agit d'une fonction anonyme.
```
function() {
    // ...
}
```
**-Fonctions fléchée :** permet d’avoir une syntaxe plus courte que les expressions de fonction et sont souvent anonymes.

Exemple :
```
const names = ['Céline', 'Aurélie', 'Perrin', 'Alain'];

console.log(names.map(name => name.length)); // [6, 7, 6, 5]
```

**-Callback :** est une fonction de rappel est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action.

Exemple :
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

**-Closure :** une fermeture est la paire formée d'une fonction et des références à son état environnant. En d'autres termes, une fermeture donne accès à la portée d'une fonction externe à partir d'une fonction interne. En JavaScript, une fermeture est créée chaque fois qu'une fonction est créée.

Exemple :
```
function compteur() {
    let count = 0;
  
    return function() {
        return count++;
    };
}

let plusUn = compteur();
```

<h2 style="color: #005C89" >3. Orienté Objet en ES6(Classe, Inheritance, Interface, Staticité)</h2>

**-Classe :** les classes JavaScript fournit une syntaxe plus simple pour créer des objets et manipuler l'héritage.

Exemple :
```
class Rectangle {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
}
```

**-Inheritance :**
Exemple :
```
classe Vehicle { 
 
  constructeur (nom, type) { 
    this.name = nom; 
    this.type = type; 
  } 
 
  getName () { 
    renvoie this.name; 
  } 
 
  getType () { 
    renvoie this.type; 
  } 
 
} 
classe Car étend Vehicle { 
 
  constructeur (nom) { 
    super (nom, 'voiture'); 
  } 
 
  getName () { 
    return 'C'est une voiture:' + super .getName (); 
  } 
 
} 
let car = new Car ('Tesla'); 
console.log (car.getName ()); // C'est une voiture: Tesla 
console.log (car.getType ()); // voiture
```

**-Instance :** une instance est un objet qui contient les noms de propriété et les méthodes d'une classe, mais avec des valeurs de propriété uniques.

Exemple :
```
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}

const halley = new Dog('Halley');
console.log(halley.name); // 'Halley'
```

**-Static :** le mot-clé static permet de définir une méthode statique d'une classe.

Exemple :
```
class ClassWithStaticMethod {
  static staticMethod() {
    return 'static method has been called.';
  }
}

console.log(ClassWithStaticMethod.staticMethod()); // "static method has been called."
```

<h1 style="color: #00874b" >React</h1>

<h2 style="color: #005C89" >1. Consommer une API</h2>

```
  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
```

<h2 style="color: #005C89" >2. Utiliser un débogueur (chrome react tool)</h2>

React Developer Tools c'est une extension de Chrome Developer Tools qui vous permet d'obtenir un nouvel onglet intitulé «React» dans vos Chrome DevTools. Cet onglet vous présente une liste des composants React racine rendus sur la page ainsi que les sous-composants rendus par chaque racine.

<h2 style="color: #005C89" >3. Savoir implémenter un routing</h2>

```
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
```