# Bot Discord - Commandes et Lancement

Bienvenue dans le dépôt GitHub de votre bot Discord ! Ce bot permet de gérer des commandes slash et d'autres fonctionnalités automatisées pour votre serveur Discord.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés pour exécuter le bot :
- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- Un token Discord Bot (généré depuis le [Portail des développeurs Discord](https://discord.com/developers/applications))

## Installation

Clonez ce dépôt sur votre machine locale et installez les dépendances :

```bash
git clone https://github.com/votre-utilisateur/votre-repo.git
cd votre-repo
npm install
```

## Configuration

Avant de démarrer le bot, créez un fichier `.env` à la racine du projet avec les informations de configuration nécessaires. Assurez-vous d'y ajouter votre token Discord :

```env
DISCORD_TOKEN=VotreTokenDiscord
```

## Déploiement des commandes Slash

Pour configurer les commandes slash de votre bot, exécutez la commande suivante dans votre terminal :

```bash
node deploy_commands.js
```

Cela enregistrera toutes les commandes slash configurées dans le fichier de commandes pour votre serveur Discord.

## Lancer le bot

Une fois les commandes déployées, lancez le bot avec la commande suivante :

```bash
node index.js
```

Si tout est configuré correctement, le bot devrait maintenant être en ligne et prêt à répondre aux commandes sur votre serveur.

## Contributions

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir des issues ou des pull requests pour toute amélioration ou correction.

## Licence

Ce projet est sous licence [MIT](./LICENSE).
