import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Inicialização mais inteligente - evita hidration mismatch
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // No servidor ou primeira renderização, assume desktop para evitar layout shift
    if (typeof window === 'undefined') return false
    return window.innerWidth < MOBILE_BREAKPOINT
  })

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Handler otimizado usando o evento do matchMedia (mais eficiente)
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    // Definição inicial usando matchMedia (mais precisa)
    setIsMobile(mql.matches)
    
    // Event listener otimizado
    mql.addEventListener("change", onChange)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return isMobile
}

// Versão ainda mais otimizada com debounce (para casos extremos)
export function useIsMobileOptimized() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < MOBILE_BREAKPOINT
  })

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Debounce para evitar múltiplas chamadas durante resize
    let timeoutId: NodeJS.Timeout
    
    const onChange = (e: MediaQueryListEvent) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMobile(e.matches)
      }, 16) // ~1 frame de 60fps
    }

    setIsMobile(mql.matches)
    mql.addEventListener("change", onChange)
    
    return () => {
      clearTimeout(timeoutId)
      mql.removeEventListener("change", onChange)
    }
  }, [])

  return isMobile
}

// Hook para múltiplos breakpoints (caso precise)
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = React.useState<'mobile' | 'tablet' | 'desktop'>(() => {
    if (typeof window === 'undefined') return 'desktop'
    
    const width = window.innerWidth
    if (width < 768) return 'mobile'
    if (width < 1024) return 'tablet'
    return 'desktop'
  })

  React.useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)')
    const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)')
    
    const updateBreakpoint = () => {
      if (mobileQuery.matches) {
        setBreakpoint('mobile')
      } else if (tabletQuery.matches) {
        setBreakpoint('tablet')
      } else {
        setBreakpoint('desktop')
      }
    }

    updateBreakpoint()
    
    mobileQuery.addEventListener('change', updateBreakpoint)
    tabletQuery.addEventListener('change', updateBreakpoint)
    
    return () => {
      mobileQuery.removeEventListener('change', updateBreakpoint)
      tabletQuery.removeEventListener('change', updateBreakpoint)
    }
  }, [])

  return {
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop',
    breakpoint
  }
}

// Hook com SSR-safe (para Next.js/Remix)
export function useIsMobileSSR() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(true)
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    setIsMobile(mql.matches)
    mql.addEventListener("change", onChange)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Durante SSR/hidration, retorna false para evitar mismatch
  if (!hasMounted) return false
  
  return isMobile
}