# 🚀 FUEL PWA — Guida all'installazione

## Struttura dei file
```
fuel-pwa/
├── index.html       ← App principale
├── manifest.json    ← Configurazione PWA
├── sw.js            ← Service Worker (offline)
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

---

## Opzione A — Hosting gratuito su GitHub Pages (consigliato)

### 1. Crea un account GitHub
Vai su https://github.com e registrati (gratis).

### 2. Crea un repository
- Clicca "New repository"
- Nome: `fuel-app`
- Visibilità: **Public** (richiesto per Pages gratuito)
- Clicca "Create repository"

### 3. Carica i file
```bash
# Nel terminale, entra nella cartella fuel-pwa
cd fuel-pwa

# Inizializza git
git init
git add .
git commit -m "first commit"

# Collega al repository GitHub (sostituisci USERNAME)
git remote add origin https://github.com/USERNAME/fuel-app.git
git branch -M main
git push -u origin main
```

### 4. Abilita GitHub Pages
- Vai su Settings → Pages
- Source: "Deploy from a branch"
- Branch: `main` → folder: `/ (root)`
- Clicca **Save**

### 5. La tua app sarà live in ~2 minuti su:
```
https://USERNAME.github.io/fuel/
```

### 6. Installa come app
- **iPhone/iPad**: Safari → Condividi → "Aggiungi a schermata Home"
- **Android**: Chrome → menu (⋮) → "Aggiungi a schermata Home"  
- **Desktop Chrome/Edge**: icona di installazione nella barra degli indirizzi

---

## Opzione B — Server locale (test rapido)

### Usando Python (già installato su Mac/Linux):
```bash
cd fuel-pwa
python3 -m http.server 8080
```
Apri http://localhost:8080 nel browser.

### Usando Node.js:
```bash
npx serve fuel-pwa
```

> ⚠️ Il service worker (offline) funziona solo su HTTPS o localhost.

---

## Dove vengono salvati i dati?

I dati sono salvati in **IndexedDB** nel browser/dispositivo:
- ✅ Persistono tra sessioni
- ✅ Funzionano offline dopo la prima visita
- ✅ Separati per dispositivo
- ⚠️ Se cancelli i dati del browser, vengono persi

**Backup manuale** (funzione futura): puoi esportare i dati in JSON.

---

## Aggiornare l'app in futuro

Modifica i file e fai push su GitHub:
```bash
git add .
git commit -m "aggiornamento"
git push
```
GitHub Pages si aggiorna automaticamente in ~1 minuto.
