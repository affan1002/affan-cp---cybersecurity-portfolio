# Copilot Instructions for Cybersecurity Portfolio

## Project Overview
This is a React + Vite portfolio application for showcasing cybersecurity expertise and projects. It's a modern, responsive single-page application (SPA) styled with Tailwind CSS.

## Architecture & Key Components

### Tech Stack
- **Build Tool**: Vite v6 (not Create React App or plain Live Server)
- **UI Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS v3 (via CDN in HTML)
- **Node Type**: ES Modules (`"type": "module"` in package.json)

### Critical Setup Issue: Why "Live Server" Fails
This project is **NOT** a simple static HTML site. Using VS Code Live Server extension will fail because:
1. The project requires a **Vite dev server** to handle `.tsx` files and JSX compilation
2. Plain HTTP server cannot parse TypeScript/JSX—it needs Vite's transformation pipeline
3. **Solution**: Always use `npm run dev` (starts Vite on port 3000), NOT bare HTML in Live Server

### File Structure & Responsibilities
```
├── index.html              # Entry point with importmap for React CDN
├── index.tsx              # React root mount point
├── App.tsx                # Main component: two-column layout (sidebar + content)
├── constants.ts           # DATA object: all portfolio content (education, experience, projects)
├── components/
│   ├── Icons.tsx         # Icon components (SVG exports)
│   └── Section.tsx       # Reusable section wrapper with scroll animation (Intersection Observer)
├── vite.config.ts        # Vite config: port 3000, React plugin, API key definitions
└── tsconfig.json         # TypeScript settings
```

## Data Flow & Content Management
- **All content lives in `constants.ts`** as the `DATA` object (portfolio info, experience, projects, etc.)
- `App.tsx` imports `DATA` and renders it using JSX—no external CMS or API calls for content
- Components like `Section.tsx` handle presentation/animation logic, not data
- Add new portfolio items by modifying `DATA` in `constants.ts`, then referencing in `App.tsx`

## Development Workflow

### Starting the Dev Server (Required)
```bash
npm install          # One-time setup
npm run dev          # Starts Vite on http://localhost:3000
```
The Vite server auto-reloads on file changes—this is the **only way** to develop locally.

### Build for Production
```bash
npm run build        # Outputs optimized app to dist/
npm run preview      # Serve built app locally (runs on http://localhost:4173)
```

## Critical Patterns & Conventions

### Component Pattern: React Functional Components with TypeScript
All components use functional syntax with typed props:
```tsx
interface Props { title: string; children: React.ReactNode }
export const ComponentName: React.FC<Props> = ({ title, children }) => (...)
```

### Section Animation Pattern
`Section.tsx` wraps content with Intersection Observer for scroll-triggered fade-in. Use `<Section title="Title">` wrapper for all major content blocks to get auto-animation.

### Styling Approach
- Use Tailwind classes directly in JSX (TailwindCSS loaded via CDN in `index.html`)
- Responsive breakpoints: `md:` (768px), `lg:` (1024px)
- Custom scrollbar styling in `index.html`'s `<style>` tag
- No separate CSS files—all styling is inline Tailwind

### Icon Components Pattern
Icons are exported as React components from `components/Icons.tsx` (e.g., `<GithubIcon className="h-6 w-6" />`). Add new icons by creating SVG components in that file.

## Configuration & Environment

### Vite Config Key Settings (`vite.config.ts`)
- Dev server: `host: '0.0.0.0'`, `port: 3000` (enables external access)
- React plugin enabled for JSX compilation
- `GEMINI_API_KEY` environment variable exposed (not currently used, but prepared)
- Module alias: `@` points to project root

### Environment Variables
- Create `.env.local` to override settings
- `GEMINI_API_KEY` is defined but optional (prepared for future AI features)

## Common Debugging Tips
1. **Blank page on localhost:3000?** Check browser console for React errors or missing `root` div in `index.html`
2. **"Could not find root element" error?** Ensure `<div id="root"></div>` exists in `index.html`
3. **Styles not applying?** Verify Tailwind CDN link in `index.html` and check class names—Tailwind's CDN has limitations (doesn't process dynamic class names)
4. **TypeScript errors?** Run `npm run build` to validate; check `tsconfig.json` for strict settings
5. **Not loading in Live Server?** This project REQUIRES Vite—use `npm run dev` instead

## When Adding New Features
- **New portfolio content?** Edit `constants.ts` (DATA object)
- **New UI component?** Create in `components/` folder, follow React.FC pattern with TypeScript
- **New styling?** Add Tailwind classes directly to JSX (no separate CSS files)
- **API integration?** Add endpoints to `vite.config.ts` define, then use in components
- **External library?** Run `npm install <package>` and import normally
