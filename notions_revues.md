# Revue des notions "en cours d'acquisition"

## UNIX

### Savoir gérer les droit (sudo, chown, chmod)

Pour tester cette commande, j'ai créé un nouvel user de test pour voir et changer ses droits 
```sudo adduser test```
sous l'utilisateur amélie, création d'un fichier text test
```amelie@amelie-ThinkPad-T430s:~$ touch test.txt```
```amelie@amelie-ThinkPad-T430s:~$ ll test.txt```
```-rw-rw-r-- 1 amelie amelie 0 avril 19 09:30 test.txt```
la commande ls -l m'indique que les autres user que amelie n'auront pas les droits d'écriture sur ce fichier
passage sur le user test
```amelie@amelie-ThinkPad-T430s:~$ su test```
impossible d'écrire dans le fichier test.txt
```test@amelie-ThinkPad-T430s:/home/amelie$ ll test.txt```
```-rw-rw-r-- 1 amelie amelie 0 avril 19 09:30 test.txt```
passage sur amelie pour donner les droits à test
```test@amelie-ThinkPad-T430s:/home/amelie$ su amelie```
changement des droits en read and write pour amelie, le groupe, et les autres
```amelie@amelie-ThinkPad-T430s:~$ chmod 666 test.txt```
```amelie@amelie-ThinkPad-T430s:~$ ll test.txt```
```-rw-rw-rw- 1 amelie amelie 0 avril 19 09:30 test.txt```
les droits sont changés, passage sur test pour vérifier
```amelie@amelie-ThinkPad-T430s:~$ su test```
possible d'écrire dans test.txt.

### Savoir gérer les paquets et mettre à jour le système

utilsation des commandes: 
```sudo apt update```
qui m'a indiquée que 29 paquets pouvaient être mis à jour, donc suivi de 
```sudo apt upgrade```
pour les mettre à jour.

### Gérer les processus et le multi-tâches  (ps, top, kill...)


## Git

### Faire relire mon code avec une PR

Pratiquée avec l'équipe du projet 2, première user story (us1) réalisée en peer programming avec Mickaël, pushé sur notre branche de features et pull request assignée à Christophe, après relecture, la PR est assignée à Pierre pour être mergée dans Dev.
Puis mis en pratique sur les 4 user stories suivantes, le workflow est clair.

## React

### Savoir implémenter un routing

Vu lors de la première semaine du P2. Implémentation d'un routing pour rediriger vers la bonne page au clic sur le bouton de lancement d'une session. Mis en place à 4, pour que tout le monde comprenne bien, c'est clair. 