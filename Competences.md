# Gérer les droits 

#sudo

**Définition**

- Sudo = substitute user Do.La commande sudo mise avant une autre commande la lance en tant qu'administrateur!

**Utilisation**

-Pour lancer une commande en mode superutilisateur,il faut écrire

>$ sudo <commande>

- UN MDP est requis pour pouvoir exécuter la commande,disponible seulement pour 15 minutes il faut redonner le MDP aprés ces 15 minutes.

-Pour kill la session avant les 15 minutes.

>$ sudo -k


#Chown

**Définition**

- Chown = change the owner,il change le propriétaire d'un fichier ou d'un dossier.

**Utilisation**

>$ chown nouveau_propriétaire nom_du_fichier

les options disponibles

- -R : opère le changement sur tous les fichiers et sousdossiers du dossier choisi de manière récursive
- -v : décrit les changements de propriétaire
- -version : donne le numéro de la version de chown
- c, --changes : ne décrit que les fichiers dont le propriétaire est modifié

**Exemple**

chown Lancelot /home/dossier-important : fait de l'utilisateur "Lancelot" le nouveau propriétaire du dossier "dossier-important".


#Chmod

**Définition**

Chmod= Change mode,il change les permissions d'accès d'un fichier ou d'un repertoire. 

**Utilisation**

 prerequis
- Passer en mode superutilisateur
- Être le propriétaire du fichier en question

< $ chmod options modes fichiers

**Options**

--v, --recursive : afficher la liste de tous les fichiers en cours de modification
--help : affiche l'aide de la commande chmod
--version : affiche les informations sur la version de chmod
-R, --recursive: change les modes de tous les fichiers dans les sous-répertoires de manière récursive

**Modes**

Les modes définisent les utilisateurs qui vont bénéficier des permissions

*Les utilisateurs*


**Définition**

**Utilisation**

les cignes sont sur la mer du Nord 
























