Connaitre l'architecture des dossiers du système Linux :
  racine du système : /
  dossier personnel : /home/votre_pseudo/
  Dossier de périphériques USB : /media/votre_pseudo/
  ...

  Savoir gérer les droits (sudo, chown, chmod) : 
    sudo : Exécuter une ligne de commande en super utilisateur
    chown : modifier le propriétaire d’un fichier
    chmod : modifier les permissions d’un fichier

  Savoir gérer les paquets et mettre à jour le système :
    paquets : sudo apt install mon_paquet
    système : sudo apt update && sudo apt full-upgrade -y

 Gérer les processus et le multi-tâche (ps, top, kill ...) :
  ps : Connaître les processus actifs ainsi que ces ressources à un moment donné
  top : Permet d'afficher des informations en continu sur l'activité du système.
  kill : Fermer un processus proprement

  Faire des merges réguliers et gérer les conflits :
    fait plusieurs fois pour le projet 2 
      git pull ou git merge
      "regler les conflit sur l'ide"
      git add .
      git commit -m
      git push

Connaître les règles de base d'ergonomie et de design (UX/UI) :
  Utile (useful)
  Utilisable (usable)
  Désirable (desirable)
  Accessible (accessible)
  Localisable (findable)
  Crédible (credible)
  Profitable (valuable)

Utiliser un framework CSS (Bootstrap, MaterializeCSS, ...)

›	Très petit format	.col-xs- "largeur col"
›	Petit format	.col-sm- "largeur col"
›	Moyen format	.col-md- "largeur col"
›	Large format	.col-lg- "largeur col"

ES6+ (fléchées, destructuring, spread operator, rest parameters...) :

  fléchées : const myFunction = () => {}
  destructuring : let { valeur1, valeur2 } = objet
  spread operator : const t1 = [3, 4, 5]; 
                    const t2 = [1, 2, ...t1, 6];
                    console.log(t2); // [1, 2, 3, 4, 5, 6]
  rest parameters : function f(a, b, ...lesArguments) {}

Créer un composant sous forme de classe (stateful) :

class Myclass extends Components {
   constructor(props) {
    super(props);
    this.state = {}
   }

   render(){ return() }
}




