# Oliveira Wesley

Landing “coming soon” — React, Vite e TypeScript.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Publicar no GitHub Pages

1. **Crie um repositório** no GitHub (ex.: `Oliveira-Wesley`). O nome do repositório será o caminho do site: `https://seu-usuario.github.io/Oliveira-Wesley/`.

2. **Envie o código** (branch `main`):

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/Oliveira-Wesley.git
   git push -u origin main
   ```

3. **Ative o GitHub Pages por Actions:**
   - No repositório: **Settings** → **Pages**
   - Em **Build and deployment**, em **Source** escolha **GitHub Actions**

4. **Próximos deploys:** a cada `git push` na branch `main`, o workflow faz o build e publica. A primeira vez pode ser preciso rodar o workflow manualmente em **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

Se o repositório tiver outro nome, o Vite já usa esse nome como base da URL automaticamente no deploy. Se a branch padrão for `master` em vez de `main`, edite `.github/workflows/deploy-pages.yml` e troque `branches: [main]` por `branches: [master]`.
