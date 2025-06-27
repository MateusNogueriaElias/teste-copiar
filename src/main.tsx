
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';

// Lazy load otimizado com preload inteligente
const App = lazy(() => 
  import('./App.tsx').then(module => {
    // Preload apenas componentes críticos
    if (window.innerWidth > 768) {
      // Desktop: preload componentes visuais
      import('./components/OptimizedHero.tsx');
    }
    return module;
  })
);

// Loading minimalista para reduzir TBT
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

// Render otimizado
const root = createRoot(document.getElementById("root")!);

root.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
);

// Preload inteligente baseado em conexão
const preloadSecondaryComponents = () => {
  // Verifica se a conexão é boa antes de preload
  const connection = (navigator as any).connection;
  const isSlowConnection = connection && (connection.effectiveType === '2g' || connection.effectiveType === '3g');
  
  if (!isSlowConnection) {
    // Preload componentes não-críticos apenas em conexões boas
    const preloadPromises = [
      import('./pages/Servicos'),
      import('./pages/Sobre'), 
      import('./pages/Contato')
    ];
    
    // Preload sequencial para evitar sobrecarga
    preloadPromises.reduce((prev, curr) => 
      prev.then(() => new Promise(resolve => setTimeout(resolve, 100))).then(() => curr),
      Promise.resolve()
    );
  }
};

// Executa preload após idle time
if ('requestIdleCallback' in window) {
  requestIdleCallback(preloadSecondaryComponents, { timeout: 3000 });
} else {
  setTimeout(preloadSecondaryComponents, 2000);
}
