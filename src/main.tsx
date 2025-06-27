
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';

// Lazy load otimizado
const App = lazy(() => import('./App.tsx'));

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
