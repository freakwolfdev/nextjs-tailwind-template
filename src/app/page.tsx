const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-mono">
      {/* Header */}
      <header className="border-gray-700 border-b bg-gray-800 px-6 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 font-bold text-4xl text-green-400">
            &gt; nextjs-tailwind4-template
          </h1>
          <p className="text-gray-300">
            Modern development stack with Next.js, TypeScript, Tailwind CSS, and
            Biome
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="mb-6 font-bold text-2xl text-white">
              <span className="text-blue-400">⚙️</span> Tech Stack
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded border border-gray-700 bg-gray-800 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <code className="text-blue-400">Next.js 16.0.7</code>
                </div>
                <p className="text-gray-400 text-sm">
                  Full-stack React framework with App Router and server
                  components
                </p>
              </div>

              <div className="rounded border border-gray-700 bg-gray-800 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <code className="text-blue-400">React 19.2.1</code>
                </div>
                <p className="text-gray-400 text-sm">
                  Latest React with concurrent features and improved performance
                </p>
              </div>

              <div className="rounded border border-gray-700 bg-gray-800 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <code className="text-blue-400">Tailwind CSS 4.1.17</code>
                </div>
                <p className="text-gray-400 text-sm">
                  Utility-first CSS framework with zero-config setup
                </p>
              </div>

              <div className="rounded border border-gray-700 bg-gray-800 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <code className="text-blue-400">Biome 2.3.8</code>
                </div>
                <p className="text-gray-400 text-sm">
                  Fast linter and formatter, 10-100x faster than ESLint
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="mb-6 font-bold text-2xl text-white">
              <span className="text-blue-400">🔧</span> Features
            </h2>
            <div className="space-y-4">
              <div className="rounded border border-gray-700 bg-gray-800 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-yellow-400">⚡</span>
                  <code className="text-blue-400">Pre-commit Hooks</code>
                </div>
                <p className="text-gray-400 text-sm">
                  Automatic type checking and linting before every commit
                </p>
              </div>

              <div className="rounded border border-gray-700 bg-gray-800 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-yellow-400">⚡</span>
                  <code className="text-blue-400">TypeScript</code>
                </div>
                <p className="text-gray-400 text-sm">
                  Full type safety with strict mode and modern features
                </p>
              </div>

              <div className="rounded border border-gray-700 bg-gray-800 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-yellow-400">⚡</span>
                  <code className="text-blue-400">Turbopack</code>
                </div>
                <p className="text-gray-400 text-sm">
                  Next-generation bundler for lightning-fast development
                </p>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="rounded border border-gray-700 bg-gray-800 p-6">
            <h2 className="mb-4 font-bold text-white text-xl">
              <span className="text-blue-400">🚀</span> Getting Started
            </h2>
            <div className="space-y-4">
              <div className="rounded bg-gray-900 p-4">
                <code className="text-green-400">$ bun run dev</code>
                <p className="mt-2 text-gray-400 text-sm">
                  Start the Next.js development server with Turbopack
                </p>
              </div>

              <div className="rounded bg-gray-900 p-4">
                <code className="text-green-400">$ bun run check</code>
                <p className="mt-2 text-gray-400 text-sm">
                  Run linting and type checking
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-300">
                  Start editing{' '}
                  <code className="rounded bg-gray-700 px-2 py-1 text-green-400">
                    src/app/page.tsx
                  </code>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-gray-700 border-t bg-gray-800 px-6 py-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-gray-400">
            <span className="text-blue-400">💻</span> Built with Next.js, React,
            Tailwind CSS, and Biome
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
