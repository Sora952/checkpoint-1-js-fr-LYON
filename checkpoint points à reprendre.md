# Notions en cours d'acquisition 

## SUDO CHOWN CHMOD
* **Savoir gérér les droits (sudo, chown, chmod)**

### SUDO (pour substiture user do

* Cette commande permet de prender à un administrateur d'accorder à un ou plusieurs (groupes) d'utilisateurs les droits pour lancer une commande.
* Ex : sudo apt-get update (mise à jour de la liste des paquets) /upgrade (télécharge et installe les paquets).

### CHOWN : (pour change owner): 

* Commande qui permet de modifier le propriétaire d'un fichier ou d’un dossier. 
* chown user1:users index.html => change le propriétaire en user et le groupe en users
* chown :users index.html => change le groupe en users

### CHMOD (pour change mod)

* Commande qui permet de modifier les permissions d’un fichier ou d’un dossier. 

* Exemple fichier public : 
* drwxr-xr-x  2 wilder wilder   4096 juil. 26  2019  Public
* d pour dossier, le trait - sépare les différents utilisateurs, administrateur système - groupe d'utilisateurs - autres, et les lettres r(read), w (write), x(execute) définisseent les droits accordés au fichier. 
* r (lire) – 4
* w (écrire) – 2
* x (exécuter) – 1
* chmod 777 index.html => donne tous les droits à l'ensemble des utilisateurs. 
* chmod 762 index.html => donne tous les droits à l'admin systeme / lecture et écriture pour le groupe d'utilisateurs / lecture pour autrui

### Utilisation de - R, récursif pour impacter les changements dans tous les sous-dossiers.

### ps top kill : 
* p : La commande ps retourne un "cliché" de vos processus en cours sur la machine, ainsi que les ressources consommées par ceux-ci. Vous pouvez la rendre plus détaillée :
a : Montre les processus de tout les utilisateurs
u : Montre le propriétaire de chaque processus
x : Montre les processus non attachés à un terminal

* top : Cette commande permet de donner les mêmes informations que ps mais en temps réel. On peut lui préciser le délai de rafraîchissement :
top -d 10, rafraîchira les informations toutes les 10 secondes.

* kill : Commande qui permet de terminer un processus manuellement, exemple : 
ps aux, relever le PID (Process ID), puis kill PID

---


## Connaitre les pré-processeur de code CSS (SCSS, ...)

### Qu’est-ce qu’un préprocesseur CSS ?
* Un préprocesseur CSS est un « programme » ou module sous Node.js  (pour Less et Sass) qui interprète votre code source pour générer un code standard du web : le CSS. Ce sont des générateurs dynamiques de CSS:
    * [Sass](preprocesseurs/sass.md) : Syntactically Awesome Style Sheets, Sass est un langage dynamique de génération de feuilles de style en cascade compilé en CSS. 
    * [Less](preprocesseurs/less.md) ; Leaner Style Sheets
    * [Compass](preprocesseurs/compass.md)
    * [Stylus](preprocesseurs/stylus.md)

Je n'ai pas eu le temps d'apprendre les bases d'un des prépocesseurs ci-dessus, cela se fera dans les prochaines semaines/mois car cela me demandera beaucoup de temps de pratique.

---

### Savoir implémenter un routing

#### Définition

* Routing ou routage, est le fait d'établir une correspondance entre le chemin(ou l'origine) d'une adresse url (/contact) et un composant à afficher(```<Contact /```).

#### Etapes pour implémenter un routing statique dans App par exemple :
	
* 1 Importer les composants nécessaires au routing avec le module react-dom-router: 

	```
	import {
	  BrowserRouter as Router,
	  Switch,
	  Route,
	  Link
	} from "react-router-dom";
	```

* 2 Dans la méthode de cycle de vie render d'APP utiliser le composant ```<Router>``` qui n'aura qu'une balise enfant.

* Entre les balises du composant Router seront présente : 

    * 1 Une partie navigation , avec des composents de type Link, 
    * 2 Une partie routage avec les composents Switch (permet d'afficher la 1er route matchant le chemin courant) et Route(fait la correspondance entre le chemin et l'adresse url.

```
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

```
#### Etapes pour implémenter un routing dynamique:

* 1) Introduire des variables dans la route qui seront rendront le routage dynamique.

```
 <Route path="/:year/:month" component={PostList} />
```

 * 2) Link : Créer une anchor link et un href associé, il s'agit d'un composant de type lien. React va chercher une correspondance de segments de chemin avec la route /:year/:month, et va rendre le composant lors du match.

 ```
<li>
  <Link to="/2019/09">September 2019</Link>
</li>
<li>
  <Link to="/2019/10">October 2019</Link>
</li>
 ```

React router passe au composant les props  history, location et match.
Dans match, on va pouvoir assoicer une correspondance, lors du match le composant sera rendu : 

```
function PostList(props) {
  // Get the URL parameters
  const params = props.match.params;
  return (
    <div>
      <p>year: <em>{params.year}</em></p>
      <p>month: <em>{params.month}</em></p>
    </div>
  );
}
```