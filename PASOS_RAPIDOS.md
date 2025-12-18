# ⚡ Pasos Rápidos - Cloudflare Pages

## 🎯 Checklist Pre-Despliegue

- [ ] Repositorio en GitHub/GitLab/Bitbucket
- [ ] Código subido (`git push`)
- [ ] Build funciona localmente (`npm run build`)
- [ ] Archivo `public/_redirects` existe

---

## 📍 Pasos Esenciales

### 1️⃣ Ve a Cloudflare Dashboard
👉 [https://dash.cloudflare.com](https://dash.cloudflare.com)

### 2️⃣ Navega a Pages
Menú lateral → **Pages** → **Create a project**

### 3️⃣ Conecta Git
- Selecciona **"Connect to Git"**
- Autoriza GitHub/GitLab/Bitbucket
- Selecciona tu repositorio: `quai-propuesta-web`

### 4️⃣ Configura el Build
```
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: / (o vacío)
```

### 5️⃣ Despliega
- Haz clic en **"Save and Deploy"**
- Espera 1-3 minutos
- ✅ Tu sitio estará en: `https://quai-propuesta-web.pages.dev`

---

## 🔑 Configuración Clave

| Campo | Valor |
|-------|-------|
| **Framework** | Vite |
| **Build command** | `npm run build` |
| **Output directory** | `dist` |
| **Node version** | 18 (automático) |

---

## 🆘 Si algo falla

1. Ve a **Deployments** → Click en el despliegue fallido
2. Revisa los **Build logs**
3. Corrige el error y haz `git push` nuevamente

---

## 📝 Notas Importantes

- ✅ Cada `git push` a `main` despliega automáticamente
- ✅ Pull Requests generan preview deployments
- ✅ El archivo `public/_redirects` es necesario para SPAs


