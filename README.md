# Booki V2

Monorepo pour l'application Booki V2 avec frontend React et backend.

## Structure du projet

```
BookiV2/
├── frontend/          # Application React avec TypeScript + SWC
├── backend/           # API Backend (à venir)
├── shared/            # Types et utilitaires partagés
└── package.json       # Scripts de gestion du monorepo
```

## Installation

```bash
# Installer toutes les dépendances
npm run install:all

# Ou installer manuellement
npm install
cd frontend && npm install
cd ../backend && npm install
```

## Développement

```bash
# Lancer frontend et backend en parallèle
npm run dev

# Lancer seulement le frontend
npm run dev:frontend

# Lancer seulement le backend
npm run dev:backend
```

## Build

```bash
# Build complet
npm run build

# Build frontend seulement
npm run build:frontend

# Build backend seulement
npm run build:backend
```

## Technologies

- **Frontend**: React 18, TypeScript, Vite, SWC
- **Backend**: À définir
- **Monorepo**: npm workspaces