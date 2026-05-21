# Projet IF08 - Site Web Statique : Le Véritable Carrot Cake

Projet réalisé dans le cadre de l'UE IF08. L'objectif principal de ce projet est la mise en pratique de la gestion de projet en coordonnant une équipe de 6 développeurs. 

Le livrable final est un site web statique, interactif et responsive présentant la recette du Carrot Cake. La particularité de ce site est qu'il interroge dynamiquement la base de données d'Open Food Facts (OFF) pour récupérer les informations des ingrédients et calculer le Nutri-Score moyen de la recette.

---

## 👥 L'Équipe

Ce projet est encadré et développé par :

* **Chef de Projet (Scrum Master / Manager) :** Antoine SAADA 
  *(En tant que gestionnaire, le chef de projet a pour interdiction formelle d'intervenir sur le code source ou de réaliser des tâches de développement).*

* **Équipe de Développement :** *(Chaque développeur dispose d'un budget temps strict de 2 heures maximum pour réaliser les tâches qui lui sont affectées ).*
  * Juliette SIEBERING
  * Alexis ZOTT
  * Dorcas ADRAKE
  * Mathéo ALLABERT
  * Ace ANALLA
  * Thomas CHARPENTIER

* **Enseignant Évaluateur :** Matthieu TIXIER

---

## 📋 Gestion de Projet

La planification, la répartition des tâches (tickets) et le suivi du temps consommé sont intégralement pilotés via l'outil **ClickUp**. 

L'environnement de travail a été initialisé selon les prérequis de l'UE IF08 et suit une méthodologie de tableau Kanban (À FAIRE, EN COURS, ACHEVÉ).

---

## 🛠️ Stack Technique & Contraintes

Le site répond à des exigences non fonctionnelles strictes définies dans le cahier des charges:

* **Architecture :** Site web 100% statique composé uniquement de fichiers HTML, JavaScript (fichiers JSON) et éventuellement CSS.
* **Responsive Design :** Mise en page fluide et adaptée aux ordinateurs et mobiles grâce au framework **Bootstrap**. Le framework est chargé exclusivement via un CDN (Content Delivery Network).
* **API Distante :** Appels asynchrones (requêtes `fetch`) à l'API **Open Food Facts** pour sourcer les ingrédients via leur identifiant unique (code-barres).
* **Ressources :** **Aucune image locale** n'est déposée sur les serveurs. L'ensemble des images et logos Nutri-Score proviennent des requêtes JSON.
* **Déploiement :** Hébergement sur l'espace FTP fourni par l'école, avec un téléversement opéré via le client FileZilla.

---

## 🚀 Lancement Rapide

Le projet ne nécessitant aucun backend complexe, l'exécution en local est très simple :

1. Cloner le dépôt Git sur votre machine locale.
2. Ouvrir le fichier `index.html` directement dans un navigateur web moderne (Chrome, Firefox, Edge, etc.).
3. Une connexion Internet active est requise pour charger les styles Bootstrap via CDN et pour exécuter les requêtes vers l'API Open Food Facts.
