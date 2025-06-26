
import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = false
}: ScrollRevealProps) => {
  const { elementRef, isVisible } = useScrollReveal({ 
    threshold, 
    triggerOnce,
    rootMargin: '0px 0px -50px 0px'
  });

  const getTransformClass = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    
    switch (direction) {
      case 'up':
        return 'translate-y-12 opacity-0';
      case 'down':
        return '-translate-y-12 opacity-0';
      case 'left':
        return 'translate-x-12 opacity-0';
      case 'right':
        return '-translate-x-12 opacity-0';
      case 'fade':
        return 'opacity-0';
      default:
        return 'translate-y-12 opacity-0';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${getTransformClass()} ${className}`}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : '0ms' 
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
