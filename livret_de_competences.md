# Compétences à acquérir suite entretien Pierre - Nathan 08/04/2020


## 1. Savoir gérer les droits (sudo, chown, chmod)

**- Sudo:** 
Commande utilisée dans les OS de type Unix qui s'utilise en ligne de commande dans un terminal. Elle permet de prendre les droits root pour exécuter une commande. C'est à dire qu'un utilisateur va pouvoir "forcer" une commande en prenant le rôle d'administrateur (ou super utilisateur) et non simplement d'utilisateur.
En effet, pour certaines tâches d'administration qui pourraient le endommager le système, ces droits spécifiques de super utilisateur sont requis.

Exemple:
```
sudo nano /chemin/vers/mon/fichier
```

**- Chown:** 
Commande utilisée en UNIX également, permet de changer le propriétaire d'un fichier ou d'un dossier. Elle peut s'utiliser avec le -R pour modifier récursivement un répertoire et tout ce qu'il contient.

Exemples:
```
chown autreUtilisateur MonFichier
```
=> Change le propriétaire de MonFichier en autreUtilisateur
```
chown -R lui:nous monRep
```
=> Change le propriétaire en lui et le groupe propriétaire en nous du répertoire monRep ainsi que tout ce qu'il contient.

**- Chmod:** 
Commande UNIX qui sert à changer les permissions de lecture d'écriture et d'éxecution d'un fichier ou d'un dossier, soit en mettant plus de droits sur la cible indiquée ou en enlevant.

Elle s'utilise de la façon suivant:
1. Voir quels sont les permissions sur chaque fichier d'un dossier: aller dans le dossier (cd) et afficher ```ls -la```
2. On va pouvoir voir quel groupe a quelle permission:
1er groupe : -rwx------ Propriétaire
2ème groupe: ----rwx--- Groupe
3ème groupe : -------rwx Public (autres utilisateurs)
	- r = read (lire)
	- w = write (écrire)
	- x = execute (executer)
3. Ensuite, on va pouvoir changer les permissions avec par exemple les commandes suivantes:
+ : Ajoute une permission
- : Enlève une permission
= : Autorise uniquement l'autorisation indiquée
r : Lecture ; Valeur octale 4
w : Écriture ; Valeur octale 2
x : Exécution ; Valeur octale 1
s : Utilise les droits du propriétaire ou du groupe lors de l'exécution
u : Propriétaire du fichier
g : Groupe propriétaire du fichier
o : Tous les autres utilisateurs

Les options les plus fréquentes:
-R : Récursif, modifie les autorisations d'un répertoire et tout ce qu'il contient
-c : Ne montrer que les fichiers ayant été réellement modifiés
-f : Ne pas afficher les messages d'erreur

Exemples:
```
chmod ugo+x monRep
```
Ajoute l'exécution (ouverture) du répertoire monRep à tous (propriétaire, groupe, autres)
```
chmod go-wx monRep
```
Supprime l'autorisation d'écriture et l'exécution de monRep au groupe et aux autres

## 2. Faire des commits atomiques correctement commentés et des PR de taille humaine
L'avantage de faire des commits atomiques est de pouvoir retrouver plus facilement l'origine d'un bug, le contexte dans lequel il a été introduit et la raison.
Cela facilite aussi la lecture en code review: pousse la discussion, facilite l'apprentissage par les autres.

Il faut correctement commenter ses commits en répondant à la question "Pourquoi" pour indiquer des renseignements aux participants du projet.

## 2. Connaître les règles de base d'ergonomie et de design (UX/UI)
**- Utilité**
Le produit ou le service rendu doivent répondre à un besoin pour les utilisateurs.

**- Utilisabilité**
L'interface doit faciliter la satisfaction du besoin de l'internaute et faire prolonger son temps sur le site. Il doit pouvoir faire ce qu'il souhaite sur l'interface. On doit donc l'aider à y arriver le plus rapidement possible.

**- Facilement trouvable**
Le produit doit pouvoir être "trouvé" facilement par l'utilisateur, on doit pouvoir lui mettre à disposition facilement et rapidement.

**- Crédible**
La crédibilité d'un service apportera la confiance aux utilisateurs. Le service doit prouver, par ses informations et sa transparence, qu'il est précis et la raison pour laquelle il apporte des bénéfices aux utilisateurs.

**- Désirable**
La désirabilité se dessine à travers le branding, l'image, l'identité, l'esthétique et le design émotionnel.

**- Accessible**
Le service peut être délivré à tous les utilisateurs souhaitant y avoir accès, y compris les personnes handicapées. On doit faciliter l'accès au service.

**- Avec de la valeur**
Le produit doit avoir et délivrer de la valeur pour les utilisateurs.

**Les 10 règles d'or (Nielsen)**
- Visibilité de l'état du système (ex: tunnel d'achat), 
- Correspondance entre le système et le monde réel (ex: je valide, je me localise...) 
- Contrôle et liberté de l'utilisateur (ex: sorties de secours, revenir au menu..., 
- Cohérence et standards (ex: charte graphique, conventions),
- Prévention d'erreurs (ex: prévenir erreur dans formulaire),
- Reconnaissance plutôt que rappel (ex: aider dans les suggestions),
- Flexibilité et efficacité (ex: tutoriel utilisation app),
- Esthétique et minimalisme (taille, contraste, pas de superflu),
- Aider à reconnaître, diagnostiquer et corriger les erreurs (page 404)
- Aide et documentation (proposer de l'aide, une documentation accessible)
