import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // SUAS CONFIGURAÇÕES DE SERVIDOR (MANTIDAS)
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },

  // LISTA DE PLUGINS ATUALIZADA
  plugins: [
    react(),
    
    // Plugin que você já usava (só para desenvolvimento)
    mode === 'development' && componentTagger(),
    

  ].filter(Boolean), // O .filter(Boolean) continua, para remover plugins inativos
  
  // SUAS CONFIGURAÇÕES DE RESOLVE (MANTIDAS)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));