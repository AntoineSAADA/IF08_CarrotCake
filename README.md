# Projet IF08 - Site Web Statique : Le Véritable Carrot Cake

[cite_start]Projet réalisé dans le cadre de l'UE IF08[cite: 1, 2]. [cite_start]L'objectif principal de ce projet est la mise en pratique de la gestion de projet en coordonnant une équipe de 6 développeurs[cite: 2, 3, 41]. 

[cite_start]Le livrable final est un site web statique, interactif et responsive présentant la recette du Carrot Cake[cite: 3, 50, 51]. [cite_start]La particularité de ce site est qu'il interroge dynamiquement la base de données d'Open Food Facts (OFF) pour récupérer les informations des ingrédients et calculer le Nutri-Score moyen de la recette[cite: 61, 82, 83].

---

## 👥 L'Équipe

Ce projet est encadré et développé par :

* **Chef de Projet (Scrum Master / Manager) :** Antoine SAADA 
  [cite_start]*(En tant que gestionnaire, le chef de projet a pour interdiction formelle d'intervenir sur le code source ou de réaliser des tâches de développement [cite: 46]).*

* [cite_start]**Équipe de Développement :** *(Chaque développeur dispose d'un budget temps strict de 2 heures maximum pour réaliser les tâches qui lui sont affectées [cite: 41, 43]).*
  * Juliette SIEBERING
  * Alexis ZOTT
  * Dorcas ADRAKE
  * Mathéo ALLABERT
  * Ace ANALLA
  * Thomas CHARPENTIER

* **Enseignant Évaluateur :** Matthieu TIXIER

---

## 📋 Gestion de Projet

[cite_start]La planification, la répartition des tâches (tickets) et le suivi du temps consommé sont intégralement pilotés via l'outil **ClickUp**[cite: 45]. 

[cite_start]L'environnement de travail a été initialisé selon les prérequis de l'UE IF08 et suit une méthodologie de tableau Kanban (À FAIRE, EN COURS, ACHEVÉ)[cite: 206, 247, 363].

---

## 🛠️ Stack Technique & Contraintes

[cite_start]Le site répond à des exigences non fonctionnelles strictes définies dans le cahier des charges[cite: 49]:

* [cite_start]**Architecture :** Site web 100% statique composé uniquement de fichiers HTML, JavaScript (fichiers JSON) et éventuellement CSS[cite: 50, 53].
* [cite_start]**Responsive Design :** Mise en page fluide et adaptée aux ordinateurs et mobiles grâce au framework **Bootstrap**[cite: 51]. [cite_start]Le framework est chargé exclusivement via un CDN (Content Delivery Network)[cite: 58].
* [cite_start]**API Distante :** Appels asynchrones (requêtes `fetch`) à l'API **Open Food Facts** pour sourcer les ingrédients via leur identifiant unique (code-barres)[cite: 63, 65, 82].
* [cite_start]**Ressources :** **Aucune image locale** n'est déposée sur les serveurs[cite: 53]. [cite_start]L'ensemble des images et logos Nutri-Score proviennent des requêtes JSON[cite: 110].
* [cite_start]**Déploiement :** Hébergement sur l'espace FTP fourni par l'école, avec un téléversement opéré via le client FileZilla[cite: 47, 52, 140].

---

## 🚀 Lancement Rapide

Le projet ne nécessitant aucun backend complexe, l'exécution en local est très simple :

1. Cloner le dépôt Git sur votre machine locale.
2. Ouvrir le fichier `index.html` directement dans un navigateur web moderne (Chrome, Firefox, Edge, etc.).
3. [cite_start]Une connexion Internet active est requise pour charger les styles Bootstrap via CDN et pour exécuter les requêtes vers l'API Open Food Facts[cite: 58, 65].
