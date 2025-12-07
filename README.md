# Next.js + Tailwind CSS v4 + Biome Template

A modern, production-ready Next.js template with the latest tools and best practices for rapid development.

## 🚀 Features

- **Next.js 16.0.7** - Latest React framework with App Router
- **React 19.2.1** - Latest React with concurrent features
- **Tailwind CSS 4.1.17** - Next-generation utility-first CSS framework
- **Biome 2.3.8** - Ultra-fast linter and formatter
- **TypeScript 5.9.3** - Full type safety
- **Lefthook 2.0.8** - Git hooks for code quality
- **Pathpida 0.25.0** - Type-safe routing with auto-generated paths
- **Turbopack** - Lightning-fast bundling
- **Bun Support** - Ultra-fast package manager

## 📦 Package Details

### Core Dependencies

| Package | Version | Purpose | Benefits |
|---------|---------|---------|----------|
| **next** | 16.0.7 | React framework | Full-stack capabilities, SSR/SSG, API routes, middleware |
| **react** | 19.2.1 | UI library | Concurrent features, automatic batching, improved performance |
| **react-dom** | 19.2.1 | React DOM renderer | Server components, hydration optimization |

### Development Tools

| Package | Version | Purpose | Benefits |
|---------|---------|---------|----------|
| **@biomejs/biome** | 2.3.8 | Linter & formatter | 10-100x faster than ESLint/Prettier, single tool |
| **tailwindcss** | 4.1.17 | CSS framework | Utility-first, JIT compilation, design system |
| **@tailwindcss/postcss** | 4.1.17 | PostCSS integration | Seamless Tailwind processing |
| **lefthook** | 2.0.8 | Git hooks | Pre-commit quality checks, automated workflows |
| **pathpida** | 0.25.0 | Type-safe routing | Auto-generated paths, type safety, refactoring support |
| **typescript** | 5.9.3 | Type system | Static typing, better DX, fewer runtime errors |
| **npm-run-all** | 4.1.5 | Script runner | Parallel script execution |

### Type Definitions

| Package | Version | Purpose |
|---------|---------|---------|
| **@types/node** | 24.10.1 | Node.js type definitions |
| **@types/react** | 19.2.7 | React type definitions |
| **@types/react-dom** | 19.2.3 | React DOM type definitions |

## 🛠️ Development Workflow

### Prerequisites

- **Node.js** 18.17 or later
- **Bun** (recommended) or npm/yarn/pnpm

### Installation

```bash
# Using Bun (recommended)
bun install

# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### Development Scripts

```bash
# Start development server with hot reload
bun dev
# Runs: next dev (with Turbopack) + pathpida watch

# Build for production
bun build
# Runs: pathpida + next build (with Turbopack)

# Start production server
bun start

# Lint code
bun lint

# Format code
bun format

# Fix linting issues
bun run fix

# Type check
bun run type-check
```

### Development Server

The development server runs on [http://localhost:5172](http://localhost:5172) with:

- **Turbopack** - Lightning-fast bundling (up to 10x faster than Webpack)
- **Hot Module Replacement** - Instant updates
- **TypeScript checking** - Real-time type errors
- **Pathpida watch** - Auto-generates type-safe routes

## 🎨 Styling with Tailwind CSS v4

This template uses **Tailwind CSS v4** with the new architecture:

- **Zero configuration** - Works out of the box
- **CSS-first approach** - Write styles in CSS files
- **JIT compilation** - Only includes used styles
- **Design tokens** - Consistent spacing, colors, typography
- **Responsive design** - Mobile-first approach
- **Dark mode ready** - Built-in dark mode support

### Example Usage

```tsx
// Responsive design with Tailwind
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
      Card Title
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mt-2">
      Card description
    </p>
  </div>
</div>
```

## 🔧 Code Quality with Biome

**Biome** provides lightning-fast linting and formatting:

### Benefits
- **10-100x faster** than ESLint + Prettier
- **Single tool** for linting and formatting
- **Zero configuration** - Works out of the box
- **TypeScript support** - Full TS/TSX support
- **Next.js optimized** - Built-in Next.js rules

### Configuration

The template includes optimized Biome configuration for:
- **Next.js best practices** - App Router, Server Components
- **React patterns** - Hooks, components, performance
- **TypeScript** - Type safety, imports
- **Accessibility** - ARIA, semantic HTML
- **Performance** - Bundle optimization

### IDE Integration

For the best development experience, install the **Biome extension**:

#### VS Code Extension

1. **Install the extension:**
   ```bash
   # Via VS Code Extensions marketplace
   # Search for "Biome" by biomejs
   ```

2. **Or install via command line:**
   ```bash
   code --install-extension biomejs.biome
   ```

3. **Configure VS Code settings** (optional):
   ```json
   {
     "editor.defaultFormatter": "biomejs.biome",
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "quickfix.biome": "explicit",
       "source.organizeImports.biome": "explicit"
     }
   }
   ```

#### Other IDEs

- **WebStorm/IntelliJ**: Install via JetBrains Marketplace
- **Sublime Text**: Install via Package Control
- **Vim/Neovim**: Use `biome` LSP client
- **Emacs**: Use `lsp-mode` with Biome

### Usage

```bash
# Check for issues
bun lint

# Fix auto-fixable issues
bun lint --apply

# Format code
bun format

