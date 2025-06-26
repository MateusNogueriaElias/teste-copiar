
import { memo, lazy, Suspense } from 'react';

// Lazy load dos componentes não críticos
const ScrollReveal = lazy(() => import('@/components/ScrollReveal'));
const OptimizedHero = lazy(() => import('@/components/OptimizedHero'));

// Lazy load das seções não críticas
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const BenefitsSection = lazy(() => import('@/components/BenefitsSection'));
const CTASection = lazy(() => import('@/components/CTASection'));

// Componente de loading simples
const SectionSkeleton = () => (
  <div className="py-16 sm:py-32 bg-gradient-to-br from-orange-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-8">
        <div className="h-8 bg-orange-200 rounded w-1/2 mx-auto"></div>
        <div className="h-4 bg-orange-100 rounded w-3/4 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-64 bg-orange-100 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Home = memo(() => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Carrega primeiro para melhorar LCP */}
      <Suspense fallback={
        <section className="relative min-h-screen flex items-center justify-center fire-gradient">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
            <div className="animate-pulse">
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
                Sua Empresa
                <span className="block text-orange-200 font-black">Dominando</span>
                <span className="block text-orange-100">a Internet</span>
              </h1>
            </div>
          </div>
        </section>
      }>
        <OptimizedHero />
      </Suspense>

      {/* Seções não críticas - Lazy loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CTASection />
      </Suspense>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
