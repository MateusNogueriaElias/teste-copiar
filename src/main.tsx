
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';

// Carrega CSS crítico primeiro
import './critical.css';

// Lazy load do App para dividir o bundle
const App = lazy(() => import('./App.tsx'));

// Componente de loading simples e rápido
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center fire-gradient">
    <div className="absolute inset-0 bg-black opacity-20"></div>
    <div className="relative z-10 text-white text-center">
      <div className="animate-pulse">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-poppins">
          Fire Domínios
        </h1>
      </div>
    </div>
  </div>
);

const root = createRoot(document.getElementById("root")!);

root.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
);

// Carrega CSS não-crítico após o carregamento inicial
setTimeout(() => {
  import('./index.css');
}, 100);
