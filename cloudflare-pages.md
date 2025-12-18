# Despliegue en Cloudflare Pages

## Opción 1: Despliegue desde GitHub/GitLab (Recomendado)

### Paso 1: Subir el código a GitHub/GitLab

```bash
# Si aún no tienes un repositorio remoto:
git remote add origin https://github.com/TU_USUARIO/quai-propuesta-web.git
git push -u origin main
```

### Paso 2: Conectar con Cloudflare Pages

1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Selecciona tu cuenta
3. Ve a **Pages** en el menú lateral
4. Haz clic en **Create a project**
5. Selecciona **Connect to Git**
6. Autoriza Cloudflare a acceder a tu repositorio
7. Selecciona el repositorio `quai-propuesta-web`

### Paso 3: Configurar el Build

En la configuración del proyecto, usa estos valores:

- **Framework preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (raíz del proyecto)
- **Node version**: `18` o superior

### Paso 4: Desplegar

1. Haz clic en **Save and Deploy**
2. Cloudflare construirá y desplegará tu sitio automáticamente
3. Obtendrás una URL como: `https://quai-propuesta-web.pages.dev`

---

## Opción 2: Despliegue directo con Wrangler CLI

### Paso 1: Instalar Wrangler

```bash
npm install -g wrangler
# O usar npx sin instalar globalmente
```

### Paso 2: Autenticarte

```bash
wrangler login
```

Esto abrirá tu navegador para autenticarte con Cloudflare.

### Paso 3: Construir el proyecto

```bash
npm run build
```

### Paso 4: Desplegar

```bash
# Desplegar a Cloudflare Pages
npx wrangler pages deploy dist --project-name=quai-propuesta-web

# O si ya tienes un proyecto creado:
npx wrangler pages deploy dist
```

---

## Configuración de Dominio Personalizado (Opcional)

1. En Cloudflare Pages, ve a tu proyecto
2. Ve a **Custom domains**
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar los DNS

---

## Variables de Entorno (Si las necesitas)

Si tu aplicación necesita variables de entorno:

1. Ve a **Settings** > **Environment variables**
2. Agrega las variables necesarias
3. Separa las variables para Production, Preview y Development si es necesario

---

## Notas Importantes

- El archivo `_redirects` asegura que todas las rutas apunten a `index.html` (necesario para SPAs)
- Cloudflare Pages es **gratuito** y tiene límites generosos
- Los despliegues son automáticos cuando haces push a la rama principal
- Puedes configurar ramas específicas para preview deployments


