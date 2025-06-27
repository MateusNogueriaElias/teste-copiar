
import { memo, lazy, Suspense, useEffect, useState } from 'react';

// Lazy load com preload inteligente
const OptimizedHero = lazy(() => import('@/components/OptimizedHero'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const BenefitsSection = lazy(() => import('@/components/BenefitsSection'));
const CTASection = lazy(() => import('@/components/CTASection'));

// Skeleton super otimizado
const SectionSkeleton = memo(() => (
  <div className="py-16 sm:py-32 bg-gradient-to-br from-orange-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="h-8 bg-orange-200 rounded w-1/2 mx-auto animate-pulse"></div>
        <div className="h-4 bg-orange-100 rounded w-3/4 mx-auto animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-64 bg-orange-100 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
));

SectionSkeleton.displayName = 'SectionSkeleton';

const Home = memo(() => {
  const [sectionsVisible, setSectionsVisible] = useState({
    services: false,
    benefits: false,
    cta: false
  });

  useEffect(() => {
    // Intersection Observer para lazy loading mais eficiente
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setSectionsVisible(prev => ({ ...prev, [sectionId]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        rootMargin: '100px', // Carrega um pouco antes de ficar visível
        threshold: 0.1 
      }
    );

    // Observa elementos placeholder
    const placeholders = document.querySelectorAll('.section-placeholder');
    placeholders.forEach(placeholder => observer.observe(placeholder));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Prioridade máxima */}
      <Suspense fallback={
        <section className="relative min-h-screen flex items-center justify-center fire-gradient">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white hero-content">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
              Sua Empresa
              <span className="block text-orange-200 font-black">Dominando</span>
              <span className="block text-orange-100">a Internet</span>
            </h1>
          </div>
        </section>
      }>
        <OptimizedHero />
      </Suspense>

      {/* Placeholder para Services Section */}
      <div id="services" className="section-placeholder" style={{ minHeight: '1px' }}>
        {sectionsVisible.services && (
          <Suspense fallback={<SectionSkeleton />}>
            <ServicesSection />
          </Suspense>
        )}
      </div>

      {/* Placeholder para Benefits Section */}
      <div id="benefits" className="section-placeholder" style={{ minHeight: '1px' }}>
        {sectionsVisible.benefits && (
          <Suspense fallback={<SectionSkeleton />}>
            <BenefitsSection />
          </Suspense>
        )}
      </div>

      {/* Placeholder para CTA Section */}
      <div id="cta" className="section-placeholder" style={{ minHeight: '1px' }}>
        {sectionsVisible.cta && (
          <Suspense fallback={<SectionSkeleton />}>
            <CTASection />
          </Suspense>
        )}
      </div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
