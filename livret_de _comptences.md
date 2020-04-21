# Livret de compétences - Reste des compétences à valider

## Sommaire

* [Unix](#unix)
* [Git](#git)
* [Intégration](#intégration)
* [JavaScript](#javascript)
* [React](#react)
---
### Unix

**Sudo** : permet d'exécuter des commandes qui nécessite des droits de super administrateur comme gérer des droits ou installer un programme.

**Chmod** : Permet de gérer les types d'utilisateurs et les types de droits.

Types d'utilisateurs :
* Le propriétaire du fichier (user)
* Le groupe du propriétaire du fichier (group)
* Les autres utilisateurs, ou encore le reste du monde (others)

Types de droits :

* r : droit de lecture (read)
* w : droit d'écriture (write)
* x : droit d'exécution (eXecute)

Le 1er symbole est soit un "-" soit un "l" soit un "d", ils indiquent s'il s'agit :

* d'un fichier (-)
* d'un lien (l)
* ou d'un dossier (d).

Ensuite suivent les trois groupes des trois symboles des permissions (rwx-). Par exemple :
| Commande bash | Numéro du groupe |
| :---------- | :----------------------------------------------------------: |
| -rw-r--r-- | signifie que c'est un fichier dont les droits sont définis 644 |
| drwx------ | signifie que c'est un dossier dont les droits sont définis en 700 |
| lrwxrwxrwx | signifie que c'est un lien dont les droits sont définis en 777 |

**Chown** : Permet de modifier le propriétaire d'un fichier.
```
sudo chown -R baptiste /chemin/vers/dossier
```
```
sudo chown -R 755 /chemin/vers/dossier
```

**ps** : retourne un bref apperçu des processus en cours sur la machine ainsi que le consommation de ressources.

```
ps aux
```
* a : Affiche les processus de tous les utilisateurs
* u : Affiche le propriétaire de chaque processus
* x : Affiche les processus non attachés à un terminal

Il est possible de filtrer pour avoir un rendu plus clair via l'exemple suivant :
```
ps aux | grep eclipse
```

**top** : similaire à **ps** mais en temps réel, avec possibilité de préciser un délais de raffraichissement.
```
top -d 10 <!--- délais de 10 seconde --->
```

**kill** : Cette commande permet de mettre fin à un processus au moyen du Process ID ou PID. Pour se faire on lance d'abord la commande `ps aux`, on releve le PID, puis on exécute la commande suivante :
```
kill XXXX <--- ou XXXX vaut le PID --->
```

---

### Git

**Fait dans le cadre du projet 2 via le CR et toi Pierre**

---

### Intégration

**ESN** : **E**ntreprise de **S**ervices du **N**umérique qui loue les compétences de ses développeur à des prestataires externes dans le but de :
* leur créer un site web ou un logiciel
* Faire une étude et conseiller en matière de système informatique
* mise en application technique d'un projet du client
* gestion d'un parc informatique ou de réseau Télécom, etc
* contrôler la qualité d'un logiciel, réseau, système, etc

Au delà de ça les **ESN** peuvent être ammenée à former des employés du client et leur apporter une assistance dans leurs projets.

**Agence Web** : Gère la création des sites internet jusqu'à la mise en place de prestations pour des opérations de communication en ligne (infographie, pub, web marketing, community management, référencement... etc) pour le compte de ses clients.

**Freelance** : Développeur à son compte avec le statut d'autoentrepreneur dans la grande majorité des cas.

---

### JavaScript

**Fonctions fléchées** :
```javascript
// écriture basique
(param1, param2) => { /* bloc */ }

// Parenthèses non nécessaires si un seul argument
param1 => { /* bloc */ }

// Si aucun paramètres, parenthèses vides
() => { /* bloc */ }

// “return” implicite si une seule ligne d’instruction
(a, b) => a + b;
// équivalent à
(a, b) => { return a + b }

// retourner un objet avec un return implicite :
() => ({prop1: "value1", prop2: "value2"})
```

**Décomposition** :
Sert à accéder à tous les éléments d'un tableau mentionnés dans une seule constante
```javascript
const [premier, deuxième, troisième] = unTableau;
```

**Spread Operator** :
Sert à éclater un tableau (ou tout autre itérable) en une liste finie de valeurs.
```javascript
let fruits = ['pomme', 'poire', 'abricot']
let legumes = ['salade', 'asperge']

// je veux obtenir ['automne', 'hiver', 'pomme', 'poire', 'abricot', 'voiture', 'salade', 'asperge']

let mots = ['automne', 'hiver', ...fruits, 'voiture', ...legumes]
```

**Rest parameter** :
Permet de stocker une liste indéfinies de valeurs sous forme de tableau. Il récupère le reste en paramètre d'une fonction.
```javascript
const [a, b, ...c] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(c); // [30, 40, 50]
```
```javascript
function logArgs(...args) {
   console.log(args)
}

logArgs('coucou', 3, 'Bob') // args == ['coucou', 3, 'Bob']
```

---

### React
