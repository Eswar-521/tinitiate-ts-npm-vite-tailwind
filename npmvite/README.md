## TypeScript + Vite + Tailwind CSS (ts-npm-vite-tailwind) Setup

## To Create a New vite project
```sh
npm create vite@latest ts-npm-vite-tailwind 
```
## Navigate into the Project Folder
```sh
cd ts-npm-vite-tailwind
```

## install Dependencies
```sh
npm install
```

## Install Tailwind Css
```sh
npm install tailwindcss @tailwindcss/vite
```

## Configure the Vite plugin
- Add the @tailwindcss/vite plugin to your Vite configuration

```sh
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),react()
  ],
})
```

## Import Tailwind Css
- Add an @import to your CSS file that imports Tailwind CSS.
```sh
@import "tailwindcss";
```

## Start Your Build Process
```sh
npm run dev
```


