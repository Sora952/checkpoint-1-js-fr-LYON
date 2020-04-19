# Revue des notions "en cours d'acquisition"

## UNIX

### Savoir gérer les droit (sudo, chown, chmod)

Pour tester ces commandes, j'ai créé un nouvel user de test pour voir et changer ses droits 
```bash 
sudo adduser test
```
sous l'utilisateur amélie, création d'un fichier text test
```bash
amelie@amelie-ThinkPad-T430s:~$ touch test.txt
amelie@amelie-ThinkPad-T430s:~$ ll test.txt
-rw-rw-r-- 1 amelie amelie 0 avril 19 09:30 test.txt
```
la commande ls -l m'indique que les autres user que amelie n'auront pas les droits d'écriture sur ce fichier.
passage sur le user test
```bash
amelie@amelie-ThinkPad-T430s:~$ su test
```
impossible d'écrire dans le fichier test.txt
```bash
test@amelie-ThinkPad-T430s:/home/amelie$ ll test.txt
-rw-rw-r-- 1 amelie amelie 0 avril 19 09:30 test.txt
```
passage sur amelie pour donner les droits à test
```bash
test@amelie-ThinkPad-T430s:/home/amelie$ su amelie
```
changement des droits en read and write pour amelie, le groupe, et les autres
```bash
amelie@amelie-ThinkPad-T430s:~$ chmod 666 test.txt
amelie@amelie-ThinkPad-T430s:~$ ll test.txt
-rw-rw-rw- 1 amelie amelie 0 avril 19 09:30 test.txt
```
les droits sont changés, passage sur test pour vérifier
```bash
amelie@amelie-ThinkPad-T430s:~$ su test
```
possible d'écrire dans test.txt.

utilisation de chown pour mettre test en owner du fichier test
```bash
amelie@amelie-ThinkPad-T430s:~$ sudo chown test test.txt
[sudo] Mot de passe de amelie : 
amelie@amelie-ThinkPad-T430s:~$ ll test.txt
-rw-rw-rw- 1 test amelie 6 avril 19 09:34 test.txt
```

### Savoir gérer les paquets et mettre à jour le système

utilsation des commandes: 
```sudo apt update```
qui m'a indiquée que 29 paquets pouvaient être mis à jour, donc suivi de 
```sudo apt upgrade```
pour les mettre à jour.

### Gérer les processus et le multi-tâches  (ps, top, kill...)

Afficher les processus en cours
```bash
amelie@amelie-ThinkPad-T430s:~$ ps
  PID TTY          TIME CMD
24911 pts/1    00:00:00 bash
26358 pts/1    00:00:00 zsh
26687 pts/1    00:00:00 bash
27028 pts/1    00:00:00 zsh
27305 pts/1    00:00:00 bash
29197 pts/1    00:00:00 zsh
31055 pts/1    00:00:00 bash
31465 pts/1    00:00:00 ps
```
Pour la rendre plus détaillée
```bash
ps aux
```
Pour filter un processus, possible de filtrer la sortie en la redirigeant vers un grep 
```bash
amelie@amelie-ThinkPad-T430s:~$ ps
  PID TTY          TIME CMD
  514 pts/1    00:00:00 ps
24911 pts/1    00:00:00 bash
26358 pts/1    00:00:00 zsh
26687 pts/1    00:00:00 bash
27028 pts/1    00:00:00 zsh
27305 pts/1    00:00:00 bash
29197 pts/1    00:00:00 zsh
31055 pts/1    00:00:00 bash
amelie@amelie-ThinkPad-T430s:~$ ps | grep 27028
27028 pts/1    00:00:00 zsh
```

La commande ```top``` domme les mêmes info que ps mais en temps réel, on peut lui donner un délai de rafraichissement avec -d. Par exemple ```top -d 10``` fera un rafaichissement toutes les 10 secondes.

```kill``` permet de terminer manuellement un processus grâce à son id
on fait ```ps aux```, on récupère l'id et on fait ```kill [id]```


## Git

### Faire relire mon code avec une PR

Pratiquée avec l'équipe du projet 2, première user story (us1) réalisée en peer programming avec Mickaël, pushé sur notre branche de features et pull request assignée à Christophe, après relecture, la PR est assignée à Pierre pour être mergée dans Dev.
Puis mis en pratique sur les 4 user stories suivantes, le workflow est clair.

## React

### Savoir implémenter un routing

Vu lors de la première semaine du P2. Implémentation d'un routing pour rediriger vers la bonne page au clic sur le bouton de lancement d'une session. Mis en place à 4, pour que tout le monde comprenne bien, c'est clair. 
