#### Unix ####

**Connaître l'architecture des dossiers du système Linux**


`La racine`
Dans un système de fichiers, il y a toujours ce qu'on appelle une racine, c'est-à-dire un « gros dossier de base qui contient tous les autres dossiers et fichiers ».
Sous Linux, il n'y a qu'une et une seule racine : « / ». Comme vous le voyez, il n'y a pas de lettre de lecteur car justement, Linux ne donne pas de nom aux lecteurs comme le fait Windows. Il dit juste « La base, c'est/ »

`La liste des dossiers les plus courants que l'on retrouve à chaque fois à la racine de Linux :`
    • bin : contient des programmes (exécutables) susceptibles d'être utilisés par tous les utilisateurs de la machine.
    • boot : fichiers permettant le démarrage de Linux.
    • dev : fichiers contenant les périphériques. En fait – on en reparlera plus tard – ce dossier contient des sous-dossiers qui « représentent » chacun un périphérique. On y retrouve ainsi par exemple le fichier qui représente le lecteur CD.
    • etc : fichiers de configuration.
    • home : répertoires personnels des utilisateurs. On en a déjà parlé un peu avant : c'est dans ce dossier que vous placerez vos fichiers personnels, à la manière du dossierMes documentsde Windows.

`Commande utile :`
pwd : afficher le dossier actuel

**Savoir gérer les droits (sudo, chown, chmod)**

`Sudo:`
Commande utilisée dans les OS de type Unix qui s'utilise en ligne de commande dans un terminal. Elle permet de prendre les droits root pour exécuter une commande. C'est à dire qu'un utilisateur va pouvoir "forcer" une commande en prenant le rôle d'administrateur (ou super utilisateur) et non simplement d'utilisateur.
Chown:
Commande utilisée en UNIX également, permet de changer le propriétaire d'un fichier ou d'un dossier. Elle peut s'utiliser avec le -R pour modifier récursivement un répertoire et tout ce qu'il contient.Exemples:
chown autreUtilisateur MonFichier => Change le propriétaire de MonFichier en autreUtilisateur
chown -R lui:nous monRep => Change le propriétaire en lui et le groupe propriétaire en nous du répertoire monRep ainsi que tout ce qu'il contient. 

`Chmod:`
Commande UNIX qui sert à changer les permissions de lecture d'écriture et d’exécution d'un fichier ou d'un dossier, soit en mettant plus de droits sur la cible indiquée ou en enlevant.Elle s'utilise de la façon suivant:

1. Voir quels sont les permissions sur chaque fichier d'un dossier: 
aller dans le dossier (cd) et afficher ```ls -la```

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
o : Tous les autres utilisateurs.
Les options les plus fréquentes:
-R : Récursif, modifie les autorisations d'un répertoire et tout ce qu'il contient
-c : Ne montrer que les fichiers ayant été réellement modifiés
-f : Ne pas afficher les messages d'erreurExemples:

chmod ugo+x monRep => Ajoute l'exécution (ouverture) du répertoire monRep à tous (propriétaire, groupe, autres)
chmod go-wx monRep => Supprime l'autorisation d'écriture et l'exécution de monRep au groupe et aux autres



**Savoir gérer les paquets et mettre à jour le système**

npm install ???

#### GIT ###

**Savoir utiliser les tags Git**

À l’instar de la plupart des VCS, Git donne la possibilité d’étiqueter un certain état dans l’historique comme important. Généralement, les gens utilisent cette fonctionnalité pour marquer les états de publication (v1.0 et ainsi de suite). Dans cette section, nous apprendrons comment lister les différentes étiquettes (tag en anglais), comment créer de nouvelles étiquettes et les différents types d’étiquettes.

$ git tag : Lister les étiquettes existantes dans l’ordre alphabétique.
$ git tag -l ‘série d’étiquette souhaitée’