# Format and fix in one command
bun format --write
```

### Extension Benefits

With the Biome extension installed, you get:

- **Real-time linting** - See issues as you type
- **Auto-formatting** - Format on save or manual trigger
- **Quick fixes** - One-click fixes for auto-fixable issues
- **Import organization** - Automatic import sorting
- **TypeScript support** - Full TS/TSX integration
- **Performance** - Lightning-fast feedback

## 🪝 Pre-commit Hooks with Lefthook

**Lefthook** provides automated code quality checks before every commit:

### Benefits
- **Prevents bad commits** - Blocks commits with errors
- **Automated quality checks** - TypeScript + linting on every commit
- **Team consistency** - Same checks for all developers
- **Fast and efficient** - Runs checks in parallel when possible
- **Fast feedback** - Immediate error detection

### What Gets Checked

The pre-commit hook automatically runs:

1. **🧹 Biome Linting**
   - Code style and quality checks
   - Potential bugs and code quality issues
   - Error on warnings for strict enforcement

2. **✨ Biome Formatting**
   - Code formatting checks
   - Ensures consistent code style

3. **📝 TypeScript Type Checking**
   - Compiles TypeScript without emitting files
   - Catches type errors and compilation issues
   - Ensures type safety across the codebase

4. **🏗️ Build Check**
   - Verifies the project builds successfully
   - Catches build-time errors before commit

### Pre-push Hook

The pre-push hook automatically runs:

- **🔧 Auto-fix** - Automatically fixes linting issues before pushing

### Pre-commit Process

When you commit, Lefthook automatically runs all checks:

```bash
🧹 Running Biome linting...
✅ Linting passed!

✨ Running Biome formatting...
✅ Formatting passed!

📝 Running TypeScript type checking...
✅ Type checking passed!

🏗️ Running build check...
✅ Build passed!

✅ All checks passed! Proceeding with commit...
```

### Error Handling

If checks fail, the commit is blocked with clear error messages:

```bash
❌ Biome linting failed!
   Please fix the linting issues before committing.

❌ TypeScript type checking failed!
   Please fix the type errors before committing.
```

### Manual Testing

You can run the same checks manually:

```bash
# Run linting
bun lint

# Format code
bun format

# Fix linting issues
bun run fix

# Type check
bun run type-check

# Run all checks (what pre-commit does)
bun lint && bun format && bun run type-check && bun build
```

### Configuration

The git hooks are configured in `lefthook.yml`:

```yaml
pre-commit:
  parallel: false
  commands:
    biome-check:
      run: bun run lint
    biome-format:
      run: bun run format
    type-check:
      run: bun run type-check
    build:
      run: bun run build

pre-push:
  commands:
    fix:
      run: bun run fix
```

### Benefits for Teams

- **Consistent code quality** - Everyone follows the same standards
- **Fewer bugs** - Catch issues before they reach the repository
- **Faster reviews** - Code is already formatted and linted
- **Better git history** - Clean, error-free commits
- **Reduced CI failures** - Local checks prevent remote failures
- **Auto-fix on push** - Automatically fixes issues before pushing

## 🛣️ Type-Safe Routing with Pathpida

**Pathpida** generates type-safe route definitions:

### Benefits
- **Type safety** - Compile-time route validation
- **Auto-completion** - IDE support for routes
- **Refactoring safe** - Automatic updates on route changes
- **Query parameters** - Type-safe search params
- **Hash support** - Fragment handling

### Generated Routes

```typescript
// Auto-generated in src/lib/$path.ts
export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ 
    pathname: '/' as const, 
    hash: url?.hash, 
    path: `/${buildSuffix(url)}` 
  })
};

// Usage in components
import { pagesPath } from '@/lib/$path';

<Link href={pagesPath.$url().path}>
  Home
</Link>
```

## 🚀 Performance Optimizations

### Built-in Optimizations

- **Turbopack** - 10x faster than Webpack
- **React 19** - Concurrent features, automatic batching
- **Server Components** - Reduced bundle size
- **Image optimization** - Next.js Image component
- **Font optimization** - next/font integration
- **Code splitting** - Automatic route-based splitting

### Bundle Analysis

```bash
# Analyze bundle size
bun build
# Check .next/analyze/ for detailed reports
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── main/              # Route segments
│       └── page.tsx       # /main route
├── components/            # Reusable components
├── lib/                   # Utilities and configurations
│   └── $path.ts          # Auto-generated routes
└── styles/               # Global styles
```

## 🎯 Best Practices

### Component Organization
- Use **Server Components** by default
- Add `"use client"` only when needed
- Keep components small and focused
- Use TypeScript interfaces for props

### Styling Guidelines
- Use **Tailwind utilities** for styling
- Create **design tokens** for consistency
- Implement **responsive design** mobile-first
- Use **CSS variables** for theming

### Performance Tips
- Use **Server Components** for data fetching
- Implement **loading.tsx** for better UX
- Use **error.tsx** for error boundaries
- Optimize images with **next/image**

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
npx vercel

# Or connect GitHub repository
# Vercel will auto-deploy on push
```

### Other Platforms

```bash
# Build for production
bun build

# Start production server
bun start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `bun lint` and `bun format`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Vercel** for Next.js and deployment platform
- **Tailwind Labs** for the amazing CSS framework
- **Biome** for the fast linter and formatter
- **React team** for the incredible library

---

**Happy coding! 🚀**