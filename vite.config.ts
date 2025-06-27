
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

  // Otimizações agressivas para performance
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk otimizado
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          // UI components em chunk separado
          'ui-components': ['lucide-react'],
          // Radix UI components
          'radix-ui': [
            '@radix-ui/react-slot',
            '@radix-ui/react-dialog',
            '@radix-ui/react-popover'
          ],
        },
      },
      // Tree shaking mais agressivo
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },
  },

  // Otimizações de dependencies para reduzir JavaScript não utilizado
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['lucide-react'], // Lazy load apenas os ícones necessários
  },

  // Configurações para reduzir CSS blocking
  css: {
    preprocessorOptions: {
      scss: {
        // Remove CSS não utilizado
        outputStyle: 'compressed',
      },
    },
  },
}));
