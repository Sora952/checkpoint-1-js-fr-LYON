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
Sert à éclater un tableau (ou tout autre itérable) en une liste finie de valeurs. Par exemple on récupère dans la variable `mots` la varible `fruits` qui sera éclatée afin que chaque éléments du tableau `fruits` soient ajoutés dans `mots` et non le tableau en lui même.
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

**props** :

Composants que j'ai créé avec des props pour mon projet 2 :

Le Bouton contenant le Link :
```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button (props) {
  return (
    <Link className='button-config' id={props.buttonId} to={props.link}>{props.linkName}</Link>
  );
}

export default Button;
```
La NavBar qui contient le bouton avec les props récupérés :
```javascript
import React from 'react';
import './Home.css';
import Button from './Button';

function NavBar () {
  return (
    <nav className='nav-home'>
      <div id='options-rules-container'>
        <li>
          <Button link='/options' linkName='Options' />
        </li>
        <li>
          <Button link='/rules' linkName='Rules' />
        </li>
      </div>
      <div id='play-container'>
        <li>
          <Button link='/deckchoice' linkName='Play' buttonId='play-button' />
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
```

**event :**

Ma modale avec son évènement onClick :

```javascript
const Modal = ({ onHandleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <h2>Are you sure of the composition of your deck ?</h2>
        <div className='modal-heroesChosen-container'>
          {children}
        </div>
        <div className='button-modal-container'>
          <button type='button' className='button-config' onClick={onHandleClose}>Close</button>
          <Button id='button-battle' link='/' linkName='Start' />
        </div>
      </section>
    </div>
  );
};
```

**Affichage conditionnel avec JSX**

Ici je reprend l'exemple du cours qui se suffit à lui même.
On déclare une option `style` dans le `button` dans laquelle on passe une propriété `fontWeight` avec un ternaire qui met le paramètre à `bold` si `active` se trouve en paramètre de l'élément ou le paramètre `normal` si elle ne s'y trouve pas (sur `ToggleButton`).

```javascript
const ToggleButton = ({ active }) => (
  <button
    style={{
      fontWeight: active ? "bold" : "normal"
    }}
  >
    Button
  </button>
);

const App = () => (
  <div>
    <ToggleButton active />
    <ToggleButton />
  </div>
);
```

Ici même principe sauf qu'on réfère une className qui va récupérer la propriété qui lui est associée dans le css au lieux de directement déclarer le style dans le `h2`. Si on passe `underline` à `title` alors il applique la `className` sinon il n'applique rien.

```javascript
const Title = ({ title, underline }) => (
  <h2 className={underline ? "with-border" : ""}>{title}</h2>
);

const App = () => (
  <div>
    <Title title="Without border" />
    <Title title="With border" underline />
  </div>
);

// CSS
.with-border {
  border-bottom: 2px solid #0288d1;
}
```