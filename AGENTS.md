# AGENTS.md

## Commands

- **Build**: `npm run build` (Astro build)
- **Dev**: `npm run dev` (Astro dev server)
- **Preview**: `npm run preview` (Astro preview)
- **Format**: `npx prettier --write .` (Prettier with Astro/Tailwind plugins)

## Code Style

- **Language**: TypeScript with strict Astro config
- **Framework**: Astro + React (JSX transform: react-jsx)
- **Styling**: Tailwind CSS v4 with custom properties
- **Imports**: Relative paths for components, absolute for Astro assets
- **Naming**: PascalCase for components, camelCase for props/variables
- **Types**: Interface definitions above component functions
- **Props**: Default values as empty objects/strings
- **Formatting**: Prettier with astro-plugin and tailwindcss-plugin
- **Error Handling**: TypeScript strict mode enforces type safety

## Project Structure

- Components in `src/components/` with .tsx extension
- Pages in `src/pages/` with .astro extension
- Styles in `src/styles/` with Tailwind imports
- Public assets in `public/` directory