deux types principaux d’étiquettes : légères et annotées :
légère : c’est juste un pointeur sur un commit spécifique.
Annotée : sont stockées en tant qu’objets à part entière dans la base de données de Git. Elles ont une somme de contrôle, contiennent le nom et l’adresse e-mail du créateur, la date, un message d’étiquetage et peuvent être signées et vérifiées avec GNU Privacy Guard (GPG).

$ git tag -a ‘série d’étiquette souhaitée’ -m ‘commit ‘ : créer une étiquette annotée
$ git show ‘série d’étiquette souhaitée’ : visualiser les données de l’étiquette à côté du commit qui a été marqué 
$ git tag ‘série d’étiquette souhaitée’ : créer une étiquette légère.
git push origin [nom-du-tag] ou $ git push origin –tags : pousser les étiquettes après les avoir créées localement .

**Faire des commit atomiques correctement commentés et des PR de taille Humaine**

cf nombre de commit réalisés pour le P2 jusqu’à lors.

#### Intégration ####

**Connaître les règles de base d’ergonomie et de design**

`Ergonomie :`
- Du texte lisible : garder un contraste élevé avec le fond, taille de police de texte confortable.
- Ne soulignez pas le texte.
- Utilisez des titres et des sous titres de page
- Evitez les colonnes trop étroites ou trop larges : une largeur de colonne comprise entre 10 et 15 cm
- Laissez les gadgets de côté
- Un affichage rapide et léger
- architecture du site :
    • Les menus et chapitres principaux en haut de la page,
    • Les sous menus ou sous chapitres à gauche de la page,
    • Les références et sources en bas de la page,
    • Les renvois, les publicités, à droite de la page.

`UX design :`
une UX satisfaisante peut exister uniquement si le produit est :
Utile (useful)
Utilisable (usable)
Désirable (desirable)
Accessible (accessible)
Localisable (findable)
Crédible (credible)
Profitable (valuable)

**Savoir scénariser l’enchainement des écrans de l’application à l’aide de wireframe**

https://www.figma.com/file/ZEZ2ehXOjv8AOHAsM8r7om/Untitled?node-id=0%3A1

**Structurer une page en HTML5**

https://developer.mozilla.org/fr/docs/Apprendre/HTML/Comment/D%C3%A9couper_une_page_web_en_sections_logiques

cf site de ToDoLyon page index 

**Utiliser efficacement l’inspecteur du navigateur**

Depuis l’utilisation de Bootstrap je le fais systématiquement notamment pour comprendre pourquoi mes div ne se comportent pas comme je le voudrais et très souvent ça me permet de débloquer plus vite.

**Utiliser un framework CSS (bootsrap…)**

cf Navbar P2


**Connaître les pré-processeurs de code CSS (SCSS, …)**

Un préprocesseur CSS est un « programme » ou module sous Node.js  (pour Less et Sass) qui interprète votre code source pour générer un code standard du web : le CSS. Ce sont des générateurs dynamiques de CSS.
LESS et Sass (Syntactically Awesome Stylesheet) sont les préprocesseurs CSS les plus utilisés, ils permettent d’améliorer la syntaxe du langage en préservant ses fondamentaux, ses possibilités et sa conformité W3C.

Petit article bien pratique : https://www.alsacreations.com/article/lire/1717-les-preprocesseurs-css-c-est-sensass.html


**Respecter les bonnes pratiques SEO**

