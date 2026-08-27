# Phrase Manager App

## 🚀 Project Overview

Este proyecto es una aplicación en React que permite **agregar, buscar y eliminar frases**, mostrando cada frase en una card dentro de una matriz. A medida que el usuario escribe en la barra de búsqueda, las frases se filtran dinámicamente.

---

## 🏗️ Estructura del Proyecto

```
📂 src
 ┣ 📂 hooks                   # Hooks personalizados
 ┃ 📂 utils                   # Funciones utilitarias
 ┣ 📂 features                # Lógica específica de la feature
 ┃ ┣ 📂 phrase                # Logica especifica del modulo de phrases
 ┃    ┣ 📂 context            # Context API, acciones de estado, reducers
 ┃    ┣ 📂 types              # Tipado para typescript
 ┃    ┣ 📂 components         # Componentes específicos de la feature
 ┃    ┗ PhraseIndex.tsx       # Punto de entrada del modulo
```

---

## ✨ Features Implementadas

- **Gestión de estado con Context API** para manejar las frases.
- **Búsqueda en tiempo real con debouncing** para mejorar la performance.
- **Persistencia en LocalStorage** para guardar frases entre sesiones.
- **Animaciones con Framer Motion** para mejorar la experiencia de usuario.
- **Manejo de errores con Error Boundaries** para evitar que fallos críticos rompan la UI.
- **Virtualización y memoization** para optimizar el renderizado de listas largas.
- **Internacionalización (i18n)** para soportar múltiples idiomas.
- **Pruebas unitarias con cobertura del 90%**, asegurando estabilidad en el código.
- **Linting y formateo con Prettier + ESLint**, manteniendo un código limpio y uniforme.
- **Husky para pre-commits**, ejecutando validaciones antes de subir cambios al repositorio.

---

## 📦 Instalación y Configuración

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/Sashaejarque/phrase-matrix.git
   cd phrase-matrix
   ```

2. Instalar dependencias:

   ```sh
   npm install
   ```

3. Iniciar la aplicación:
   ```sh
   npm run dev
   ```

---

## ✅ Pruebas

Ejecutar los tests unitarios:

```sh
npm run test
```

Ver cobertura de pruebas:

```sh
npm run test:coverage
```

---
