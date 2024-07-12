import { useEffect, useRef, useCallback } from 'react';

const useIntersectionObserver = (className: string, threshold: number = 0.5) => {
  const targetRefs = useRef<(HTMLDivElement | null)[]>([]);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add(className);
        observer.unobserve;
      } 
    });
  }, [className]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { threshold });

    targetRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [observerCallback, threshold]);

  return targetRefs;
};

export default useIntersectionObserver;