1) Assurez vous que l‘indexation de vos pages n’est pas bloquée à cause d’une balise NoIndex, d’une en-tête HTTP X-Robots-Tag ou d’une indication de non indexation dans votre fichier robot.txt.
2) Vérifiez que toutes vos pages ont une balise META <title> qui ne dépasse pas 65 caractères idéalement.
3) Rédigez des balises META <description> entre 70 et 320 caractères qui donnent envie aux internautes de cliquer.
4) Vos URLs doivent être compréhensibles par un humain, et idéalement ne dépassent pas 115 caractères.
Votre contenu à proprement dit
5) Rédigez des contenus de plus de 500 mots, voire encore plus longs si vous le pouvez (la longueur du texte compte pour votre référencement).
6) Utilisez les mots justes et un vocabulaire riche dans vos contenus pour maximiser votre impact SEO (aidez vous d’un outil).
7) Utilisez des images dans vos contenus, en prenant soin de renseigner les balises <alt> et <title> de vos visuels.
8) Prenez soins de garder la taille de vos images la plus légère possible pour ne pas impacter défavorablement votre temps de chargement.
9) « Stratégisez » votre maillage interne en utilisant un outil comme Google Search Console.
Soigner la structuration HTML
10) Structurez votre contenu avec des titres H1 – H6.
11) Si vous avez un contenu qui se lit sur plusieurs pages, utilisez les balises de pagination rel= »next » et rel= »prev ».
12) Si votre contenu s’y prête, n’oubliez pas d’ajouter toutes les micro-données possibles  (voir schema.org).
13) Votre contenu texte doit idéalement représenter plus de 10% de votre code HTML.
14) N’utilisez pas de liens ou de textes cachés (par exemple un texte blanc sur fond blanc) au risque que Google considère la manœuvre comme une tentative malhonnête pour essayer d’influencer votre classement dans les moteurs de recherche.
L’expérience utilisateur a aussi un impact SEO
15) Assurez-vous que votre site est compatible avec les appareils mobiles et évitez les erreurs UX basiques d’un site mobile.
16) Assurez vous de garder une page légère, pour favoriser un temps de chargement rapide.
17) Corrigez toutes les erreurs d’exploitation, et faites la chasse aux pages 404.
18) Déliez tous les liens cassés qui peuvent être présents sur votre site.
19) Ajoutez une Favicon à votre site, qui apparaisse sur tous les navigateurs.
20) Ne pensez pas qu’aux moteurs de recherche et cherchez à développer une vraie marque sur la toile pour gagner la bataille du « préférencement ».
Les éléments techniques SEO à prendre en compte
21) Assurez-vous d’avoir un sitemap XML
22) Évitez le duplicate content « bête » à cause des deux variantes de votre site, avec ou sans les « www » (par exemple, http://www.monsite.com et http://monsite.com). Utilisez une balise <canonical> pour déclarer quelle variante vous voulez voir dans les résultats de recherche.
23) Eviter que les éventuels paramètres de vos URLs (ex: quand vous filtrez un catalogue produit) génèrent du duplicate content, ou cannibalisent le SEO d’autres pages.
24) De manière générale, évitez les techniques de cloaking (servir un contenu différent aux moteurs de recherche et aux utilisateurs)
25) Passez au protocole HTTPs (tout en évitant ses pièges SEO)


**Connaître les différents métiers du développement web (ESN, agence web, freelance…)**

`ESN :`
Entreprise de Services du Numérique. Elle commercialise, auprès de ses partenaires, ses services numériques et son savoir-faire.  C’est un prestataire de service.

`Agence web :`
L'agence web est une agence de communication spécialisée dans la communication interactive à travers essentiellement la création de sites web.
L'essentiel des missions d'une agence web a trait à la création de sites web et aux phases de conseils et d'animation marketing qui peuvent y être liées. Elles nécessitent donc des compétences marketing et techniques.

`Freelance :`
Un freelance web est un travailleur indépendant travaillant dans le secteur Internet. Enregistré en tant qu’auto-entrepreneur ou comme entreprise individuelle, le freelance web réalise des prestations diverses pour le compte de clients.

#### Javascript ####

**ES6+ (fléchés, destructuring, spread operator, rest parameters...)**

https://codepen.io/anais_huoch/pen/oNjXZZG?editors=1111

**Maitrise du DOM**

`2 vidéos tutos bien expliqués :`
https://www.youtube.com/watch?v=0-bBV_S-fgY
https://www.youtube.com/watch?v=u81D-Cw7JY4

`Exercices :`
https://codepen.io/anais_huoch/pen/LYpZqoz

#### React ####

**Savoir interpréter un message d’erreur**

Quand je ne le comprends pas je vais sur internet. Ça va mieux depuis le P2 ou j’en ai eu beaucoup.


**Utiliser un débogueur (chrome react tool)**

npm start ???


