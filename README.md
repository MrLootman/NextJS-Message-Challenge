# 📘 NextJS – Algorithm challenge

## 🚀 Installation et lancement du projet

### 1. Cloner le projet

```bash
git clone git@github.com:MrLootman/NextChallenge-Answers
```

### 2. Se rendre dans le répertoire

```bash
cd NextChallenge-Answers
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer le projet en mode développement

```bash
npm run dev
```

Ensuite, ouvrez le navigateur à l’adresse indiquée dans le terminal (par défaut : http://localhost:3000/).

---

## 📖 Description de l'exercice

Dans ce projet, le composant `Home` contient un formulaire, lui-même contenant un input et un bouton.

Côté backend, le fichier `/actions/homeActions.ts` contient la logique de traitement de ce que l'utilisateur a renseigné. La logique est très simple : Si la réponse n'est pas correcte, cela renvoie `false`. Si la réponse est celle attendue, cela renvoie `true`.

Ton objectif se situe côté client, dans le composant `Home`.

Tu vas devoir :

1. Faire apparaître un message sous le formulaire lorsqu'une mauvaise réponse a été renseignée par l'utilisateur. Pour cela, tu peux décommenter la ligne 7, et ainsi bénéficier d'un tableau de messages en cas d'échec.

2. Une même réponse ne doit **jamais** apparaître deux fois consécutivement.

3. **Bonus** : Les réponses doivent être mélangées aléatoirement.
