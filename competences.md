# Gérer les droits

## Sudo

### Définition

Sudo correspond à l'abréviation de **S**ubstitute **U**ser **Do**.
La commande Sudo permet de lancer une commande en tant qu'administrateur.

### Utilisation 

Pour éxécuter une commande en mode superutilisateur, il suffit de préciser avant le nom de la commande l'expression sudo comme ceci

```shell
$ sudo <commande>
```

Un mot de passe est demandé et la commande ne sera executé qu'une fois qu'il aura été renseigné. Ce dernier n'est mémorisé que pour une durée de 15 minutes et il faudra le donner à nouveau au delà de cette durée.

Pour mettre fin à une session sudo avant la fin des 15 minutes, il faut taper la commande suivante :

```shell
$ sudo -k
```

## Chown

### Définition

La commande chown correspond à l'abréviation de **ch**ange the **own**er et permet de changer le propriétaire d'un fichier ou d'un dossier.

### Utilisation

La commande chown prend la syntaxe suivante :

```shell  chown nouveau_propriétaire nom_du_fichier```

Elle peut prendre plusieurs options dont les suivantes : 

* ```shell -R``` : opère le changement sur tous les fichiers et sous-dossiers du dossier choisi de manière récursive
* ```shell -v``` : décrit les changements de propriétaire
* ```shell --version``` : donne le numéro de la version de chown
* ```shell -c, --changes``` : ne décrit que les fichiers dont le propriétaire est modifié

### Exemple

```shell chown geoffroy /home/dossier-important``` : fait de l'utilisateur "geoffroy" le nouveau propriétaire du dossier "dossier-important".

## Chmod

### Définition

La commande **chmod** correspond à l'abréviation de **ch**ange **mod**e et permet de changer les permissions d'accès d'un fichier ou d'un répertoire.

### Utilisation

Pour faire appel à la commande chmod, il faut : 

* Passer en mode superutilisateur
* Être le propriétaire du fichier en question

La structure de la commande chmod est la suivante : 

```shell
$ chmod options modes fichiers
```

### Options

La commande chmod possède plusieurs options. Les plus courantes sont les suivantes : 

* ```shell -v, --recursive``` : afficher la liste de tous les fichiers en cours de modification
* ```shell --help``` : affiche l'aide de la commande chmod
* ```shell --version``` : affiche les informations sur la version de chmod
* ```shell -R, --recursive```: change les modes de tous les fichiers dans les sous-répertoires de manière récursive

### Modes

Les modes servent à définir les utilisateurs auxquels les permissions vont s'appliquer ainsi que les dites permissions.

#### Les utilisateurs

Les utilisateurs sont précisés de la manière suivante : 

* u pour user (propriétaire)
* g pour group (groupe)
* o pour others (les autres)
* a pour all (tous)

#### Les permissions

Les permissions peuvent être accordées de deux manières : 

* Avec des lettres : on peut utiliser les opérateurs ```+```, ```-``` et ```=``` pour ajouter, supprimer ou écraser des permissions.
* Avec des nombres : on précise un chiffre par type d'utilisateur dans l'ordre suivant : ```u g o```. Ainsi, la permission 720 donne l'ensemble des droits au propriétaire d'un fichier, des droits d'écriture aux membres du groupe et aucun droit aux autres utilisateurs.

Elles se donnent de la manière suivantes : 

* ```r``` (4) : autorisation de lecture
* ```w``` (2) : autorisation d'écriture
* ```x``` (1) : autorisation d'exécution. Si l'autorisation d'exécution n'est pas accordée à un utilisateur, il ne pourra pas non plus accéder au contenu du répertoire.

#### Exemple

* ```shell chmod -R a+rw dossier``` : donne à tous les utilisateurs des autorisations de lecture et d'écriture au dossier choisi ainsi qu'à tous les fichiers et dossiers qu'il contient.
* ```shell chmod 755 fichier``` : donne au propriétaire du fichier tous les droits (4 + 2 + 1 = 7), aux membres du groupe et aux autres utilisateurs les droits de lecture et d'accès au fichier (4 + 1 = 5).

# Gérer les paquets et mettre à jour le système

# Gérer les processus et le multi-tâche

# Ps

# Top

# Kill

# Savoir utiliser les tags de Git

# Faire des commits atomiques correctement commentés et des PR de taille humaine

# Utiliser un framwork CSS

## Bootstrap

## Materialize CSS

## Connaître les pré-processeur de code CSS

# SCSS

# Connaître les différents métiers du développement web

## ESN

## Agence Web

## Freelance

# ES6+

## Fonctions fléchées

## Destructuring

## Spread operator

## Rest parameters

# Maîtrise de la fonction

## Fonction anonyme

## Fonctions fléchées

## Callback

## Closure

# ESLint avec un StyleGuide

