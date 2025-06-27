
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';

// Lazy load com preload inteligente
const App = lazy(() => {
  // Preload Hero component imediatamente
  const heroPromise = import('./components/OptimizedHero');
  
  return Promise.all([
    import('./App.tsx'),
    heroPromise // Garante que o Hero está pronto
  ]).then(([appModule]) => appModule);
});

// Loading otimizado para menor impacto no TBT
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center fire-gradient">
    <div className="absolute inset-0 bg-black opacity-20"></div>
    <div className="relative z-10 text-white text-center hero-content">
      <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
        Sua Empresa
        <span className="block text-orange-200 font-black">Dominando</span>
        <span className="block text-orange-100">a Internet</span>
      </h1>
    </div>
  </div>
);

// Root otimizado - evita re-criação
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
);

// Preload inteligente baseado em condições de rede
const intelligentPreload = () => {
  // Verifica conexão de rede
  const connection = (navigator as any).connection;
  const isSlowConnection = connection && (
    connection.effectiveType === '2g' || 
    connection.effectiveType === 'slow-2g' ||
    connection.saveData
  );
  
  // Verifica se é mobile
  const isMobile = window.innerWidth <= 768;
  
  // Só faz preload em condições ideais
  if (!isSlowConnection && !isMobile) {
    // Preload sequencial para evitar sobrecarga de rede
    const preloadSequence = [
      () => import('./components/ServicesSection'),
      () => import('./components/BenefitsSection'),
      () => import('./components/CTASection'),
    ];
    
    // Delay entre preloads para não impactar a performance inicial
    preloadSequence.reduce((promise, importFn, index) => 
      promise.then(() => 
        new Promise<void>(resolve => {
          setTimeout(() => {
            importFn().then(() => resolve()).catch(() => resolve());
          }, 200 * (index + 1));
        })
      ), 
      Promise.resolve()
    );
  }
};

// Executa preload apenas quando o browser estiver idle
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Aguarda um pouco mais para garantir que o conteúdo crítico carregou
    setTimeout(intelligentPreload, 1000);
  }, { timeout: 5000 });
} else {
  // Fallback para browsers sem requestIdleCallback
  setTimeout(intelligentPreload, 2000);
}

// Preload de páginas no hover dos links (apenas desktop)
if (window.innerWidth > 768) {
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="/"]') as HTMLAnchorElement;
    
    if (link && !link.dataset.preloaded) {
      link.dataset.preloaded = 'true';
      const href = link.getAttribute('href');
      
      if (href === '/servicos') {
        import('./pages/Servicos').catch(() => {});
      } else if (href === '/sobre') {
        import('./pages/Sobre').catch(() => {});
      } else if (href === '/contato') {
        import('./pages/Contato').catch(() => {});
      }
    }
  }, { passive: true });
}
