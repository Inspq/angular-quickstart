angular-quickstart
==================

Ce projet est le projet de base pour démarrer un nouveau projet Angular2 à l'INSPQ. Il s'agit d'un "Hello world" qui contient aussi un test unitaire.

Outils utilisés
---------------

* Node.JS est une plateforme logicielle libre et événementielle en JavaScript.
* NPM est le gestionnaire de paquets de Node.JS
* Angular est un framework de Google permettant de développer des applications web sur Node.js.
* Grunt est un JavaScript Task Runner, un outil vous permettant de créer des tâches automatisées en JavaScript.
* Karma est un lanceur de tests unitaires pour Javascript

Installation des prérequis
--------------------------

1. Pour installer NPM et Node.js, consulter la page suivante: https://nodejs.org/en/download/
2. Pour installer le CLI d'Angular, taper la commande suivante:
```
npm install -g @angular/cli
```
3. Pour installer le CLI de Grunt, taper la commande suivante: 
```
npm install -g grunt-cli
```
4. Pour installer le CLI de Karma, taper la commande suivante: 
```
npm install -g karma-cli
```

Démarrage d'un nouveau projet
-----------------------------

1. Dans un terminal, rendez vous dans le dossier où se retrouvent vos projets et lancez la commande suivante:
```
git clone https://github.com/Inspq/angular-quickstart nom_de_votre_projet
```
    * Vous pouvez aussi obtenir un zip à partir de GitHub et l'extraire dans un répertoire appelé nom_de_votre_projet
2. Tapez la commande suivante pour installer toutes les dépendances du projet
```
npm install
```
3. Pour lancer les tests unitaires du projet, taper la commande suivante:
```
npm run test
```
4. Pour lancer le projet, taper la commande suivante:
```
npm start
```

Informations supplémentaires
----------------------------

1. Ouvrez votre éditeur de code favori et chargez le contenu du dossier qui contient votre projet
    * Dans le répertoire src/app, vous trouverez le code source en TypeScript
    * Dans le répertoire build, vous trouverez le code compilé en JavaScript. Ne modifiez pas ce code, il sera écrasé automatiquement au prochain build
    * Dans le répertoire src/tests/unit, vous trouverez les tests unitaires du projet
2. Apportez un changement au fichier app.component.ts. Par exemple, changer Hello world! pour Bonjour le monde!
    * Votre projet sera recompilé automatiquement et si le serveur est en cours de fonction, l'application sera rechargée
    * Les tests unitaires ne passeront plus, à vous de trouver pourquoi.

