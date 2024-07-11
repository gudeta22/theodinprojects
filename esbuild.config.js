// esbuild.config.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  outfile: 'dist/bundle.js',
  loader: { '.js': 'jsx' },
  define: { 'process.env.NODE_ENV': '"development"' },
  sourcemap: true,
}).catch(() => process.exit(1));
