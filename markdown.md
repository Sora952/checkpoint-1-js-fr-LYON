[![N|Solid](https://img1.freepng.fr/20180526/viq/kisspng-linux-tux-computer-icons-5b09f4802d7dc4.3209953815273790721863.jpg)](https://nodesource.com/products/nsolid)
# UNIX 

### Gérer les droits :

| commandes | description |
| ------ | ------ |
| sudo | accorder à certains utilisateurs les droits administrateur |
| chown | changer le propriétaire d'un fichier ou d'un dossier |
| chmod | gérer les droits d'accès d'un fichier ou d'un répertoire |


[![N|Solid](https://www.solutions-numeriques.com/wp-content/uploads/2019/04/github.png)](https://nodesource.com/products/nsolid)
# GIT

### Faire relire mon code à mon équipe avec une pull request :

Etapes :
    1- Faire un git add . (mettre à jour l'index)
    2- Faire un git commit (commenter les changement)
    3- Faire un git push (mettre à jour les changement sur la branche)
    4- faire une pull request via github
    
### Commits atomiques : 

L'une des bonnes pratiques consiste à décomposer en une multitudes de petits commits les modifications à enregistrer. Cela permet de référencer les étapes de codage et de pouvoir revenir avant certains changement en cas de problème.

### pull request à taille humaine :

Afin d'optimiser le temps de travail, et d'eviter les difficultés de relectures et validation de code du à une pull request importante, engendrant de nombreux problèmes tels que de nombreux conflits, erreurs etc... Il est important d'automatiser au maximum (linters...), et de fractionner dans la mesure du possible son code.


[![N|Solid](https://i.pinimg.com/originals/d5/bc/80/d5bc803f0ab768736cb0df5c06109c9a.png)](https://nodesource.com/products/nsolid)

# INTEGRATION

### Structurer une page HTML :
[![N|Solid](https://lh3.googleusercontent.com/proxy/4LW4R7PKKzxRLYmvpUb-PUKHrp98D1z7kHnUc2mTk_NdP2dopp9FwSsFWF1hKs_zsmJCWoqgsuJh-aoAIx32rdtvyFs1WdxUf5V85cKKszsp9r_14p0)](https://nodesource.com/products/nsolid)
[![N|Solid](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBWyeQ1iQ_mzhFtrydA191Z3aDuedHEJ1q_A4ypwGyW8PJ4D0B&usqp=CAU)](https://nodesource.com/products/nsolid)

### Bonnes pratiques SEO :

Afin d'obtenir un bon référencement auprès des moteurs de recherches, il est important de respecter certaines pratiques comme : 
    - Utiliser les balises META <title> (titre sur la fenêtre de navigation), <description> (descriptions affichées sur les moteurs de recherches) etc..., qui donnent envie aux internautes de cliquer.
    - URLs compréhensibles.
    - respecter les règles d'accessibilité.
    - Ajouter des images (les plus légères possible).
    - contenu textuel pertinant (mots clés).
    -etc...
 
[![N|Solid](https://www.techgig.com/files/photo_1426162032_small_temp.png)](https://nodesource.com/products/nsolid)

# JAVASCRIPT

### ES6+ :


[![N|Solid](https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)](https://nodesource.com/products/nsolid)
# REACT

### Utiliser le débogueur :


###  Afficher une liste de composants :

Pour afficher des listes il y a 2 moyens:
- Assigner à une variable un tableau contenant les elements à afficher
- Utiliser map dans l'expression jsx retournée

```sh
const nombres = [1, 2, 3];

// Méthode 1 :

const elements = nombres.map(n => <li>{n}</li>);
function Composant() {
  return (
  <div>
    <ul>{elements}</ul>
    
    // Méthode 2 :
    <ul>
      {nombres.map(n =>
        <li> {n * 2}</li>
      )}
    </ul>
  </div>);
}
```
