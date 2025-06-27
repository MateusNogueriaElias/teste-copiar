
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';

// Lazy load simplificado
const App = lazy(() => import('./App.tsx'));

// Loading simplificado e robusto
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center" style={{
    background: 'linear-gradient(135deg, #f54e01 0%, #e53b01 50%, #feb800 100%)'
  }}>
    <div className="absolute inset-0 bg-black opacity-20"></div>
    <div className="relative z-10 text-white text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
        Sua Empresa
        <span className="block text-orange-200 font-black">Dominando</span>
        <span className="block text-orange-100">a Internet</span>
      </h1>
    </div>
  </div>
);

// Root otimizado
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

// Render com fallback robusto
try {
  root.render(
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  );
} catch (error) {
  console.error('Erro ao renderizar:', error);
  // Fallback manual em caso de erro
  rootElement.innerHTML = `
    <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #f54e01 0%, #e53b01 50%, #feb800 100%);">
      <div style="position: absolute; inset: 0; background: black; opacity: 0.2;"></div>
      <div style="position: relative; z-index: 10; color: white; text-align: center; font-family: Poppins, sans-serif;">
        <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 2rem; line-height: 1.25;">
          Sua Empresa
          <span style="display: block; color: #fed6aa; font-weight: 900;">Dominando</span>
          <span style="display: block; color: #ffedd5;">a Internet</span>
        </h1>
        <p style="font-size: 1.2rem;">Carregando...</p>
      </div>
    </div>
  `;
}

// Preload inteligente simplificado
const simplePreload = () => {
  // Só faz preload em condições ideais
  if (typeof window !== 'undefined' && window.innerWidth > 768) {
    const connection = (navigator as any).connection;
    const isSlowConnection = connection && (
      connection.effectiveType === '2g' || 
      connection.effectiveType === 'slow-2g' ||
      connection.saveData
    );
    
    if (!isSlowConnection) {
      // Preload com delay para não impactar performance inicial
      setTimeout(() => {
        import('./components/ServicesSection').catch(() => {});
      }, 2000);
      
      setTimeout(() => {
        import('./components/BenefitsSection').catch(() => {});
      }, 3000);
      
      setTimeout(() => {
        import('./components/CTASection').catch(() => {});
      }, 4000);
    }
  }
};

// Executa preload apenas quando seguro
if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(simplePreload, { timeout: 5000 });
  } else {
    setTimeout(simplePreload, 3000);
  }
}
