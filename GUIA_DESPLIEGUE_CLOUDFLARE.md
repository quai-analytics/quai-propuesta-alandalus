# 🚀 Guía Manual: Desplegar en Cloudflare Pages

## 📋 Requisitos Previos

- ✅ Cuenta de Cloudflare (gratuita)
- ✅ Repositorio en GitHub, GitLab o Bitbucket
- ✅ Proyecto construido correctamente (`npm run build` funciona)

---

## 📝 Paso 1: Preparar el Repositorio

### 1.1 Verificar que tienes un repositorio Git

```bash
# En la terminal, desde la carpeta del proyecto:
git status
```

Si no tienes un repositorio Git inicializado:
```bash
git init
git add .
git commit -m "Initial commit"
```

### 1.2 Subir a GitHub/GitLab/Bitbucket

**Si ya tienes un repositorio remoto:**
```bash
git add .
git commit -m "Preparar para Cloudflare Pages"
git push origin main
```

**Si necesitas crear un nuevo repositorio:**

1. Ve a [GitHub.com](https://github.com) y crea un nuevo repositorio
2. Copia la URL del repositorio (ej: `https://github.com/tu-usuario/quai-propuesta-web.git`)
3. En tu terminal:
```bash
git remote add origin https://github.com/tu-usuario/quai-propuesta-web.git
git branch -M main
git push -u origin main
```

---

## 🌐 Paso 2: Acceder a Cloudflare Dashboard

1. Ve a [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. Inicia sesión con tu cuenta de Cloudflare
3. Si no tienes cuenta, crea una gratuita en [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)

---

## 📦 Paso 3: Crear un Proyecto en Cloudflare Pages

### 3.1 Navegar a Pages

1. En el menú lateral izquierdo del dashboard, busca y haz clic en **"Pages"**
2. Si es tu primera vez, verás una pantalla de bienvenida
3. Haz clic en el botón **"Create a project"** o **"Create application"**

### 3.2 Conectar con Git

1. Verás dos opciones:
   - **"Connect to Git"** ← Selecciona esta opción
   - "Upload assets" (para subir archivos manualmente)

2. Cloudflare te pedirá autorizar el acceso a tu proveedor de Git:
   - **GitHub** (recomendado)
   - **GitLab**
   - **Bitbucket**

3. Haz clic en el botón de tu proveedor (ej: "Connect to GitHub")

4. Se abrirá una ventana de autorización:
   - Revisa los permisos solicitados
   - Haz clic en **"Authorize Cloudflare Pages"** o **"Install & Authorize"**
   - Puedes elegir dar acceso a todos los repositorios o solo a repositorios específicos

---

## ⚙️ Paso 4: Configurar el Proyecto

### 4.1 Seleccionar el Repositorio

1. Después de autorizar, verás una lista de tus repositorios
2. Busca y selecciona **`quai-propuesta-web`** (o el nombre de tu repositorio)
3. Haz clic en **"Begin setup"** o **"Next"**

### 4.2 Configurar el Build

Aquí es donde configuras cómo Cloudflare construye tu aplicación:

**Configuración del proyecto:**
- **Project name**: `quai-propuesta-web` (o el nombre que prefieras)
  - Este será parte de tu URL: `quai-propuesta-web.pages.dev`

**Configuración del build:**

1. **Framework preset**: 
   - Selecciona **"Vite"** del menú desplegable
   - Esto configura automáticamente los valores básicos

2. **Build command**: 
   - Debe decir: `npm run build`
   - Si no aparece, escríbelo manualmente

3. **Build output directory**: 
   - Debe decir: `dist`
   - Esta es la carpeta que Vite genera después del build

4. **Root directory**: 
   - Déjalo vacío o pon `/` (raíz del repositorio)
   - Solo cámbialo si tu proyecto está en una subcarpeta

5. **Environment variables** (opcional):
   - Si tu app necesita variables de entorno, agrégalas aquí
   - Para este proyecto, no necesitas ninguna por ahora

### 4.3 Configuración Avanzada (Opcional)

Haz clic en **"Show advanced settings"** si quieres configurar:

- **Node version**: `18` o superior (Cloudflare usa Node 18 por defecto)
- **Build command**: Ya configurado como `npm run build`
- **Build output directory**: Ya configurado como `dist`

---

## 🚀 Paso 5: Desplegar

1. Revisa toda la configuración
2. Haz clic en **"Save and Deploy"** o **"Deploy site"**
3. Cloudflare comenzará a:
   - Clonar tu repositorio
   - Instalar dependencias (`npm install`)
   - Ejecutar el build (`npm run build`)
   - Desplegar los archivos estáticos

4. Verás un progreso en tiempo real del proceso de build

---

## ✅ Paso 6: Verificar el Despliegue

### 6.1 Esperar a que termine el build

- El proceso toma aproximadamente 1-3 minutos
- Verás mensajes como:
  - "Installing dependencies..."
  - "Building application..."
  - "Deploying..."

### 6.2 Acceder a tu sitio

Una vez completado, verás:

- ✅ **Status**: "Success"
- 🌐 **URL**: `https://quai-propuesta-web.pages.dev` (o el nombre que elegiste)
- Haz clic en la URL o en el botón **"Visit site"** para ver tu aplicación

---

## 🔄 Paso 7: Despliegues Automáticos (Configuración Futura)

### 7.1 Despliegues Automáticos

Cloudflare Pages está configurado para desplegar automáticamente cuando:

- ✅ Haces push a la rama `main` (o `master`)
- ✅ Haces merge de un Pull Request

### 7.2 Preview Deployments

- Cada Pull Request genera un **preview deployment** con su propia URL
- Útil para revisar cambios antes de hacer merge

### 7.3 Ver Historial de Despliegues

1. En tu proyecto de Pages, ve a la pestaña **"Deployments"**
2. Verás todos los despliegues anteriores
3. Puedes hacer rollback a una versión anterior si es necesario

---

## 🌍 Paso 8: Configurar Dominio Personalizado (Opcional)

Si quieres usar tu propio dominio (ej: `propuesta.quaianalytics.com`):

1. En tu proyecto de Pages, ve a **"Custom domains"**
2. Haz clic en **"Set up a custom domain"**
3. Ingresa tu dominio (ej: `propuesta.quaianalytics.com`)
4. Cloudflare te dará instrucciones para configurar los DNS:
   - Agrega un registro CNAME apuntando a `tu-proyecto.pages.dev`
   - O usa los nameservers de Cloudflare si gestionas el dominio completo

---

## 🔧 Solución de Problemas Comunes

### ❌ Error: "Build failed"

**Posibles causas:**
- Error en el código
- Dependencias faltantes
- Node version incorrecta

**Solución:**
1. Ve a la pestaña **"Deployments"**
2. Haz clic en el despliegue fallido
3. Revisa los logs del build para ver el error específico
4. Corrige el error y haz push nuevamente

### ❌ Error: "Module not found"

**Solución:**
- Verifica que `package.json` tenga todas las dependencias
- Asegúrate de que `node_modules` esté en `.gitignore` (no subirlo al repo)

### ❌ Las imágenes no se muestran

**Solución:**
- Verifica que las imágenes estén en la carpeta `public/`
- Las rutas deben ser `/nombre-imagen.jpg` (no `./public/nombre-imagen.jpg`)

### ❌ Las rutas no funcionan (404 al navegar)

**Solución:**
- Verifica que el archivo `public/_redirects` exista con el contenido:
  ```
  /*    /index.html   200
  ```
- Este archivo es necesario para SPAs (Single Page Applications)

---

## 📊 Resumen de Configuración

```
Proyecto: quai-propuesta-web
Framework: Vite
Build command: npm run build
Output directory: dist
Node version: 18
Branch: main
```

---

## 🎉 ¡Listo!

Tu aplicación ahora está desplegada en Cloudflare Pages y será actualizada automáticamente cada vez que hagas push a la rama principal.

**URL de tu sitio:** `https://quai-propuesta-web.pages.dev`

---

## 📚 Recursos Adicionales

- [Documentación oficial de Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Guía de Vite para producción](https://vitejs.dev/guide/static-deploy.html#cloudflare-pages)


