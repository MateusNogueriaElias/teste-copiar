
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';

// CSS crítico já está inline no HTML
// CSS não-crítico será carregado via preload

// Lazy load otimizado do App
const App = lazy(() => 
  import('./App.tsx').then(module => {
    // Preload componentes críticos em paralelo
    import('./components/OptimizedHero.tsx');
    return module;
  })
);

// Loading otimizado para não impactar LCP
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center fire-gradient">
    <div className="absolute inset-0 bg-black" style={{ opacity: 0.2 }}></div>
    <div className="relative z-10 text-white text-center hero-content">
      <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
        Sua Empresa
        <span className="block text-orange-200 font-black">Dominando</span>
        <span className="block text-orange-100">a Internet</span>
      </h1>
    </div>
  </div>
);

// Otimização de render
const root = createRoot(document.getElementById("root")!);

root.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
);

// Preload de recursos não-críticos após carregamento inicial
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Preload componentes das outras páginas
    import('./pages/Servicos');
    import('./pages/Sobre'); 
    import('./pages/Contato');
  });
} else {
  setTimeout(() => {
    import('./pages/Servicos');
    import('./pages/Sobre');
    import('./pages/Contato');
  }, 2000);
}
