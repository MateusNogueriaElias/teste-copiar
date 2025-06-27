
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Build otimizado para máxima performance
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: 'esbuild',
    reportCompressedSize: false, // Reduz tempo de build
    rollupOptions: {
      output: {
        // Chunks manuais super otimizados
        manualChunks: {
          // Core React separado
          'react-core': ['react', 'react-dom'],
          // Router isolado
          'react-router': ['react-router-dom'],
          // UI components principais
          'ui-core': ['lucide-react', '@radix-ui/react-slot'],
          // Radix UI components secundários
          'radix-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-popover',
            '@radix-ui/react-toast'
          ],
          // TanStack Query isolado
          'react-query': ['@tanstack/react-query'],
          // Pages não-críticas
          'pages-secondary': [
            './src/pages/Servicos',
            './src/pages/Sobre',
            './src/pages/Contato'
          ]
        },
        // Otimização de nomes de chunks
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'react-core') return 'assets/react-[hash].js';
          if (chunkInfo.name === 'ui-core') return 'assets/ui-[hash].js';
          return 'assets/[name]-[hash].js';
        },
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
      // Tree shaking ultra agressivo
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
        tryCatchDeoptimization: false,
      },
    },
  },

  // Deps otimização melhorada
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@radix-ui/react-slot'
    ],
    exclude: [
      'lucide-react', // Lazy load apenas ícones necessários
      '@radix-ui/react-dialog',
      '@radix-ui/react-popover'
    ],
  },

  // CSS otimizado
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        outputStyle: 'compressed',
      },
    },
  },

  // Experimentais para performance
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    legalComments: 'none',
  },
}));
