# Socket Chat

Una aplicación de chat en tiempo real construida con React, Redux Toolkit y Socket.io.client.

## Pre-requisitos

Tener instalados los programas:

[NodeJs](https://nodejs.org/en/)\@lastest\
[pnpm](https://pnpm.io/es/installation)\@lastest

## Configuración

Antes de iniciar la aplicación, asegúrate de configurar las siguientes variables de entorno en tu archivo .env:

- `VITE_API_HOST`: especifica la URL del host donde se encuentra el servidor de la API.
- `VITE_API_ROUTE`: especifica la ruta base de la API. Ejemplo: `/api`.
- `VITE_API_URL`: combina el host y la ruta de la API para obtener la URL completa.

## Instalación

1. Clona el repositorio
2. Instala las dependencias: `pnpm install`
3. Configura las variables de entorno en un archivo `.env` siguiendo el formato del archivo `.env.example`
4. Inicia la aplicación: `pnpm start`

## Scripts

- `start`: Inicia la aplicación en modo desarrollo.
- `build`: Crea una versión de producción de la aplicación en la carpeta `dist`.
- `preview`: Sirve la versión de producción de la aplicación generada con `vite build` para previsualizarla localmente antes de publicarla.
- `lint`: Ejecuta el linter ESLint en los archivos TypeScript de la carpeta `src`. Se utiliza el parámetro `--fix` para corregir automáticamente algunos errores y advertencias.

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Socket.io-client](https://socket.io/docs/v3/client-api/index.html)
- [Vite](https://vitejs.dev/)
